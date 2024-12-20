package com.infoman.pdsapp.backend.personalinfo;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "family_children")
public class Children {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fam_ch_id")
    private Integer id;
    private String child_fullname;
    private String dob;

    @ManyToOne // Define the relationship
    @JoinColumn(name = "p_id", referencedColumnName = "p_id") // FK in `education` table
    @JsonIgnore
    private PersonalInfo personalInfo;

    public Children() {

    }

    public Children(Integer id, String child_fullname, String dob) {
        this.id = id;
        this.child_fullname = child_fullname;
        this.dob = dob;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getChild_fullname() {
        return child_fullname;
    }

    public void setChild_fullname(String child_fullname) {
        this.child_fullname = child_fullname;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

}
