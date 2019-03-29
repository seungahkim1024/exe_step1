package com.bit_etland.web.prod;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;


@Repository
public interface ProductMapper {
	public void insertProduct(Product prod);
	public List<Product> selectProductList(Map<?,?> m);
	public List<Product> selectProducts(Map<?,?> m);
	public Product selectProduct(Product prod);
	public int countProduct(Map<?,?> m);
	public boolean existProduct(Product prod);
	public void updateProduct(Product prod);
	public void deleteProduct(Product prod);
}
