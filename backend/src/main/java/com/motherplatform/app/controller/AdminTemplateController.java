package com.motherplatform.app.controller;

import com.motherplatform.app.model.Template;
import com.motherplatform.app.service.TemplateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/templates")
@RequiredArgsConstructor
public class AdminTemplateController {

    private final TemplateService templateService;

    @GetMapping
    public List<Template> listAll() {
        return templateService.listAll();
    }

    @PostMapping
    public ResponseEntity<Template> create(@RequestBody Template template) {
        return ResponseEntity.ok(templateService.create(template));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Template> update(@PathVariable String id, @RequestBody Template template) {
        return ResponseEntity.ok(templateService.update(id, template));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        templateService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
