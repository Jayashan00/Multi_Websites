package com.motherplatform.app.controller;

import com.motherplatform.app.model.Template;
import com.motherplatform.app.service.TemplateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/public/templates")
@RequiredArgsConstructor
public class PublicTemplateController {

    private final TemplateService templateService;

    @GetMapping
    public List<Template> listActiveTemplates() {
        return templateService.listActive();
    }

    @GetMapping("/{slug}")
    public Template getTemplate(@PathVariable String slug) {
        return templateService.getBySlug(slug);
    }
}
