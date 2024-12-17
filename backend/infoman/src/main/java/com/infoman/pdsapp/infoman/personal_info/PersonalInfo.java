package com.infoman.pdsapp.infoman.personal_info;

import java.util.List;

public class PersonalInfo {
    String csId;
    String firstName;
    String lastName;
    String middleName;
    String suffix;
    String dateOfBirth;
    String placeOfBirth;
    String sex;
    String civilStatus;
    String civilStatusOther;
    Double height;
    Double weight;
    String bloodType;

    // id information
    String gsisId;
    String pagIbigId;
    String philHealthId;
    String sssId;
    String tinId;
    String agencyEmployeeNumber;

    // citizenship information
    String citizenship;
    String dualCitizenshipStatus;
    String dualCitizenshipCountry;

    // contact information
    String residentialAddress;
    String permanentAddress;
    String telephoneNumber;
    String mobileNumber;
    String emailAddress;

    // family background
    String fatherLastName;
    String fatherFirstName;
    String fatherMiddleName;
    String motherLastName;
    String motherFirstName;
    String motherMiddleName;
    String spouseLastName;
    String spouseFirstName;
    String spouseMiddleName;
    String spouseSuffix;
    String spouseOccupation;

    // occupation information
    String occupation;
    String employerName;
    String employerAddress;
    String employerTelephoneNumber;

    // children information
    List<Children> children;
}
