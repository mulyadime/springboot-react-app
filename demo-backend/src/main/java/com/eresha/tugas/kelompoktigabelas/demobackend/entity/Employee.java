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
@Table(name = "karyawan")
public class Employee implements Serializable {

	private static final long serialVersionUID = -5285960035049339628L;
	
	@Id
	@Column(name = "pk_karyawan")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private String address;
	
	private int status;
	
	@Column(name = "fk_user")
	private Long userId;

}
