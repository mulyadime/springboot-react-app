package com.eresha.tugas.kelompoktigabelas.demobackend.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eresha.tugas.kelompoktigabelas.demobackend.dto.LookupDTO;
import com.eresha.tugas.kelompoktigabelas.demobackend.dto.LookupGroupDTO;
import com.eresha.tugas.kelompoktigabelas.demobackend.entity.Lookup;
import com.eresha.tugas.kelompoktigabelas.demobackend.entity.LookupGroup;
import com.eresha.tugas.kelompoktigabelas.demobackend.repository.LookupGroupRepository;
import com.eresha.tugas.kelompoktigabelas.demobackend.repository.LookupRepository;
import com.eresha.tugas.kelompoktigabelas.demobackend.util.DateUtil;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class LookupService {
	
	@Autowired
	private LookupGroupRepository lookupGroupRepository;
	
	@Autowired
	private LookupRepository lookupRepository;
	
	
	public List<LookupGroupDTO> findAllLookupGrp() {
		List<LookupGroupDTO> resultAsList = new ArrayList<>();
		for (LookupGroup item : lookupGroupRepository.findAll()) {
			LookupGroupDTO data = new LookupGroupDTO();
			data.setId(item.getId());
			data.setDescription(item.getDescription());
			data.setCreatedAt(DateUtil.formatDateTime(item.getCreatedAt()));
			
			resultAsList.add(data);
		}
		
		return resultAsList;
	}

	public LookupGroup findLookupGrpById(Long id) {
		Optional<LookupGroup> result = lookupGroupRepository.findById(id);
		return result.isPresent() ? result.get() : null;
	}

	public LookupGroup updateLookupGrpById(Long id, LookupGroupDTO dto) {
		LookupGroup data = findLookupGrpById(id);
		if (data != null) {
			data.setDescription(dto.getDescription());
			lookupGroupRepository.save(data);
		}
		return data;
	}

	public LookupGroup saveLookupGrp(LookupGroupDTO dto) {
		LookupGroup data = new LookupGroup();
		data.setDescription(dto.getDescription());
		lookupGroupRepository.save(data);
		
		return data;
	}

	public void deleteLookupGrpById(Long id) {
		lookupGroupRepository.deleteById(id);
		
	}
	
	public List<LookupDTO> findAllLookup() {
		List<LookupDTO> resultAsList = new ArrayList<>();
		for (Lookup item : lookupRepository.findAll()) {
			LookupDTO data = new LookupDTO();
			data.setId(item.getId());
			data.setCode(item.getCode());
			data.setDescription(item.getDescription());
			data.setActive(item.isActive());
			data.setLookupGrpId(item.getLookupGrpId());
			data.setLastUpdated(DateUtil.formatDateTime(item.getLastUpdated()));
			
			resultAsList.add(data);
		}
		
		return resultAsList;
	}
	
	public LookupDTO findLookupById(Long id) {
		Optional<Lookup> result = lookupRepository.findById(id);
		if (result.isPresent()) {
			LookupDTO data = new LookupDTO();
			data.setId(result.get().getId());
			data.setCode(result.get().getCode());
			data.setDescription(result.get().getDescription());
			data.setActive(result.get().isActive());
			data.setLookupGrpId(result.get().getLookupGrpId());
			data.setLastUpdated(DateUtil.formatDateTime(result.get().getLastUpdated()));
			
			return data;
			
		}
		
		return null;
	}
	
	public void deleteLookupById(Long id) {
		lookupRepository.deleteById(id);
	}
	
	public Lookup saveLookup(LookupDTO dto) {
		Lookup data = new Lookup();
		data.setCode(dto.getCode());
		data.setDescription(dto.getDescription());
		data.setLookupGrpId(dto.getLookupGrpId());
		lookupRepository.save(data);
		
		log.debug("{}", data.toString());
		
		return data;
	}
	
	public Lookup updateLookupById(Long id, LookupDTO dto) {
		LookupDTO data = findLookupById(id);
		if (data != null) {
			Lookup item = new Lookup();
			item.setId(data.getId());
			item.setCode(dto.getCode());
			item.setDescription(dto.getDescription());
			item.setActive(dto.isActive());
			item.setLookupGrpId(dto.getLookupGrpId());
			lookupRepository.save(item);
			
			return item;
		}
		
		return null;
	}

	public List<LookupDTO> findLookupByCriteria(Long id) {
		List<LookupDTO> resultAsList = new ArrayList<>();
		for (Lookup item : lookupRepository.findLookupByFkLookupGrp(id)) {
			LookupDTO data = new LookupDTO();
			data.setId(item.getId());
			data.setCode(item.getCode());
			data.setDescription(item.getDescription());
			data.setActive(item.isActive());
			data.setLookupGrpId(item.getLookupGrpId());
			data.setLastUpdated(DateUtil.formatDateTime(item.getLastUpdated()));
			
			resultAsList.add(data);
		}
		
		return resultAsList;
	}

}
