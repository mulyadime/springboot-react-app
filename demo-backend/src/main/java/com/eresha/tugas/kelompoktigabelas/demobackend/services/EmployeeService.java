package com.eresha.tugas.kelompoktigabelas.demobackend.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eresha.tugas.kelompoktigabelas.demobackend.dto.EmployeeDTO;
import com.eresha.tugas.kelompoktigabelas.demobackend.entity.Employee;
import com.eresha.tugas.kelompoktigabelas.demobackend.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;

	public List<Employee> findAll() {
		List<Employee> resultAsList = new ArrayList<>();
		employeeRepository.findAll().iterator().forEachRemaining(resultAsList::add);
		return resultAsList;
	}
	
	public Employee findById(Long id) {
		Optional<Employee> optional = employeeRepository.findById(id);
		return optional.isPresent() ? optional.get() : null;
	}

	public Employee save(EmployeeDTO dto) {
		Employee result = new Employee();
		result.setName(dto.getName());
		result.setAddress(dto.getAddress());
		result.setStatus(dto.getStatus());
		employeeRepository.save(result);
		
		return result;
	}

	public Employee updateById(Long id, EmployeeDTO dto) {
		Employee data = findById(id);
		
		if (data != null) {
			data.setName(dto.getName());
			data.setAddress(dto.getAddress());
			data.setStatus(dto.getStatus());
			employeeRepository.save(data);
			return data;
		}
		
		return null;
	}

	public void deleteById(Long id) {
		employeeRepository.deleteById(id);
		
	}

}
