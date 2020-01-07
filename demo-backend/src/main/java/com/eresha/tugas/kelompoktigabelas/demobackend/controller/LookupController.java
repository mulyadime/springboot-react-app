package com.eresha.tugas.kelompoktigabelas.demobackend.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.eresha.tugas.kelompoktigabelas.demobackend.dto.LookupDTO;
import com.eresha.tugas.kelompoktigabelas.demobackend.dto.LookupGroupDTO;
import com.eresha.tugas.kelompoktigabelas.demobackend.entity.Lookup;
import com.eresha.tugas.kelompoktigabelas.demobackend.entity.LookupGroup;
import com.eresha.tugas.kelompoktigabelas.demobackend.payload.ApiResponse;
import com.eresha.tugas.kelompoktigabelas.demobackend.services.LookupService;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping("/api/search")
@CrossOrigin(origins = "*", maxAge = 3600)
public class LookupController {
	
	@Autowired
	private LookupService svcLookup;
	
	@GetMapping("/")
	public ApiResponse<List<LookupGroupDTO>> findAllLookupGrp() {
		return new ApiResponse<>(HttpStatus.OK.value(), "Lookup Group loaded successfully.", svcLookup.findAllLookupGrp());
		
	}
	
	@GetMapping("/{id}")
	public ApiResponse<LookupGroup> findLookupGrpById(@PathVariable("id") Long id) {
		return new ApiResponse<>(HttpStatus.OK.value(), "", svcLookup.findLookupGrpById(id));
	}
	
	@PostMapping("/create")
	public ApiResponse<LookupGroup> createLookupGrp(@Valid @RequestBody LookupGroupDTO dto) {
		log.debug("Create new data Lookup Group : [{}]", dto.toString());
		return new ApiResponse<>(HttpStatus.OK.value(), "", svcLookup.saveLookupGrp(dto));
	}
	
	@PutMapping("/{id}")
	public ApiResponse<LookupGroup> updateLookupGroup(@PathVariable("id") Long id, @Valid @RequestBody LookupGroupDTO dto) {
		log.debug("Update data Lookup Group : [{}]", dto.toString());
		return new ApiResponse<>(HttpStatus.OK.value(), "", svcLookup.updateLookupGrpById(id, dto));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteLookupGroup(@PathVariable("id") Long id) {
		try {
			svcLookup.deleteLookupGrpById(id);
		} catch (Exception e) {
			return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
		}
		
		return new ResponseEntity<>("Lookup Group has been deleted!", HttpStatus.OK);
	}
	
	@GetMapping("/detail/{id}")
	public ApiResponse<List<Lookup>> findLookupByCriteria(@PathVariable("id") Long id) {
		return new ApiResponse<>(HttpStatus.OK.value(), "", svcLookup.findLookupByCriteria(id));
	}
	
	@GetMapping("/detail/{lookupGrpId}/{lookupId}")
	public ApiResponse<Lookup> findLookupById(@PathVariable("lookupGrpId") Long lookupGrpId, @PathVariable("lookupId") Long lookupId) {
		return new ApiResponse<>(HttpStatus.OK.value(), "", svcLookup.findLookupById(lookupId));
	}
	
	@PostMapping("/detail/create")
	public ApiResponse<List<Lookup>> createNewLookup(@Valid @RequestBody LookupDTO dto) {
		return new ApiResponse<>(HttpStatus.OK.value(), "", svcLookup.saveLookup(dto));
	}
	
	@PutMapping("/detail/{lookupGrpId}/{lookupId}")
	public ApiResponse<Lookup> updateLookupGroup(@PathVariable("lookupGrpId") Long lookupGrpId, @PathVariable("lookupId") Long lookupId, @Valid @RequestBody LookupDTO dto) {
		log.debug("Update data Lookup : [{}]", dto.toString());
		return new ApiResponse<>(HttpStatus.OK.value(), "", svcLookup.updateLookupById(lookupId, dto));
	}
	
	@DeleteMapping("/detail/{id}")
	public ResponseEntity<String> removeLookupById(@PathVariable("id") Long id) {
		try {
			svcLookup.deleteLookupById(id);
		} catch (Exception e) {
			return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
		}
		
		return new ResponseEntity<>("Lookup has been deleted!", HttpStatus.OK);
	}

}
