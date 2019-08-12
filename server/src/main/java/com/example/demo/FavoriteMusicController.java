package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
class FavoriteMusicController {
    private MusicRepository repository;

    public FavoriteMusicController(MusicRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/favorite-music")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<Music> favoriteMusic() {
        return repository.findAll().stream()
            .filter(this::isFavorite)
            .collect(Collectors.toList());
    }

    private boolean isFavorite(Music music) {
        return !music.getName().equals("My Chemical Romance") &&
            !music.getName().equals("Beatles");
    }
}