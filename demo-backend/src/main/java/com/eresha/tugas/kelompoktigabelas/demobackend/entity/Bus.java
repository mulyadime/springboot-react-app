package com.eresha.tugas.kelompoktigabelas.demobackend.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table
public class Bus implements Serializable {

	private static final long serialVersionUID = -4003240353753565512L;
	
	@Id
	@Column(name = "pk_bus")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "fk_fasilitas")
	private Long fasilitasId;
	
	@Column(name = "plat_number")
	private String platNo;
	
	private int kelas;
	
	private int kursi;
	
	private boolean status;

}
