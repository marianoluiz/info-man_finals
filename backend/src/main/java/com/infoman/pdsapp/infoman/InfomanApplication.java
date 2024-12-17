package com.infoman.pdsapp.infoman;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class InfomanApplication {

	private static final Logger log = LoggerFactory.getLogger(InfomanApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(InfomanApplication.class, args);
	}

}
