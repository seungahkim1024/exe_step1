package com.bit_etland.web.prod;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.ISupplier;
import com.bit_etland.web.cmm.Proxy;
import com.bit_etland.web.cust.Customer;

@RestController
public class ProductController {
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	@Autowired Map<String,Object> map;
	@Autowired ProductMapper prodMap;
	@Autowired Proxy pxy;
	
	@PostMapping("/phones/{userid}")
	public Map<String, Object> login(@RequestBody Customer param) { 
		logger.info("===== login진입 =====");
	
		return null;
	}	
	
	@GetMapping("/prod/page/{page}")
	public Map<?, ?> list(@PathVariable String page) {
		logger.info("===== Prod list진입 =====");
		map.clear();
		map.put("page_num", page);
		map.put("page_size", "5");
		map.put("block_size", "5");
		ISupplier i = () -> prodMap.countAllProduct();
		map.put("rowCount", i.get());
		pxy.carryOut(map);
		
		IFunction f = (Object o) -> prodMap.selectProductList(pxy);
		List<?> prodList = (List<?>) f.apply(pxy);

		map.clear();
		map.put("pxy", pxy);
		map.put("prodList", prodList);
		return map;
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
