package com.infoman.pdsapp.backend.personalinfo;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "family_background")
public class FamilyBackground {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer famBgId;

    private String fatherFname;
    private String fatherLname;
    private String fatherMname;
    private String motherMnFname;
    private String motherMnLname;
    private String motherMnMname;
    private String spouseEmpAddress;
    private String spouseEmployer;
    private String spouseFname;
    private String spouseLname;
    private String spouseMname;
    private String spouseOccupation;

    @OneToOne
    @JoinColumn(name = "p_id", referencedColumnName = "p_id")
    @JsonIgnore
    private PersonalInfo personalInfo;

    public FamilyBackground() {

    }

    public FamilyBackground(Integer famBgId, String fatherFname, String fatherLname, String fatherMname,
            String motherMnFname,
            String motherMnLname, String motherMnMname, String spouseEmpAddress, String spouseEmployer,
            String spouseFname, String spouseLname, String spouseMname, String spouseOccupation,
            PersonalInfo personalInfo) {
        this.famBgId = famBgId;
        this.fatherFname = fatherFname;
        this.fatherLname = fatherLname;
        this.fatherMname = fatherMname;
        this.motherMnFname = motherMnFname;
        this.motherMnLname = motherMnLname;
        this.motherMnMname = motherMnMname;
        this.spouseEmpAddress = spouseEmpAddress;
        this.spouseEmployer = spouseEmployer;
        this.spouseFname = spouseFname;
        this.spouseLname = spouseLname;
        this.spouseMname = spouseMname;
        this.spouseOccupation = spouseOccupation;
        this.personalInfo = personalInfo;
    }

    public Integer getFamBgId() {
        return famBgId;
    }

    public void setFamBgId(Integer famBgId) {
        this.famBgId = famBgId;
    }

    public String getFatherFname() {
        return fatherFname;
    }

    public void setFatherFname(String fatherFname) {
        this.fatherFname = fatherFname;
    }

    public String getFatherLname() {
        return fatherLname;
    }

    public void setFatherLname(String fatherLname) {
        this.fatherLname = fatherLname;
    }

    public String getFatherMname() {
        return fatherMname;
    }

    public void setFatherMname(String fatherMname) {
        this.fatherMname = fatherMname;
    }

    public String getMotherMnFname() {
        return motherMnFname;
    }

    public void setMotherMnFname(String motherMnFname) {
        this.motherMnFname = motherMnFname;
    }

    public String getMotherMnLname() {
        return motherMnLname;
    }

    public void setMotherMnLname(String motherMnLname) {
        this.motherMnLname = motherMnLname;
    }

    public String getMotherMnMname() {
        return motherMnMname;
    }

    public void setMotherMnMname(String motherMnMname) {
        this.motherMnMname = motherMnMname;
    }

    public String getSpouseEmpAddress() {
        return spouseEmpAddress;
    }

    public void setSpouseEmpAddress(String spouseEmpAddress) {
        this.spouseEmpAddress = spouseEmpAddress;
    }

    public String getSpouseEmployer() {
        return spouseEmployer;
    }

    public void setSpouseEmployer(String spouseEmployer) {
        this.spouseEmployer = spouseEmployer;
    }

    public String getSpouseFname() {
        return spouseFname;
    }

    public void setSpouseFname(String spouseFname) {
        this.spouseFname = spouseFname;
    }

    public String getSpouseLname() {
        return spouseLname;
    }

    public void setSpouseLname(String spouseLname) {
        this.spouseLname = spouseLname;
    }

    public String getSpouseMname() {
        return spouseMname;
    }

    public void setSpouseMname(String spouseMname) {
        this.spouseMname = spouseMname;
    }

    public String getSpouseOccupation() {
        return spouseOccupation;
    }

    public void setSpouseOccupation(String spouseOccupation) {
        this.spouseOccupation = spouseOccupation;
    }

    public PersonalInfo getPersonalInfo() {
        return personalInfo;
    }

    public void setPersonalInfo(PersonalInfo personalInfo) {
        this.personalInfo = personalInfo;
    }

    // Getters and Setters

}
