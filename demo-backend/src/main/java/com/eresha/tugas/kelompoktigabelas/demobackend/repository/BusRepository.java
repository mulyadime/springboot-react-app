package com.eresha.tugas.kelompoktigabelas.demobackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.eresha.tugas.kelompoktigabelas.demobackend.entity.Bus;

@Repository
public interface BusRepository extends CrudRepository<Bus, Long> {

}
