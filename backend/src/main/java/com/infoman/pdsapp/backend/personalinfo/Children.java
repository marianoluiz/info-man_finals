package com.infoman.pdsapp.backend.personalinfo;

public class Children {
    private Long id;
    private String child_fullname;
    private String dob;

    public Children(Long id, String child_fullname, String dob) {
        this.id = id;
        this.child_fullname = child_fullname;
        this.dob = dob;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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
