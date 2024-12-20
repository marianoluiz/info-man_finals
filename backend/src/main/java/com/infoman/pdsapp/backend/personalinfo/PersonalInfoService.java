package com.infoman.pdsapp.backend.personalinfo;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class PersonalInfoService {

    private PersonalInfoRepository personRepository;

    public PersonalInfoService(PersonalInfoRepository personRepository) {
        this.personRepository = personRepository;
    }

    public List<PersonalInfo> getAllPersonDetails() {
        return personRepository.findAllWithRelations();
    }
}
