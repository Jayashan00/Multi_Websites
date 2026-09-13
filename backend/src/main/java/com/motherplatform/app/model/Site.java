package com.motherplatform.app.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

/**
 * One customized website belonging to one user, built from one Template.
 * The fields here are exactly what GET /api/public/sites/{id} returns, and
 * exactly what every template's site-config loader expects to merge in.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "sites")
public class Site {

    @Id
    private String id;

    @Indexed
    private String ownerUserId;

    /** Which template this site is built from — must match a Template.slug. */
    private String templateSlug;

    private String businessName;

    @Builder.Default
    private String businessNameAccent = "";

    private String monogram;   // used by templates that show a two-letter badge instead of a logo (e.g. restaurant)
    private String tagline;
    private String subtitle;

    private String logoUrl;
    private String heroImageUrl;
    private String heroVideoUrl;

    /** Color ramp keyed by Tailwind shade: "50".."950" -> hex string. */
    private Map<String, String> primaryColor;
    private Map<String, String> secondaryColor;

    @Builder.Default
    private Contact contact = new Contact();

    @Builder.Default
    private Social social = new Social();

    @Builder.Default
    private WhatsApp whatsapp = new WhatsApp();

    @Builder.Default
    private Seo seo = new Seo();

    /** Extra pages the user has added beyond the template's default set (see Page-builder scope note in README). */
    @Builder.Default
    private Map<String, Object> customPages = new HashMap<>();

    @Builder.Default
    private boolean published = false;

    @CreatedDate
    private Instant createdAt;

    @LastModifiedDate
    private Instant updatedAt;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Contact {
        private String address;
        private String phone;
        private String email;
        private String hours;
        private String mapEmbedUrl;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Social {
        private String facebook;
        private String instagram;
        private String twitter;
        private String youtube;
        private String linkedin;
        private String tiktok;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class WhatsApp {
        private String number;          // digits only, with country code
        private String defaultMessage;
        private boolean enabled;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Seo {
        private String title;
        private String description;
    }
}
