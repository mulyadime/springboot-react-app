package com.eresha.tugas.kelompoktigabelas.demobackend.dto;

import lombok.Data;


@Data
public class LookupDTO {
	
	private Long id;
	
	private Long lookupGrpId;
	
	private String code;
	
	private String description;

	private boolean active;
	
	private String lastUpdated;
	

}
