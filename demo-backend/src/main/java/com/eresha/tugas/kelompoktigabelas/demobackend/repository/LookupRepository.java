package com.eresha.tugas.kelompoktigabelas.demobackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.eresha.tugas.kelompoktigabelas.demobackend.entity.Lookup;

@Repository
public interface LookupRepository extends JpaRepository<Lookup, Long> {
	
	@Query("from Lookup l where l.lookupGrpId = :fkLookupGrpId")
	public List<Lookup> findLookupByFkLookupGrp(Long fkLookupGrpId);

}
