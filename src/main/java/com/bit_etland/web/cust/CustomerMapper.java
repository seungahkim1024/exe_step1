package com.bit_etland.web.cust;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface CustomerMapper {
	public void insertCustomer(Customer cus);
	public List<Customer> selectCustomerList(Map<?,?> m);
	public List<Customer> selectCustomers(Map<?,?> m);
	public Customer selectCustomer(Customer cus);
	public int countCustomer(Map<?,?> m);	
	public void updateCustomer(Customer cus);
	public Map<String, Object> selectProfile(Map<?,?> m);
	public void deleteCustomer(Customer cust);
	public Map<String,Object> selectPhone(Map<?,?> m);
}
