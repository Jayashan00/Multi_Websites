package com.motherplatform.app.service;

import com.motherplatform.app.exception.ApiException;
import com.motherplatform.app.model.Media;
import com.motherplatform.app.repository.MediaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class MediaService {

    private final MediaRepository mediaRepository;

    @Value("${app.uploads.dir}")
    private String uploadsDir;

    private static final Set<String> ALLOWED_TYPES = Set.of(
            "image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml", "video/mp4", "video/webm"
    );

    public Media store(String ownerUserId, MultipartFile file) {
        if (file == null || file.isEmpty()) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "No file provided");
        }
        String contentType = file.getContentType();
        if (contentType == null || !ALLOWED_TYPES.contains(contentType)) {
            throw new ApiException(HttpStatus.UNSUPPORTED_MEDIA_TYPE,
                    "Only image (jpg, png, webp, gif, svg) and video (mp4, webm) files are allowed");
        }

        try {
            Path dir = Path.of(uploadsDir);
            Files.createDirectories(dir);

            String original = file.getOriginalFilename() != null ? file.getOriginalFilename() : "file";
            String extension = original.contains(".") ? original.substring(original.lastIndexOf('.')) : "";
            String storedFilename = UUID.randomUUID() + extension;

            Path target = dir.resolve(storedFilename);
            Files.copy(file.getInputStream(), target, StandardCopyOption.REPLACE_EXISTING);

            Media media = Media.builder()
                    .ownerUserId(ownerUserId)
                    .originalFilename(original)
                    .storedFilename(storedFilename)
                    .contentType(contentType)
                    .sizeBytes(file.getSize())
                    .url("/uploads/" + storedFilename)
                    .build();

            return mediaRepository.save(media);
        } catch (IOException ex) {
            throw new ApiException(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to store the uploaded file");
        }
    }

    public List<Media> listForUser(String ownerUserId) {
        return mediaRepository.findByOwnerUserId(ownerUserId);
    }
}
