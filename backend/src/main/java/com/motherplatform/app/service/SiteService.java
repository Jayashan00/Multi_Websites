package com.motherplatform.app.service;

import com.motherplatform.app.exception.ApiException;
import com.motherplatform.app.model.Site;
import com.motherplatform.app.model.Template;
import com.motherplatform.app.model.User;
import com.motherplatform.app.repository.SiteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SiteService {

    private final SiteRepository siteRepository;
    private final TemplateService templateService;

    public Site getPublic(String id) {
        return siteRepository.findById(id)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Site not found"));
    }

    public List<Site> listForUser(String userId) {
        return siteRepository.findByOwnerUserId(userId);
    }

    public List<Site> listAll() {
        return siteRepository.findAll();
    }

    public Site createForUser(User owner, Site request) {
        // Validate the chosen template exists and is active — fails fast with a clear error
        // rather than letting a client create a site nothing can render.
        Template template = templateService.getBySlug(request.getTemplateSlug());

        Site site = Site.builder()
                .ownerUserId(owner.getId())
                .templateSlug(template.getSlug())
                .businessName(request.getBusinessName())
                .businessNameAccent(request.getBusinessNameAccent() != null ? request.getBusinessNameAccent() : "")
                .monogram(request.getMonogram())
                .tagline(request.getTagline())
                .subtitle(request.getSubtitle())
                .logoUrl(request.getLogoUrl())
                .heroImageUrl(request.getHeroImageUrl())
                .heroVideoUrl(request.getHeroVideoUrl())
                .primaryColor(request.getPrimaryColor() != null ? request.getPrimaryColor() : template.getDefaultPrimaryColor())
                .secondaryColor(request.getSecondaryColor() != null ? request.getSecondaryColor() : template.getDefaultSecondaryColor())
                .contact(request.getContact())
                .social(request.getSocial())
                .whatsapp(request.getWhatsapp())
                .seo(request.getSeo())
                .published(false)
                .build();

        return siteRepository.save(site);
    }

    public Site update(String siteId, User requester, Site patch) {
        Site existing = findOwned(siteId, requester);

        if (patch.getBusinessName() != null) existing.setBusinessName(patch.getBusinessName());
        if (patch.getBusinessNameAccent() != null) existing.setBusinessNameAccent(patch.getBusinessNameAccent());
        if (patch.getMonogram() != null) existing.setMonogram(patch.getMonogram());
        if (patch.getTagline() != null) existing.setTagline(patch.getTagline());
        if (patch.getSubtitle() != null) existing.setSubtitle(patch.getSubtitle());
        if (patch.getLogoUrl() != null) existing.setLogoUrl(patch.getLogoUrl());
        if (patch.getHeroImageUrl() != null) existing.setHeroImageUrl(patch.getHeroImageUrl());
        if (patch.getHeroVideoUrl() != null) existing.setHeroVideoUrl(patch.getHeroVideoUrl());
        if (patch.getPrimaryColor() != null) existing.setPrimaryColor(patch.getPrimaryColor());
        if (patch.getSecondaryColor() != null) existing.setSecondaryColor(patch.getSecondaryColor());
        if (patch.getContact() != null) existing.setContact(patch.getContact());
        if (patch.getSocial() != null) existing.setSocial(patch.getSocial());
        if (patch.getWhatsapp() != null) existing.setWhatsapp(patch.getWhatsapp());
        if (patch.getSeo() != null) existing.setSeo(patch.getSeo());
        if (patch.getCustomPages() != null) existing.setCustomPages(patch.getCustomPages());

        return siteRepository.save(existing);
    }

    public Site setPublished(String siteId, User requester, boolean published) {
        Site existing = findOwned(siteId, requester);
        existing.setPublished(published);
        return siteRepository.save(existing);
    }

    public void delete(String siteId, User requester) {
        Site existing = findOwned(siteId, requester);
        siteRepository.delete(existing);
    }

    /** Fetches a site and verifies the requester owns it (admins may access any site). */
    private Site findOwned(String siteId, User requester) {
        Site site = siteRepository.findById(siteId)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Site not found"));

        boolean isOwner = site.getOwnerUserId().equals(requester.getId());
        boolean isAdmin = requester.getRole() == User.Role.ADMIN;

        if (!isOwner && !isAdmin) {
            throw new ApiException(HttpStatus.FORBIDDEN, "You do not have access to this site");
        }
        return site;
    }
}
