package com.infoman.pdsapp.backend.personalinfo;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonalInfoService {

    private PersonalInfoRepository personRepository;

    public PersonalInfoService(PersonalInfoRepository personRepository) {
        this.personRepository = personRepository;
    }

    public List<PersonalInfo> getAllPersonDetails() {
        List<PersonalInfo> persons = personRepository.findAllWithRelations();
        return persons.stream().distinct().collect(Collectors.toList());
    }
}
