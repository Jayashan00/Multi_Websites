package com.motherplatform.app.controller;

import com.motherplatform.app.model.Media;
import com.motherplatform.app.security.CurrentUserProvider;
import com.motherplatform.app.service.MediaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/media")
@RequiredArgsConstructor
public class MediaController {

    private final MediaService mediaService;
    private final CurrentUserProvider currentUserProvider;

    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<Media> upload(@RequestParam("file") MultipartFile file) {
        String userId = currentUserProvider.getCurrentUser().getId();
        return ResponseEntity.ok(mediaService.store(userId, file));
    }

    @GetMapping("/mine")
    public List<Media> mine() {
        return mediaService.listForUser(currentUserProvider.getCurrentUser().getId());
    }
}
