package com.motherplatform.app.config;

import com.motherplatform.app.model.Template;
import com.motherplatform.app.model.User;
import com.motherplatform.app.repository.TemplateRepository;
import com.motherplatform.app.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final TemplateRepository templateRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${app.admin.seed-email}")
    private String adminEmail;

    @Value("${app.admin.seed-password}")
    private String adminPassword;

    @Override
    public void run(String... args) {
        seedAdmin();
        seedTemplates();
    }

    private void seedAdmin() {
        if (userRepository.count() > 0) return;

        User admin = User.builder()
                .name("Platform Admin")
                .email(adminEmail.toLowerCase())
                .passwordHash(passwordEncoder.encode(adminPassword))
                .role(User.Role.ADMIN)
                .enabled(true)
                .build();

        userRepository.save(admin);
        log.info("Seeded initial admin account: {} (change the password after first login!)", adminEmail);
    }

    private void seedTemplates() {
        if (templateRepository.count() > 0) return;

        Map<String, String> gymPrimary = Map.ofEntries(
                Map.entry("50", "#fff7ed"), Map.entry("100", "#ffedd5"), Map.entry("200", "#fed7aa"),
                Map.entry("300", "#fdba74"), Map.entry("400", "#fb923c"), Map.entry("500", "#f97316"),
                Map.entry("600", "#ea580c"), Map.entry("700", "#c2410c"), Map.entry("800", "#9a3412"),
                Map.entry("900", "#7c2d12"), Map.entry("950", "#431407")
        );
        Map<String, String> clinicPrimary = Map.ofEntries(
                Map.entry("50", "#EAF4FD"), Map.entry("100", "#D0E7FA"), Map.entry("200", "#A2CFF5"),
                Map.entry("300", "#6FB2EC"), Map.entry("400", "#3C92DE"), Map.entry("500", "#0B6FB8"),
                Map.entry("600", "#095B98"), Map.entry("700", "#074877"), Map.entry("800", "#053757"),
                Map.entry("900", "#04283F")
        );
        Map<String, String> mintSecondary = Map.ofEntries(
                Map.entry("50", "#E7FBF7"), Map.entry("100", "#C6F5ED"), Map.entry("200", "#8FEADD"),
                Map.entry("300", "#4FD9C7"), Map.entry("400", "#20C4AF"), Map.entry("500", "#12B7A4"),
                Map.entry("600", "#0D9284"), Map.entry("700", "#0A7167"), Map.entry("800", "#08554E"),
                Map.entry("900", "#063E39")
        );
        Map<String, String> amberPrimary = Map.ofEntries(
                Map.entry("50", "#fffbeb"), Map.entry("100", "#fef3c7"), Map.entry("200", "#fee685"),
                Map.entry("300", "#ffd236"), Map.entry("400", "#fcbb00"), Map.entry("500", "#f99c00"),
                Map.entry("600", "#e17100"), Map.entry("700", "#bb4d00"), Map.entry("800", "#973c00"),
                Map.entry("900", "#7b3306")
        );

        List<Template> templates = List.of(
                Template.builder()
                        .slug("gym")
                        .name("Modern Gym & Fitness")
                        .category("Fitness")
                        .description("A high-energy fitness website with membership plans, class schedules, trainer profiles, and a transformation gallery.")
                        .thumbnailUrl("https://images.pexels.com/photos/17956264/pexels-photo-17956264.jpeg?auto=compress&cs=tinysrgb&w=800")
                        .previewUrl("http://localhost:5174")
                        .devPort(5174)
                        .serverRendered(false)
                        .defaultPrimaryColor(gymPrimary)
                        .secondaryColorCustomizable(false)
                        .pages(List.of("Home", "About", "Membership", "Programs", "Trainers", "Facilities", "Gallery",
                                "Schedule", "Register", "Personal Training", "Nutrition", "Blog", "Testimonials", "Contact"))
                        .active(true)
                        .build(),
                Template.builder()
                        .slug("hospital")
                        .name("Hospital & Clinic")
                        .category("Healthcare")
                        .description("A trust-building healthcare website with departments, doctor profiles, appointment booking, health packages, and patient resources.")
                        .thumbnailUrl("/thumbnails/hospital.jpg")
                        .previewUrl("http://localhost:5175")
                        .devPort(5175)
                        .serverRendered(false)
                        .defaultPrimaryColor(clinicPrimary)
                        .defaultSecondaryColor(mintSecondary)
                        .secondaryColorCustomizable(true)
                        .pages(List.of("Home", "About", "Departments", "Doctors", "Services", "Health Packages",
                                "Gallery", "Appointment", "News", "Testimonials", "FAQ", "Contact"))
                        .active(true)
                        .build(),
                Template.builder()
                        .slug("restaurant")
                        .name("Restaurant & Fine Dining")
                        .category("Food & Beverage")
                        .description("An elegant restaurant website with menu, online ordering, table reservations, catering, gallery, and a food journal/blog.")
                        .thumbnailUrl("/thumbnails/restaurant.jpg")
                        .previewUrl("http://localhost:5176")
                        .devPort(5176)
                        .serverRendered(true)
                        .defaultPrimaryColor(amberPrimary)
                        .secondaryColorCustomizable(false)
                        .pages(List.of("Home", "About", "Menu", "Order Online", "Reservation", "Catering", "Gallery",
                                "Offers", "Team", "Journal/Blog", "Contact"))
                        .active(true)
                        .build()
        );

        templateRepository.saveAll(templates);
        log.info("Seeded {} starter templates: gym, hospital, restaurant", templates.size());
    }
}