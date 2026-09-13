package com.motherplatform.app.service;

import com.motherplatform.app.exception.ApiException;
import com.motherplatform.app.model.Template;
import com.motherplatform.app.repository.TemplateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TemplateService {

    private final TemplateRepository templateRepository;

    public List<Template> listActive() {
        return templateRepository.findByActiveTrue();
    }

    public List<Template> listAll() {
        return templateRepository.findAll();
    }

    public Template getBySlug(String slug) {
        return templateRepository.findBySlug(slug)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "No template with slug '" + slug + "'"));
    }

    public Template create(Template template) {
        if (templateRepository.existsBySlug(template.getSlug())) {
            throw new ApiException(HttpStatus.CONFLICT, "A template with slug '" + template.getSlug() + "' already exists");
        }
        return templateRepository.save(template);
    }

    public Template update(String id, Template patch) {
        Template existing = templateRepository.findById(id)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Template not found"));

        if (patch.getName() != null) existing.setName(patch.getName());
        if (patch.getCategory() != null) existing.setCategory(patch.getCategory());
        if (patch.getDescription() != null) existing.setDescription(patch.getDescription());
        if (patch.getThumbnailUrl() != null) existing.setThumbnailUrl(patch.getThumbnailUrl());
        if (patch.getPreviewUrl() != null) existing.setPreviewUrl(patch.getPreviewUrl());
        if (patch.getDevPort() != null) existing.setDevPort(patch.getDevPort());
        if (patch.getDefaultPrimaryColor() != null) existing.setDefaultPrimaryColor(patch.getDefaultPrimaryColor());
        if (patch.getDefaultSecondaryColor() != null) existing.setDefaultSecondaryColor(patch.getDefaultSecondaryColor());
        if (patch.getPages() != null) existing.setPages(patch.getPages());
        existing.setSecondaryColorCustomizable(patch.isSecondaryColorCustomizable());
        existing.setServerRendered(patch.isServerRendered());
        existing.setActive(patch.isActive());

        return templateRepository.save(existing);
    }

    public void delete(String id) {
        if (!templateRepository.existsById(id)) {
            throw new ApiException(HttpStatus.NOT_FOUND, "Template not found");
        }
        templateRepository.deleteById(id);
    }
}
