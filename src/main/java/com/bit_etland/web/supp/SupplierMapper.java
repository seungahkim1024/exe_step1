package com.bit_etland.web.supp;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;

@Repository
public interface SupplierMapper {
	public String txSupplier(String supplierID);
	public void insertSupplier(Supplier supp);
	public List<Supplier> selectSuppliersList(Proxy pxy);
	public List<Supplier> selectSuppliers(Map<?,?> m);
	public Supplier selectSupplier(Supplier supp);
	public int countSupplier(Map<?,?> m);
	public boolean existSupplier(Supplier supp);
	public void updateSupplier(Supplier supp);
	public void deleteSupplier(Supplier supp);
}
