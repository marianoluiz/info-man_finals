package com.infoman.pdsapp.backend.personalinfo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/personalinfo")
public class PersonalInfoController {

    private final PersonalInfoRepository personalInfoRepository;

    public PersonalInfoController(PersonalInfoRepository personalInfoRepository) {
        this.personalInfoRepository = personalInfoRepository;
    }

    @GetMapping("")
    List<PersonalInfo> findAll() {
        return personalInfoRepository.findAll();
    }

}
