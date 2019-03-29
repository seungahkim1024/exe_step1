package com.bit_etland.web.prod;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cust.Customer;

@RestController
public class ProductController {
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

	@PostMapping("/phones/{userid}")
	public Map<String, Object> login(@RequestBody Customer param) { 
		logger.info("===== login진입 =====");
	
		return null;
	}	
	
	@PostMapping("/phones")
	public Map<?, ?> join(@RequestBody Customer param) {
		logger.info("===== join진입 =====");
	
		return null;
	}
	
	@PutMapping("/phones/{userid}")
	public Map<?, ?> update(@PathVariable String userid, @RequestBody Customer param) {
		logger.info("===== update진입 =====");
		
		return null;
	}	
	
	@DeleteMapping("/phones/{userid}")
	public Map<?, ?> delete(@RequestBody Customer param) {
		logger.info("===== delete진입 =====");
	
		return null;
	}
	
}
