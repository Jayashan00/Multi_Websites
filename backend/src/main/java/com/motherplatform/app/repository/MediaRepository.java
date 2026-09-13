package com.motherplatform.app.repository;

import com.motherplatform.app.model.Media;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MediaRepository extends MongoRepository<Media, String> {
    List<Media> findByOwnerUserId(String ownerUserId);
}
