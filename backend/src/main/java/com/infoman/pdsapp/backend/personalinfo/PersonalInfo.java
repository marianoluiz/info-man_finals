package com.infoman.pdsapp.backend.personalinfo;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "personal_info")
public class PersonalInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "p_id")
    private Integer pId;

    private String agencyEmpno;
    private String bloodType;
    private Integer citAcqId;
    private Integer citId;
    private Integer cstatId;
    private String dob;
    private String extName;
    private String fName;
    private String lName;
    private String mName;
    private String gsisNo;
    private String height;
    private String pagibigId;
    private String philhealthId;
    private String pob;
    private Integer sexId;
    private String sssNo;
    private String tin;
    private String weight;

    @OneToOne(mappedBy = "personalInfo", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private FamilyBackground familyBackground;

    @OneToOne(mappedBy = "personalInfo", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ContactInfo contactInfo;

    @OneToMany(mappedBy = "personalInfo", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonManagedReference
    private List<Children> children = new ArrayList<>();

    public PersonalInfo() {

    }

    public PersonalInfo(Integer pId, String agencyEmpno, String bloodType, Integer citAcqId, Integer citId,
            Integer cstatId, String dob, String extName, String fName, String lName, String mName, String gsisNo,
            String height, String pagibigId, String philhealthId, String pob, Integer sexId, String sssNo, String tin,
            String weight, FamilyBackground familyBackground, ContactInfo contactInfo) {
        this.pId = pId;
        this.agencyEmpno = agencyEmpno;
        this.bloodType = bloodType;
        this.citAcqId = citAcqId;
        this.citId = citId;
        this.cstatId = cstatId;
        this.dob = dob;
        this.extName = extName;
        this.fName = fName;
        this.lName = lName;
        this.mName = mName;
        this.gsisNo = gsisNo;
        this.height = height;
        this.pagibigId = pagibigId;
        this.philhealthId = philhealthId;
        this.pob = pob;
        this.sexId = sexId;
        this.sssNo = sssNo;
        this.tin = tin;
        this.weight = weight;
        this.familyBackground = familyBackground;
        this.contactInfo = contactInfo;
    }

    public Integer getpId() {
        return pId;
    }

    public void setpId(Integer pId) {
        this.pId = pId;
    }

    public String getAgencyEmpno() {
        return agencyEmpno;
    }

    public void setAgencyEmpno(String agencyEmpno) {
        this.agencyEmpno = agencyEmpno;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public Integer getCitAcqId() {
        return citAcqId;
    }

    public void setCitAcqId(Integer citAcqId) {
        this.citAcqId = citAcqId;
    }

    public Integer getCitId() {
        return citId;
    }

    public void setCitId(Integer citId) {
        this.citId = citId;
    }

    public Integer getCstatId() {
        return cstatId;
    }

    public void setCstatId(Integer cstatId) {
        this.cstatId = cstatId;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getExtName() {
        return extName;
    }

    public void setExtName(String extName) {
        this.extName = extName;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getmName() {
        return mName;
    }

    public void setmName(String mName) {
        this.mName = mName;
    }

    public String getGsisNo() {
        return gsisNo;
    }

    public void setGsisNo(String gsisNo) {
        this.gsisNo = gsisNo;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getPagibigId() {
        return pagibigId;
    }

    public void setPagibigId(String pagibigId) {
        this.pagibigId = pagibigId;
    }

    public String getPhilhealthId() {
        return philhealthId;
    }

    public void setPhilhealthId(String philhealthId) {
        this.philhealthId = philhealthId;
    }

    public String getPob() {
        return pob;
    }

    public void setPob(String pob) {
        this.pob = pob;
    }

    public Integer getSexId() {
        return sexId;
    }

    public void setSexId(Integer sexId) {
        this.sexId = sexId;
    }

    public String getSssNo() {
        return sssNo;
    }

    public void setSssNo(String sssNo) {
        this.sssNo = sssNo;
    }

    public String getTin() {
        return tin;
    }

    public void setTin(String tin) {
        this.tin = tin;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public FamilyBackground getFamilyBackground() {
        return familyBackground;
    }

    public void setFamilyBackground(FamilyBackground familyBackground) {
        this.familyBackground = familyBackground;
    }

    public ContactInfo getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(ContactInfo contactInfo) {
        this.contactInfo = contactInfo;
    }

}
