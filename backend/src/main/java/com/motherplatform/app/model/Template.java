package com.motherplatform.app.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

/**
 * A row here is what makes a template appear in the mother-site marketplace.
 * Adding a new template later is: drop the frontend folder in /templates,
 * then insert (or POST via the admin API) one Template document pointing at
 * it — nothing else in the platform needs to change.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "templates")
public class Template {

    @Id
    private String id;

    /** URL-safe identifier, e.g. "gym", "hospital", "restaurant". Matches the folder name under /templates. */
    @Indexed(unique = true)
    private String slug;

    private String name;
    private String category;       // e.g. "Fitness", "Healthcare", "Food & Beverage"
    private String description;
    private String thumbnailUrl;   // marketplace card image
    private String previewUrl;     // where the running dev/preview instance is served, e.g. http://localhost:5174

    /** Local dev port this template's own Vite/Node process runs on. Purely informational for the admin UI. */
    private Integer devPort;

    /** Whether this template ships a Node SSR server (like the TanStack Start restaurant template)
     *  rather than a plain static build. Informational — affects how it's deployed/run. */
    @Builder.Default
    private boolean serverRendered = false;

    /** Default color ramps shown in the customization UI before the user changes them. */
    private Map<String, String> defaultPrimaryColor;
    private Map<String, String> defaultSecondaryColor;
    private boolean secondaryColorCustomizable;

    /** Page/section names this template ships with, shown in the marketplace description. */
    private List<String> pages;

    @Builder.Default
    private boolean active = true;
}
