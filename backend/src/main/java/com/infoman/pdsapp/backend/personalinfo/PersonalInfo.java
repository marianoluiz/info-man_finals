package com.infoman.pdsapp.backend.personalinfo;

import java.util.List;

public class PersonalInfo {
    private String cs_id;
    private String lastname;
    private String firstname;
    private String middlename;
    private String extension_name;
    private String dob;
    private String pob;
    private String sex;
    private String civil_status;
    private String civil_status_other;
    private Double height;
    private Double weight;
    private String blood_type;

    // id information
    private String gsis_no;
    private String pagibig_no;
    private String philhealth_no;
    private String sss_no;
    private String tin_no;
    private String agency_employee_no;

    // citizenship information
    private String citizenship;
    private String dual_citizen_status;
    private String dual_citizenship_country;

    // contact information
    private String residential_address;
    private String permanent_address;
    private String telephone_no;
    private String mobile_no;
    private String email;

    // spouse information
    private String spouse_lastname;
    private String spouse_firstname;
    private String spouse_middlename;
    private String spouse_extension;
    private String spouse_occupation;

    // occupation information
    private String occupation;
    private String employer;
    private String business_address;
    private String business_telephone;

    // father and mother information
    private String father_lastname;
    private String father_firstname;
    private String father_middlename;
    private String father_extension;
    private String mother_lastname;
    private String mother_firstname;
    private String mother_middlename;
    private String mother_extension;

    // children information
    private List<Children> children;

    public PersonalInfo(String cs_id, String lastname, String firstname, String middlename, String extension_name,
            String dob, String pob, String sex, String civil_status, String civil_status_other, Double height,
            Double weight, String blood_type, String gsis_no, String pagibig_no, String philhealth_no, String sss_no,
            String tin_no, String agency_employee_no, String citizenship, String dual_citizen_status,
            String dual_citizenship_country, String residential_address, String permanent_address, String telephone_no,
            String mobile_no, String email, String spouse_lastname, String spouse_firstname, String spouse_middlename,
            String spouse_extension, String spouse_occupation, String occupation, String employer,
            String business_address, String business_telephone, String father_lastname, String father_firstname,
            String father_middlename, String father_extension, String mother_lastname, String mother_firstname,
            String mother_middlename, String mother_extension, List<Children> children) {
        this.cs_id = cs_id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.middlename = middlename;
        this.extension_name = extension_name;
        this.dob = dob;
        this.pob = pob;
        this.sex = sex;
        this.civil_status = civil_status;
        this.civil_status_other = civil_status_other;
        this.height = height;
        this.weight = weight;
        this.blood_type = blood_type;
        this.gsis_no = gsis_no;
        this.pagibig_no = pagibig_no;
        this.philhealth_no = philhealth_no;
        this.sss_no = sss_no;
        this.tin_no = tin_no;
        this.agency_employee_no = agency_employee_no;
        this.citizenship = citizenship;
        this.dual_citizen_status = dual_citizen_status;
        this.dual_citizenship_country = dual_citizenship_country;
        this.residential_address = residential_address;
        this.permanent_address = permanent_address;
        this.telephone_no = telephone_no;
        this.mobile_no = mobile_no;
        this.email = email;
        this.spouse_lastname = spouse_lastname;
        this.spouse_firstname = spouse_firstname;
        this.spouse_middlename = spouse_middlename;
        this.spouse_extension = spouse_extension;
        this.spouse_occupation = spouse_occupation;
        this.occupation = occupation;
        this.employer = employer;
        this.business_address = business_address;
        this.business_telephone = business_telephone;
        this.father_lastname = father_lastname;
        this.father_firstname = father_firstname;
        this.father_middlename = father_middlename;
        this.father_extension = father_extension;
        this.mother_lastname = mother_lastname;
        this.mother_firstname = mother_firstname;
        this.mother_middlename = mother_middlename;
        this.mother_extension = mother_extension;
        this.children = children;
    }

    public String getCs_id() {
        return cs_id;
    }

    public void setCs_id(String cs_id) {
        this.cs_id = cs_id;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getMiddlename() {
        return middlename;
    }

    public void setMiddlename(String middlename) {
        this.middlename = middlename;
    }

    public String getExtension_name() {
        return extension_name;
    }

    public void setExtension_name(String extension_name) {
        this.extension_name = extension_name;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getPob() {
        return pob;
    }

    public void setPob(String pob) {
        this.pob = pob;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getCivil_status() {
        return civil_status;
    }

    public void setCivil_status(String civil_status) {
        this.civil_status = civil_status;
    }

    public String getCivil_status_other() {
        return civil_status_other;
    }

    public void setCivil_status_other(String civil_status_other) {
        this.civil_status_other = civil_status_other;
    }

    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public String getBlood_type() {
        return blood_type;
    }

    public void setBlood_type(String blood_type) {
        this.blood_type = blood_type;
    }

    public String getGsis_no() {
        return gsis_no;
    }

    public void setGsis_no(String gsis_no) {
        this.gsis_no = gsis_no;
    }

    public String getPagibig_no() {
        return pagibig_no;
    }

    public void setPagibig_no(String pagibig_no) {
        this.pagibig_no = pagibig_no;
    }

    public String getPhilhealth_no() {
        return philhealth_no;
    }

    public void setPhilhealth_no(String philhealth_no) {
        this.philhealth_no = philhealth_no;
    }

    public String getSss_no() {
        return sss_no;
    }

    public void setSss_no(String sss_no) {
        this.sss_no = sss_no;
    }

    public String getTin_no() {
        return tin_no;
    }

    public void setTin_no(String tin_no) {
        this.tin_no = tin_no;
    }

    public String getAgency_employee_no() {
        return agency_employee_no;
    }

    public void setAgency_employee_no(String agency_employee_no) {
        this.agency_employee_no = agency_employee_no;
    }

    public String getCitizenship() {
        return citizenship;
    }

    public void setCitizenship(String citizenship) {
        this.citizenship = citizenship;
    }

    public String getDual_citizen_status() {
        return dual_citizen_status;
    }

    public void setDual_citizen_status(String dual_citizen_status) {
        this.dual_citizen_status = dual_citizen_status;
    }

    public String getDual_citizenship_country() {
        return dual_citizenship_country;
    }

    public void setDual_citizenship_country(String dual_citizenship_country) {
        this.dual_citizenship_country = dual_citizenship_country;
    }

    public String getResidential_address() {
        return residential_address;
    }

    public void setResidential_address(String residential_address) {
        this.residential_address = residential_address;
    }

    public String getPermanent_address() {
        return permanent_address;
    }

    public void setPermanent_address(String permanent_address) {
        this.permanent_address = permanent_address;
    }

    public String getTelephone_no() {
        return telephone_no;
    }

    public void setTelephone_no(String telephone_no) {
        this.telephone_no = telephone_no;
    }

    public String getMobile_no() {
        return mobile_no;
    }

    public void setMobile_no(String mobile_no) {
        this.mobile_no = mobile_no;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSpouse_lastname() {
        return spouse_lastname;
    }

    public void setSpouse_lastname(String spouse_lastname) {
        this.spouse_lastname = spouse_lastname;
    }

    public String getSpouse_firstname() {
        return spouse_firstname;
    }

    public void setSpouse_firstname(String spouse_firstname) {
        this.spouse_firstname = spouse_firstname;
    }

    public String getSpouse_middlename() {
        return spouse_middlename;
    }

    public void setSpouse_middlename(String spouse_middlename) {
        this.spouse_middlename = spouse_middlename;
    }

    public String getSpouse_extension() {
        return spouse_extension;
    }

    public void setSpouse_extension(String spouse_extension) {
        this.spouse_extension = spouse_extension;
    }

    public String getSpouse_occupation() {
        return spouse_occupation;
    }

    public void setSpouse_occupation(String spouse_occupation) {
        this.spouse_occupation = spouse_occupation;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getEmployer() {
        return employer;
    }

    public void setEmployer(String employer) {
        this.employer = employer;
    }

    public String getBusiness_address() {
        return business_address;
    }

    public void setBusiness_address(String business_address) {
        this.business_address = business_address;
    }

    public String getBusiness_telephone() {
        return business_telephone;
    }

    public void setBusiness_telephone(String business_telephone) {
        this.business_telephone = business_telephone;
    }

    public String getFather_lastname() {
        return father_lastname;
    }

    public void setFather_lastname(String father_lastname) {
        this.father_lastname = father_lastname;
    }

    public String getFather_firstname() {
        return father_firstname;
    }

    public void setFather_firstname(String father_firstname) {
        this.father_firstname = father_firstname;
    }

    public String getFather_middlename() {
        return father_middlename;
    }

    public void setFather_middlename(String father_middlename) {
        this.father_middlename = father_middlename;
    }

    public String getFather_extension() {
        return father_extension;
    }

    public void setFather_extension(String father_extension) {
        this.father_extension = father_extension;
    }

    public String getMother_lastname() {
        return mother_lastname;
    }

    public void setMother_lastname(String mother_lastname) {
        this.mother_lastname = mother_lastname;
    }

    public String getMother_firstname() {
        return mother_firstname;
    }

    public void setMother_firstname(String mother_firstname) {
        this.mother_firstname = mother_firstname;
    }

    public String getMother_middlename() {
        return mother_middlename;
    }

    public void setMother_middlename(String mother_middlename) {
        this.mother_middlename = mother_middlename;
    }

    public String getMother_extension() {
        return mother_extension;
    }

    public void setMother_extension(String mother_extension) {
        this.mother_extension = mother_extension;
    }

    public List<Children> getChildren() {
        return children;
    }

    public void setChildren(List<Children> children) {
        this.children = children;
    }

    @Override
    public String toString() {
        return "PersonalInfo [cs_id=" + cs_id + ", lastname=" + lastname + ", firstname=" + firstname + ", middlename="
                + middlename + ", extension_name=" + extension_name + ", dob=" + dob + ", pob=" + pob + ", sex=" + sex
                + ", civil_status=" + civil_status + ", civil_status_other=" + civil_status_other + ", height=" + height
                + ", weight=" + weight + ", blood_type=" + blood_type + ", gsis_no=" + gsis_no + ", pagibig_no="
                + pagibig_no + ", philhealth_no=" + philhealth_no + ", sss_no=" + sss_no + ", tin_no=" + tin_no
                + ", agency_employee_no=" + agency_employee_no + ", citizenship=" + citizenship
                + ", dual_citizen_status=" + dual_citizen_status + ", dual_citizenship_country="
                + dual_citizenship_country + ", residential_address=" + residential_address + ", permanent_address="
                + permanent_address + ", telephone_no=" + telephone_no + ", mobile_no=" + mobile_no + ", email=" + email
                + ", spouse_lastname=" + spouse_lastname + ", spouse_firstname=" + spouse_firstname
                + ", spouse_middlename=" + spouse_middlename + ", spouse_extension=" + spouse_extension
                + ", spouse_occupation=" + spouse_occupation + ", occupation=" + occupation + ", employer=" + employer
                + ", business_address=" + business_address + ", business_telephone=" + business_telephone
                + ", father_lastname=" + father_lastname + ", father_firstname=" + father_firstname
                + ", father_middlename=" + father_middlename + ", father_extension=" + father_extension
                + ", mother_lastname=" + mother_lastname + ", mother_firstname=" + mother_firstname
                + ", mother_middlename=" + mother_middlename + ", mother_extension=" + mother_extension + ", children="
                + children + "]";
    }

    
}
