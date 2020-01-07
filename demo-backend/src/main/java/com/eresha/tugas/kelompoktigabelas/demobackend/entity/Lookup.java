package com.eresha.tugas.kelompoktigabelas.demobackend.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

import lombok.Data;

@Data
@Entity
@Table
public class Lookup implements Serializable {

	private static final long serialVersionUID = 6364737821377080694L;
	
	@Id
	@Column(name = "pk_lookup")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "fk_lookup_grp")
	private Long lookupGrpId;
	
	private String code;
	
	private String description;
	
	private boolean active;
	
	@Column(name = "last_updated")
	private Date lastUpdated = new Date(System.currentTimeMillis());

}
