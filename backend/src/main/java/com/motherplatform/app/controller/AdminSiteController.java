package com.motherplatform.app.controller;

import com.motherplatform.app.model.Site;
import com.motherplatform.app.service.SiteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin/sites")
@RequiredArgsConstructor
public class AdminSiteController {

    private final SiteService siteService;

    @GetMapping
    public List<Site> listAll() {
        return siteService.listAll();
    }
}
