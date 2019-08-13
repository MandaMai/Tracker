package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import java.util.stream.Stream;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	ApplicationRunner init(MusicRepository repository) {
		return args -> {
			Stream.of("Beatles", "Elton John", "My Chemical Romance", "N*Sync", "Motley Crue", "Elvis").forEach(name ->{
				Music music = new Music();
				music.setName(name);
				repository.save(music);
			});
			repository.findAll().forEach(System.out::println);
		};
	}

}
