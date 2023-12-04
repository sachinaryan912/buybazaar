package com.company.buybazaar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class BuybazaarApplication {

	public static void main(String[] args) {
		SpringApplication.run(BuybazaarApplication.class, args);
	}

}
