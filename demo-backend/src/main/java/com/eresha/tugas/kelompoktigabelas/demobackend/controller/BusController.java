package com.eresha.tugas.kelompoktigabelas.demobackend.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.eresha.tugas.kelompoktigabelas.demobackend.dto.BusDTO;
import com.eresha.tugas.kelompoktigabelas.demobackend.entity.Bus;
import com.eresha.tugas.kelompoktigabelas.demobackend.payload.ApiResponse;
import com.eresha.tugas.kelompoktigabelas.demobackend.services.BusService;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping("/api/bus")
@CrossOrigin(origins = "*", maxAge = 3600)
public class BusController {
	
	@Autowired
	private BusService svcBus;
	
	@RequestMapping("/")
	public ApiResponse<List<Bus>> findAll() {
		return new ApiResponse<>(HttpStatus.OK.value(), "", svcBus.findAll());
	}
	
	@RequestMapping("/{id}")
	public ApiResponse<Bus> findById(@PathVariable("id") Long id) {
		return new ApiResponse<>(HttpStatus.OK.value(), "", svcBus.findById(id));
	}
	
	@PostMapping("/create")
	public ApiResponse<Bus> create(@Valid @RequestBody BusDTO dto) {
		log.debug("Create new data Bus : [{}]", dto.toString());
		return new ApiResponse<>(HttpStatus.OK.value(), "", svcBus.save(dto));
	}
	
	@PutMapping("/{id}")
	public ApiResponse<Bus> updateById(@PathVariable("id") Long id, @Valid @RequestBody BusDTO dto) {
		return new ApiResponse<>(HttpStatus.OK.value(), "", svcBus.updateById(id, dto));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> removeById(@PathVariable("id") Long id) {
		try {
			svcBus.removeById(id);
		} catch (Exception e) {
			return new ResponseEntity<>("", HttpStatus.EXPECTATION_FAILED);
		}
		
		return new ResponseEntity<>("", HttpStatus.OK);
	}

}
