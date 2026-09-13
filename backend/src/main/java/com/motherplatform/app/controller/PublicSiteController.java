package com.motherplatform.app.controller;

import com.motherplatform.app.model.Site;
import com.motherplatform.app.service.SiteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * This is the endpoint every template's site-config loader calls:
 * GET /api/public/sites/{siteId}
 * No auth required — a live customized site must be viewable by anyone,
 * the same way the actual deployed client website would be public.
 */
@RestController
@RequestMapping("/api/public/sites")
@RequiredArgsConstructor
public class PublicSiteController {

    private final SiteService siteService;

    @GetMapping("/{id}")
    public Site getSiteConfig(@PathVariable String id) {
        return siteService.getPublic(id);
    }
}
