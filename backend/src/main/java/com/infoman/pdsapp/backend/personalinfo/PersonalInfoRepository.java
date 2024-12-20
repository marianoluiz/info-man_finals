package com.infoman.pdsapp.backend.personalinfo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalInfoRepository extends JpaRepository<PersonalInfo, Integer> {
    @Query("SELECT DISTINCT p FROM PersonalInfo p " +
            "LEFT JOIN FETCH p.familyBackground fb " +
            "LEFT JOIN FETCH p.contactInfo ci " +
            "LEFT JOIN FETCH p.children c")
    List<PersonalInfo> findAllWithRelations();
}
