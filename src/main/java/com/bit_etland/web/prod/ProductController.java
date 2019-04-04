package com.bit_etland.web.prod;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cate.CateMapper;
import com.bit_etland.web.cate.Category;
import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.ISupplier;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Proxy;
import com.bit_etland.web.cust.Customer;
import com.bit_etland.web.supp.Supplier;
import com.bit_etland.web.supp.SupplierMapper;

@RestController
public class ProductController {
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	@Autowired PrintService ps;
	@Autowired Map<String,Object> map;
	@Autowired ProductMapper prodMap;
	@Autowired CateMapper cateMap;
	@Autowired SupplierMapper suppMap;
	@Autowired Supplier sup;
	@Autowired Category cate;
	@Autowired Proxy pxy;
	
	@GetMapping("/phones/{page}")
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
	
	@Transactional
	@PostMapping("/phones")
	public Map<?, ?> regist(@RequestBody Product param) {
		logger.info("===== prod regist진입 =====");
		List<String> ls = param.getFreebies();
		ps.accept("리스트 :: "+ls);
		ps.accept("리스트 :: "+param.toString());
		
		IFunction i = s-> cateMap.txCategory((String)s);
		IFunction i2 = s -> suppMap.txSupplier((String)s);
		String cateID= (String) i.apply(param.getCategoryId()); //name
		String suppID = (String) i2.apply(param.getSupplierId()); //name
		
		param.setCategoryId(cateID);
		param.setSupplierId(suppID);
		System.out.println("파람 : "+param);
		IConsumer i3 = o -> prodMap.insertProduct((Product) o);  
        i3.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}	
	
	@GetMapping("/phones/{page}/{val}")
	public Map<?, ?> search(@PathVariable String page, @PathVariable String val) {
		logger.info("===== search진입 =====");
		map.clear();
		map.put("page_num", page);
		map.put("page_size", "5");
		map.put("block_size", "5");
		ISupplier i = () -> prodMap.countSearchProduct(val);
		map.put("rowCount", i.get());
		map.put("val", val);
		pxy.carryOut(map);
		IFunction f = (Object o) -> prodMap.selectProductList(pxy);
		List<?> prodList = (List<?>) f.apply(pxy);

		map.clear();
		map.put("pxy", pxy);
		map.put("prodList", prodList);
		return map;
	}
	
}
