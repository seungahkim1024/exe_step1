package com.bit_etland.web.cust;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("/cust")
@RestController
public class CustController {
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);

	@Autowired Customer cust;
	@Autowired Map<String, Object> map;
	
	@PostMapping("/login")
	public @ResponseBody Customer login(@RequestBody Customer param) {
		logger.info("===== login진입 =====");
		System.out.println(param.toString());
		
		return null;
	}
	
	
}
