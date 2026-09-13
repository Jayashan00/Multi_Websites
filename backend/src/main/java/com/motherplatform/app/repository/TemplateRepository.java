package com.motherplatform.app.repository;

import com.motherplatform.app.model.Template;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface TemplateRepository extends MongoRepository<Template, String> {
    Optional<Template> findBySlug(String slug);
    List<Template> findByActiveTrue();
    boolean existsBySlug(String slug);
}
