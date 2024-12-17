package com.infoman.pdsapp.backend.personalinfo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;
import jakarta.annotation.PostConstruct;

@Repository
public class PersonalInfoRepository {
    List<PersonalInfo> personalInfoList = new ArrayList<PersonalInfo>();

    List<PersonalInfo> findAll() {
        return personalInfoList;
    }

    PersonalInfo findById(String id) {
        for (PersonalInfo personalInfo : personalInfoList) {
            if (personalInfo.getCs_id().equals(id)) {
                return personalInfo;
            }
        }
        return null;
    }

    @PostConstruct
    private void init() {
        // Record 1
        List<Children> children1 = new ArrayList<>();
        children1.add(new Children("1", "Tommy Doe", "2015-07-20"));
        children1.add(new Children("2", "Sara Doe", "2018-11-30"));

        personalInfoList.add(new PersonalInfo(
                "CS12345", "Doe", "John", "Michael", "Jr.", "1990-05-15", "New York", "Male", "Single", null, 5.9,
                160.0, "O+",
                "gsis123", "pagibig123", "philhealth123", "sss123", "tin123", "emp123",
                "Filipino", "No", null,
                "123 Main St, NY", "456 Oak St, NY", "123-456-7890", "098-765-4321", "john.doe@example.com",
                "Smith", "Jane", "E", "N/A", "Teacher",
                "Software Engineer", "TechCorp", "123 Tech Ave, SF", "555-1234",
                "Doe", "Robert", "L", "Sr.", "Doe", "Mary", "K", "N/A",
                children1));

        // Record 2
        List<Children> children2 = new ArrayList<>();
        children2.add(new Children("3", "Alexandra Lee", "2016-02-10"));
        children2.add(new Children("4", "Ben Lee", "2020-09-15"));

        personalInfoList.add(new PersonalInfo(
                "CS12346", "Lee", "Anna", "Patricia", null, "1985-03-12", "Los Angeles", "Female", "Married", null, 5.7,
                145.0, "A+",
                "gsis456", "pagibig456", "philhealth456", "sss456", "tin456", "emp456",
                "Filipino", "Yes", "USA",
                "789 Pine St, LA", "789 Pine St, LA", "234-567-8901", "091-234-5678", "anna.lee@example.com",
                "Lee", "John", "A", "Jr.", "Engineer",
                "Project Manager", "InnovaCorp", "456 Innovation Blvd, LA", "555-6789",
                "Lee", "David", "M", "Sr.", "Lee", "Susan", "B", "N/A",
                children2));

        // Record 3
        List<Children> children3 = new ArrayList<>();
        children3.add(new Children("5", "Mia White", "2017-05-25"));

        personalInfoList.add(new PersonalInfo(
                "CS12347", "White", "Jake", "Austin", null, "1988-11-01", "Chicago", "Male", "Married", null, 6.0,
                170.0, "B+",
                "gsis789", "pagibig789", "philhealth789", "sss789", "tin789", "emp789",
                "Filipino", "No", null,
                "1010 Maple St, Chicago", "2020 Oak St, Chicago", "345-678-9012", "092-345-6789",
                "jake.white@example.com",
                "White", "Olivia", "C", "N/A", "Doctor",
                "Surgeon", "HealthCorp", "321 Health Ave, Chicago", "555-7890",
                "White", "Michael", "A", "Jr.", "White", "Laura", "D", "N/A",
                children3));

        // Record 4
        List<Children> children4 = new ArrayList<>();
        children4.add(new Children("6", "Charlie Brown", "2019-01-01"));

        personalInfoList.add(new PersonalInfo(
                "CS12348", "Brown", "Charlie", "David", null, "1992-08-22", "Dallas", "Male", "Single", null, 5.8,
                155.0, "O-",
                "gsis012", "pagibig012", "philhealth012", "sss012", "tin012", "emp012",
                "Filipino", "No", null,
                "567 Birch St, Dallas", "567 Birch St, Dallas", "456-789-0123", "095-456-7890",
                "charlie.brown@example.com",
                "Brown", "Sam", "T", "Sr.", "Artist",
                "Freelancer", "ArtCorp", "123 Art Ave, Dallas", "555-8901",
                "Brown", "Thomas", "R", "N/A", "Brown", "Lina", "S", "N/A",
                children4));

        // Record 5
        List<Children> children5 = new ArrayList<>();
        children5.add(new Children("7", "Emma Black", "2021-03-10"));

        personalInfoList.add(new PersonalInfo(
                "CS12349", "Black", "Sophia", "Jane", "III", "1995-12-12", "Miami", "Female", "Married", null, 5.5,
                130.0, "AB",
                "gsis345", "pagibig345", "philhealth345", "sss345", "tin345", "emp345",
                "Filipino", "Yes", "Canada",
                "123 Coconut St, Miami", "123 Coconut St, Miami", "567-890-1234", "096-567-8901",
                "sophia.black@example.com",
                "Black", "Chris", "L", "N/A", "Teacher",
                "Teacher", "EduCorp", "987 Educator Blvd, Miami", "555-9012",
                "Black", "Harry", "M", "Jr.", "Black", "Paula", "F", "N/A",
                children5));
    }

}
