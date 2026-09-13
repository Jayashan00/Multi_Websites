package com.motherplatform.app.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "media")
public class Media {

    @Id
    private String id;

    @Indexed
    private String ownerUserId;

    private String originalFilename;
    private String storedFilename;
    private String contentType;
    private long sizeBytes;

    /** Public URL the frontend can use directly, e.g. /uploads/{storedFilename} */
    private String url;

    @CreatedDate
    private Instant createdAt;
}
