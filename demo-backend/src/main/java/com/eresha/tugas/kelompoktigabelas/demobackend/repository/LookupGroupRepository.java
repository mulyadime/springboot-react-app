package com.eresha.tugas.kelompoktigabelas.demobackend.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import com.eresha.tugas.kelompoktigabelas.demobackend.entity.LookupGroup;

@Repository
public interface LookupGroupRepository extends JpaRepository<LookupGroup, Long> {

}
