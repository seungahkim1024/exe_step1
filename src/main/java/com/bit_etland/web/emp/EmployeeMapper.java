package com.bit_etland.web.emp;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeMapper {
	public void insertEmployee(Employee emp);
	public List<Employee> selectEmployeesList();
	public List<Employee> selectEmployees(Map<?,?> m);
	public Employee selectEmployee(Employee emp);
	public int countEmployees();
	public boolean existsEmployee(Employee emp);
	public void updateEmployee(Employee emp);
	public void deleteEmployee(Employee emp);
}
