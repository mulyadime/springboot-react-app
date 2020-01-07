package com.eresha.tugas.kelompoktigabelas.demobackend.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eresha.tugas.kelompoktigabelas.demobackend.dto.BusDTO;
import com.eresha.tugas.kelompoktigabelas.demobackend.entity.Bus;
import com.eresha.tugas.kelompoktigabelas.demobackend.repository.BusRepository;

@Service
public class BusService {
	
	@Autowired
	private BusRepository busRepository;
	
	public List<Bus> findAll() {
		List<Bus> resultAsList = new ArrayList<>();
		busRepository.findAll().iterator().forEachRemaining(resultAsList::add);
		
		return resultAsList;
	}
	
	public Bus findById(Long id) {
		Optional<Bus> result = busRepository.findById(id);
		
		return result.isPresent() ? result.get() : null;
	}
	
	public void removeById(Long id) {
		busRepository.deleteById(id);
	}
	
	public Bus save(BusDTO dto) {
		Bus data = new Bus();
//		data.setFasilitasId(dto.getFasilitasId());
		data.setPlatNo(dto.getPlatNo());
		data.setKelas(dto.getKelas());
		data.setStatus(dto.isStatus());
		busRepository.save(data);
		
		return data;
	}
	
	public Bus updateById(Long id, BusDTO dto) {
		Bus data = findById(id);
		if (data != null) {
//			data.setFasilitasId(dto.getFasilitasId());
			data.setPlatNo(dto.getPlatNo());
			data.setKelas(dto.getKelas());
			data.setStatus(dto.isStatus());
			busRepository.save(data);
			
			return data;
		}
		
		return null;
	}

}
