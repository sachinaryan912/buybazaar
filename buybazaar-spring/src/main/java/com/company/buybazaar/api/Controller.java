package com.company.buybazaar.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Controller {
	
	@GetMapping(value="/{name}")
	public String sayHello(@PathVariable String name) {
		return "Hello "+name;
	}

}
