package com.bit_etland.web.emp;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Users;

@RestController
@RequestMapping("/emp")
public class EmployeeController {
	private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

		@Autowired Employee emp;
		@Autowired PrintService ps;
		@Autowired EmployeeMapper empMap;
		@Autowired Map<String, Object> map;
		@Autowired Users<?> user;
		
		@PostMapping("/access/{userid}")
		public Employee access(@PathVariable String userid, @RequestBody Employee param) { 
			//Employee 앞에 @Response Body 디폴트(@RestController 때문에)
			logger.info("===== access진입 =====");
			IFunction i = (Object o) -> empMap.selectEmployee(param);
			return (Employee)i.apply(param);
		}	
		
		@PostMapping("/register")
		public Map<?, ?> register(@RequestBody Employee param) {
			logger.info("===== register진입 =====");
			IConsumer c = new IConsumer() {
				
				@Override
				public void accept(Object o) {
					empMap.insertEmployee(param);
				}
			};
			c.accept(param);
			map.clear();
			map.put("msg", "성공");
			return map;
			
		}
		
		@PutMapping("/update/{userid}")
		public Map<?, ?> update(@PathVariable String userid, @RequestBody Employee param) {
			logger.info("===== delete진입 =====");
			IConsumer i = (Object o) -> empMap.updateEmployee(param);
			i.accept(param);
			map.clear();
			map.put("d", "성공");
			return map;
		}	
		
		@DeleteMapping("/delete/{userid}")
		public Map<?, ?> delete(@PathVariable String userid,@RequestBody Employee param) {
			logger.info("===== delete진입 =====");
			IConsumer i = (Object o) -> empMap.deleteEmployee(param);
			i.accept(param);
			map.clear();
			map.put("d", "성공");
			return map;
		}
		
		@SuppressWarnings("unchecked")
		@GetMapping("/{user}/list")
		public List<Users<?>> list(@PathVariable String user, @RequestBody Map<?,?> param){
			logger.info("===== list 진입 =====");
			IFunction i = (Object o) -> empMap.selectEmployees(param);
			//List<Users<?>> ls = (List<Users<?>>) i.apply(param);
			return (List<Users<?>>) i.apply(param);
		}
	
}
