package com.bit_etland.web.prod;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;


@Repository
public interface ProductMapper {
	public void insertProduct(Product prod);
	public List<Product> selectProductList(Proxy pxy);
	public List<Product> selectProducts(Map<?,?> m);
	public Product selectProduct(Product prod);
	public int countProduct(Map<?,?> m);
	public int countAllProduct();
	public boolean existProduct(Product prod);
	public void updateProduct(Product prod);
	public void deleteProduct(Product prod);
}
