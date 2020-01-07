package com.eresha.tugas.kelompoktigabelas.demobackend.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.eresha.tugas.kelompoktigabelas.demobackend.dto.EmployeeDTO;
import com.eresha.tugas.kelompoktigabelas.demobackend.entity.Employee;
import com.eresha.tugas.kelompoktigabelas.demobackend.payload.ApiResponse;
import com.eresha.tugas.kelompoktigabelas.demobackend.services.EmployeeService;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin(origins = "*", maxAge = 3600)
public class EmployeeController {
	
	@Autowired
	private EmployeeService svcEmployee;
	
	@RequestMapping("/")
	public ApiResponse<List<Employee>> findAll() {
		return new ApiResponse<>(HttpStatus.OK.value(), "", svcEmployee.findAll());
	}
	
	@PostMapping("/create")
	public ApiResponse<Employee> create(@Valid @RequestBody EmployeeDTO dto) { 
		return new ApiResponse<>(HttpStatus.OK.value(), "", svcEmployee.save(dto));
	}
	
	@PutMapping("/{id}")
	public ApiResponse<Employee> updateById(@PathVariable("id") Long id, @Valid @RequestBody EmployeeDTO dto) {
		return new ApiResponse<>(HttpStatus.OK.value(), "", svcEmployee.updateById(id, dto));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable("id") Long id) {
		try {
			svcEmployee.deleteById(id);
		} catch (Exception e) {
			return new ResponseEntity<>("", HttpStatus.EXPECTATION_FAILED);
		}
		return new ResponseEntity<>("", HttpStatus.OK);
	}
	
	@RequestMapping("/{id}")
	public ApiResponse<Employee> findById(@PathVariable("id") Long id) {
		return new ApiResponse<>(HttpStatus.OK.value(), "", svcEmployee.findById(id));
	}
}
