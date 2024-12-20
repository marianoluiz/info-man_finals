package com.infoman.pdsapp.backend.personalinfo;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "contact_info")
public class ContactInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contact_id")
    private Integer id;

    private String emailAddress;
    private String mobileNo;
    private String permBgy;
    private String permCitymun;
    private String permHouseNo;
    private String permHouseStreet;
    private String permProv;
    private String permVillage;
    private String permZipcode;
    private String resBgy;
    private String resCitymun;
    private String resHouseNo;
    private String resHouseStreet;
    private String resProv;
    private String resVillage;
    private String resZipcode;
    private String telNo;

    @OneToOne
    @JoinColumn(name = "p_id", referencedColumnName = "p_id")
    @JsonIgnore
    private PersonalInfo personalInfo;

    public ContactInfo() {

    }

    public ContactInfo(Integer id, String emailAddress, String mobileNo, String permBgy, String permCitymun,
            String permHouseNo, String permHouseStreet, String permProv, String permVillage, String permZipcode,
            String resBgy, String resCitymun, String resHouseNo, String resHouseStreet, String resProv,
            String resVillage, String resZipcode, String telNo, PersonalInfo personalInfo) {
        this.id = id;
        this.emailAddress = emailAddress;
        this.mobileNo = mobileNo;
        this.permBgy = permBgy;
        this.permCitymun = permCitymun;
        this.permHouseNo = permHouseNo;
        this.permHouseStreet = permHouseStreet;
        this.permProv = permProv;
        this.permVillage = permVillage;
        this.permZipcode = permZipcode;
        this.resBgy = resBgy;
        this.resCitymun = resCitymun;
        this.resHouseNo = resHouseNo;
        this.resHouseStreet = resHouseStreet;
        this.resProv = resProv;
        this.resVillage = resVillage;
        this.resZipcode = resZipcode;
        this.telNo = telNo;
        this.personalInfo = personalInfo;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getPermBgy() {
        return permBgy;
    }

    public void setPermBgy(String permBgy) {
        this.permBgy = permBgy;
    }

    public String getPermCitymun() {
        return permCitymun;
    }

    public void setPermCitymun(String permCitymun) {
        this.permCitymun = permCitymun;
    }

    public String getPermHouseNo() {
        return permHouseNo;
    }

    public void setPermHouseNo(String permHouseNo) {
        this.permHouseNo = permHouseNo;
    }

    public String getPermHouseStreet() {
        return permHouseStreet;
    }

    public void setPermHouseStreet(String permHouseStreet) {
        this.permHouseStreet = permHouseStreet;
    }

    public String getPermProv() {
        return permProv;
    }

    public void setPermProv(String permProv) {
        this.permProv = permProv;
    }

    public String getPermVillage() {
        return permVillage;
    }

    public void setPermVillage(String permVillage) {
        this.permVillage = permVillage;
    }

    public String getPermZipcode() {
        return permZipcode;
    }

    public void setPermZipcode(String permZipcode) {
        this.permZipcode = permZipcode;
    }

    public String getResBgy() {
        return resBgy;
    }

    public void setResBgy(String resBgy) {
        this.resBgy = resBgy;
    }

    public String getResCitymun() {
        return resCitymun;
    }

    public void setResCitymun(String resCitymun) {
        this.resCitymun = resCitymun;
    }

    public String getResHouseNo() {
        return resHouseNo;
    }

    public void setResHouseNo(String resHouseNo) {
        this.resHouseNo = resHouseNo;
    }

    public String getResHouseStreet() {
        return resHouseStreet;
    }

    public void setResHouseStreet(String resHouseStreet) {
        this.resHouseStreet = resHouseStreet;
    }

    public String getResProv() {
        return resProv;
    }

    public void setResProv(String resProv) {
        this.resProv = resProv;
    }

    public String getResVillage() {
        return resVillage;
    }

    public void setResVillage(String resVillage) {
        this.resVillage = resVillage;
    }

    public String getResZipcode() {
        return resZipcode;
    }

    public void setResZipcode(String resZipcode) {
        this.resZipcode = resZipcode;
    }

    public String getTelNo() {
        return telNo;
    }

    public void setTelNo(String telNo) {
        this.telNo = telNo;
    }

    public PersonalInfo getPersonalInfo() {
        return personalInfo;
    }

    public void setPersonalInfo(PersonalInfo personalInfo) {
        this.personalInfo = personalInfo;
    }

    // Getters and Setters

}
