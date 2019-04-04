package com.bit_etland.web.cate;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;

@Repository
public interface CateMapper {
	public String txCategory(String s);
	public void insertCategory(Category cate);
	public List<Category> selectCategoriesList(Proxy pxy);
	public List<Category> selectCategories(Map<?,?> m);
	public Category selectCategory(Category cate);
	public int countCategory(Map<?,?> m);
	public boolean existCategory(Category cate);
	public void updateCategory(Category cate);
	public void deleteCategory(Category cate);
}
