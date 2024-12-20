package com.infoman.pdsapp.backend.personalinfo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/personalinfo")
public class PersonalInfoController {

    private PersonalInfoService personService;

    public PersonalInfoController(PersonalInfoService ps) {
        this.personService = ps;
    }

    @GetMapping("")
    public ResponseEntity<List<PersonalInfo>> getAllPersonDetails() {
        return ResponseEntity.ok(personService.getAllPersonDetails());
    }

}
