package com.motherplatform.app.repository;

import com.motherplatform.app.model.Site;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SiteRepository extends MongoRepository<Site, String> {
    List<Site> findByOwnerUserId(String ownerUserId);
}
