package com.motherplatform.app.controller;

import com.motherplatform.app.model.Site;
import com.motherplatform.app.model.User;
import com.motherplatform.app.security.CurrentUserProvider;
import com.motherplatform.app.service.SiteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/sites")
@RequiredArgsConstructor
public class SiteController {

    private final SiteService siteService;
    private final CurrentUserProvider currentUserProvider;

    @GetMapping("/mine")
    public List<Site> mySites() {
        return siteService.listForUser(currentUserProvider.getCurrentUser().getId());
    }

    @PostMapping
    public ResponseEntity<Site> create(@RequestBody Site request) {
        User me = currentUserProvider.getCurrentUser();
        return ResponseEntity.ok(siteService.createForUser(me, request));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Site> update(@PathVariable String id, @RequestBody Site patch) {
        return ResponseEntity.ok(siteService.update(id, currentUserProvider.getCurrentUser(), patch));
    }

    @PatchMapping("/{id}/publish")
    public ResponseEntity<Site> setPublished(@PathVariable String id, @RequestBody Map<String, Boolean> body) {
        boolean published = Boolean.TRUE.equals(body.getOrDefault("published", false));
        return ResponseEntity.ok(siteService.setPublished(id, currentUserProvider.getCurrentUser(), published));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        siteService.delete(id, currentUserProvider.getCurrentUser());
        return ResponseEntity.noContent().build();
    }
}
