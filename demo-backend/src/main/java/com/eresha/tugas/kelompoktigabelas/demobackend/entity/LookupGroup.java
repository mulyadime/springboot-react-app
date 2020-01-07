package com.eresha.tugas.kelompoktigabelas.demobackend.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "lookup_grp")
public class LookupGroup implements Serializable {
	 
	private static final long serialVersionUID = 8657199328282600484L;
	
	@Id
	@Column(name = "pk_lookup_grp")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String description;
	
	@Column(name = "created_at")
	private Date createdAt = new Date(System.currentTimeMillis());

}
