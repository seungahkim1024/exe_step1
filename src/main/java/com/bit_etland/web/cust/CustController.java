package com.bit_etland.web.cust;

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

import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Users;

@RestController
public class CustController {
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);

	@Autowired Customer cust;
	@Autowired PrintService ps;
	@Autowired CustomerMapper custMap;
	@Autowired Map<String, Object> map;
	@Autowired Users<?> user;
	
	@PostMapping("/customers/{userid}")
	public Map<String, Object> login(@RequestBody Customer param, @PathVariable String userid) { 
		//Map<String, Object> 앞에 @Response Body 디폴트(@RestController 때문에)
		logger.info("===== login진입 =====");
		IFunction i = (Object o) -> custMap.selectCustomer(param);
		i.apply(param);
		map.clear();
		map.put("mgs", "성공");
		return map;
	}	
	
	@PostMapping("/customers")
	public Map<?, ?> join(@RequestBody Customer param) {
		logger.info("===== join진입 =====");
		IConsumer c = new IConsumer() {
			
			@Override
			public void accept(Object o) {
				custMap.insertCustomer(param);
			}
		};
		c.accept(param);
		map.clear();
		map.put("msg", "성공");
		return map;
	}
	
	@PutMapping("/customers/{userid}")
	public Map<?, ?> update(@PathVariable String userid, @RequestBody Customer param) {
		logger.info("===== update진입 =====");
		IConsumer i = (Object o) -> custMap.updateCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "성공");
		return map;
	}	
	
	@DeleteMapping("/customers/{userid}")
	public Map<?, ?> delete(@RequestBody Customer param, @PathVariable String userid) {
		logger.info("===== delete진입 =====");
		System.out.println("아이디: "+param);
		IConsumer i = (Object o) -> custMap.deleteCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "성공");
		return map;
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/customers/list")
	public List<Users<?>> list(@PathVariable String user, @RequestBody Map<?,?> param){
		logger.info("===== list 진입 =====");
		IFunction i = (Object o) -> custMap.selectCustomers(param);
		//List<Users<?>> ls = (List<Users<?>>) i.apply(param);
		return (List<Users<?>>) i.apply(param);
	}
	
}
