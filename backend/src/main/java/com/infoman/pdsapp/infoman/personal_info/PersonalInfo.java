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

    public PersonalInfo(String csId, String firstName, String lastName, String middleName, String suffix,
            String dateOfBirth, String placeOfBirth, String sex, String civilStatus, String civilStatusOther,
            Double height, Double weight, String bloodType, String gsisId, String pagIbigId, String philHealthId,
            String sssId, String tinId, String agencyEmployeeNumber, String citizenship, String dualCitizenshipStatus,
            String dualCitizenshipCountry, String residentialAddress, String permanentAddress, String telephoneNumber,
            String mobileNumber, String emailAddress, String fatherLastName, String fatherFirstName,
            String fatherMiddleName, String motherLastName, String motherFirstName, String motherMiddleName,
            String spouseLastName, String spouseFirstName, String spouseMiddleName, String spouseSuffix,
            String spouseOccupation, String occupation, String employerName, String employerAddress,
            String employerTelephoneNumber, List<Children> children) {
        this.csId = csId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.suffix = suffix;
        this.dateOfBirth = dateOfBirth;
        this.placeOfBirth = placeOfBirth;
        this.sex = sex;
        this.civilStatus = civilStatus;
        this.civilStatusOther = civilStatusOther;
        this.height = height;
        this.weight = weight;
        this.bloodType = bloodType;
        this.gsisId = gsisId;
        this.pagIbigId = pagIbigId;
        this.philHealthId = philHealthId;
        this.sssId = sssId;
        this.tinId = tinId;
        this.agencyEmployeeNumber = agencyEmployeeNumber;
        this.citizenship = citizenship;
        this.dualCitizenshipStatus = dualCitizenshipStatus;
        this.dualCitizenshipCountry = dualCitizenshipCountry;
        this.residentialAddress = residentialAddress;
        this.permanentAddress = permanentAddress;
        this.telephoneNumber = telephoneNumber;
        this.mobileNumber = mobileNumber;
        this.emailAddress = emailAddress;
        this.fatherLastName = fatherLastName;
        this.fatherFirstName = fatherFirstName;
        this.fatherMiddleName = fatherMiddleName;
        this.motherLastName = motherLastName;
        this.motherFirstName = motherFirstName;
        this.motherMiddleName = motherMiddleName;
        this.spouseLastName = spouseLastName;
        this.spouseFirstName = spouseFirstName;
        this.spouseMiddleName = spouseMiddleName;
        this.spouseSuffix = spouseSuffix;
        this.spouseOccupation = spouseOccupation;
        this.occupation = occupation;
        this.employerName = employerName;
        this.employerAddress = employerAddress;
        this.employerTelephoneNumber = employerTelephoneNumber;
        this.children = children;
    }

    public String getCsId() {
        return csId;
    }

    public void setCsId(String csId) {
        this.csId = csId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getSuffix() {
        return suffix;
    }

    public void setSuffix(String suffix) {
        this.suffix = suffix;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getPlaceOfBirth() {
        return placeOfBirth;
    }

    public void setPlaceOfBirth(String placeOfBirth) {
        this.placeOfBirth = placeOfBirth;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getCivilStatus() {
        return civilStatus;
    }

    public void setCivilStatus(String civilStatus) {
        this.civilStatus = civilStatus;
    }

    public String getCivilStatusOther() {
        return civilStatusOther;
    }

    public void setCivilStatusOther(String civilStatusOther) {
        this.civilStatusOther = civilStatusOther;
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

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public String getGsisId() {
        return gsisId;
    }

    public void setGsisId(String gsisId) {
        this.gsisId = gsisId;
    }

    public String getPagIbigId() {
        return pagIbigId;
    }

    public void setPagIbigId(String pagIbigId) {
        this.pagIbigId = pagIbigId;
    }

    public String getPhilHealthId() {
        return philHealthId;
    }

    public void setPhilHealthId(String philHealthId) {
        this.philHealthId = philHealthId;
    }

    public String getSssId() {
        return sssId;
    }

    public void setSssId(String sssId) {
        this.sssId = sssId;
    }

    public String getTinId() {
        return tinId;
    }

    public void setTinId(String tinId) {
        this.tinId = tinId;
    }

    public String getAgencyEmployeeNumber() {
        return agencyEmployeeNumber;
    }

    public void setAgencyEmployeeNumber(String agencyEmployeeNumber) {
        this.agencyEmployeeNumber = agencyEmployeeNumber;
    }

    public String getCitizenship() {
        return citizenship;
    }

    public void setCitizenship(String citizenship) {
        this.citizenship = citizenship;
    }

    public String getDualCitizenshipStatus() {
        return dualCitizenshipStatus;
    }

    public void setDualCitizenshipStatus(String dualCitizenshipStatus) {
        this.dualCitizenshipStatus = dualCitizenshipStatus;
    }

    public String getDualCitizenshipCountry() {
        return dualCitizenshipCountry;
    }

    public void setDualCitizenshipCountry(String dualCitizenshipCountry) {
        this.dualCitizenshipCountry = dualCitizenshipCountry;
    }

    public String getResidentialAddress() {
        return residentialAddress;
    }

    public void setResidentialAddress(String residentialAddress) {
        this.residentialAddress = residentialAddress;
    }

    public String getPermanentAddress() {
        return permanentAddress;
    }

    public void setPermanentAddress(String permanentAddress) {
        this.permanentAddress = permanentAddress;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getFatherLastName() {
        return fatherLastName;
    }

    public void setFatherLastName(String fatherLastName) {
        this.fatherLastName = fatherLastName;
    }

    public String getFatherFirstName() {
        return fatherFirstName;
    }

    public void setFatherFirstName(String fatherFirstName) {
        this.fatherFirstName = fatherFirstName;
    }

    public String getFatherMiddleName() {
        return fatherMiddleName;
    }

    public void setFatherMiddleName(String fatherMiddleName) {
        this.fatherMiddleName = fatherMiddleName;
    }

    public String getMotherLastName() {
        return motherLastName;
    }

    public void setMotherLastName(String motherLastName) {
        this.motherLastName = motherLastName;
    }

    public String getMotherFirstName() {
        return motherFirstName;
    }

    public void setMotherFirstName(String motherFirstName) {
        this.motherFirstName = motherFirstName;
    }

    public String getMotherMiddleName() {
        return motherMiddleName;
    }

    public void setMotherMiddleName(String motherMiddleName) {
        this.motherMiddleName = motherMiddleName;
    }

    public String getSpouseLastName() {
        return spouseLastName;
    }

    public void setSpouseLastName(String spouseLastName) {
        this.spouseLastName = spouseLastName;
    }

    public String getSpouseFirstName() {
        return spouseFirstName;
    }

    public void setSpouseFirstName(String spouseFirstName) {
        this.spouseFirstName = spouseFirstName;
    }

    public String getSpouseMiddleName() {
        return spouseMiddleName;
    }

    public void setSpouseMiddleName(String spouseMiddleName) {
        this.spouseMiddleName = spouseMiddleName;
    }

    public String getSpouseSuffix() {
        return spouseSuffix;
    }

    public void setSpouseSuffix(String spouseSuffix) {
        this.spouseSuffix = spouseSuffix;
    }

    public String getSpouseOccupation() {
        return spouseOccupation;
    }

    public void setSpouseOccupation(String spouseOccupation) {
        this.spouseOccupation = spouseOccupation;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getEmployerName() {
        return employerName;
    }

    public void setEmployerName(String employerName) {
        this.employerName = employerName;
    }

    public String getEmployerAddress() {
        return employerAddress;
    }

    public void setEmployerAddress(String employerAddress) {
        this.employerAddress = employerAddress;
    }

    public String getEmployerTelephoneNumber() {
        return employerTelephoneNumber;
    }

    public void setEmployerTelephoneNumber(String employerTelephoneNumber) {
        this.employerTelephoneNumber = employerTelephoneNumber;
    }

    public List<Children> getChildren() {
        return children;
    }

    public void setChildren(List<Children> children) {
        this.children = children;
    }

    @Override
    public String toString() {
        return "PersonalInfo [csId=" + csId + ", firstName=" + firstName + ", lastName=" + lastName + ", middleName="
                + middleName + ", suffix=" + suffix + ", dateOfBirth=" + dateOfBirth + ", placeOfBirth=" + placeOfBirth
                + ", sex=" + sex + ", civilStatus=" + civilStatus + ", civilStatusOther=" + civilStatusOther
                + ", height=" + height + ", weight=" + weight + ", bloodType=" + bloodType + ", gsisId=" + gsisId
                + ", pagIbigId=" + pagIbigId + ", philHealthId=" + philHealthId + ", sssId=" + sssId + ", tinId="
                + tinId + ", agencyEmployeeNumber=" + agencyEmployeeNumber + ", citizenship=" + citizenship
                + ", dualCitizenshipStatus=" + dualCitizenshipStatus + ", dualCitizenshipCountry="
                + dualCitizenshipCountry + ", residentialAddress=" + residentialAddress + ", permanentAddress="
                + permanentAddress + ", telephoneNumber=" + telephoneNumber + ", mobileNumber=" + mobileNumber
                + ", emailAddress=" + emailAddress + ", fatherLastName=" + fatherLastName + ", fatherFirstName="
                + fatherFirstName + ", fatherMiddleName=" + fatherMiddleName + ", motherLastName=" + motherLastName
                + ", motherFirstName=" + motherFirstName + ", motherMiddleName=" + motherMiddleName
                + ", spouseLastName=" + spouseLastName + ", spouseFirstName=" + spouseFirstName + ", spouseMiddleName="
                + spouseMiddleName + ", spouseSuffix=" + spouseSuffix + ", spouseOccupation=" + spouseOccupation
                + ", occupation=" + occupation + ", employerName=" + employerName + ", employerAddress="
                + employerAddress + ", employerTelephoneNumber=" + employerTelephoneNumber + ", children=" + children
                + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((csId == null) ? 0 : csId.hashCode());
        result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
        result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
        result = prime * result + ((middleName == null) ? 0 : middleName.hashCode());
        result = prime * result + ((suffix == null) ? 0 : suffix.hashCode());
        result = prime * result + ((dateOfBirth == null) ? 0 : dateOfBirth.hashCode());
        result = prime * result + ((placeOfBirth == null) ? 0 : placeOfBirth.hashCode());
        result = prime * result + ((sex == null) ? 0 : sex.hashCode());
        result = prime * result + ((civilStatus == null) ? 0 : civilStatus.hashCode());
        result = prime * result + ((civilStatusOther == null) ? 0 : civilStatusOther.hashCode());
        result = prime * result + ((height == null) ? 0 : height.hashCode());
        result = prime * result + ((weight == null) ? 0 : weight.hashCode());
        result = prime * result + ((bloodType == null) ? 0 : bloodType.hashCode());
        result = prime * result + ((gsisId == null) ? 0 : gsisId.hashCode());
        result = prime * result + ((pagIbigId == null) ? 0 : pagIbigId.hashCode());
        result = prime * result + ((philHealthId == null) ? 0 : philHealthId.hashCode());
        result = prime * result + ((sssId == null) ? 0 : sssId.hashCode());
        result = prime * result + ((tinId == null) ? 0 : tinId.hashCode());
        result = prime * result + ((agencyEmployeeNumber == null) ? 0 : agencyEmployeeNumber.hashCode());
        result = prime * result + ((citizenship == null) ? 0 : citizenship.hashCode());
        result = prime * result + ((dualCitizenshipStatus == null) ? 0 : dualCitizenshipStatus.hashCode());
        result = prime * result + ((dualCitizenshipCountry == null) ? 0 : dualCitizenshipCountry.hashCode());
        result = prime * result + ((residentialAddress == null) ? 0 : residentialAddress.hashCode());
        result = prime * result + ((permanentAddress == null) ? 0 : permanentAddress.hashCode());
        result = prime * result + ((telephoneNumber == null) ? 0 : telephoneNumber.hashCode());
        result = prime * result + ((mobileNumber == null) ? 0 : mobileNumber.hashCode());
        result = prime * result + ((emailAddress == null) ? 0 : emailAddress.hashCode());
        result = prime * result + ((fatherLastName == null) ? 0 : fatherLastName.hashCode());
        result = prime * result + ((fatherFirstName == null) ? 0 : fatherFirstName.hashCode());
        result = prime * result + ((fatherMiddleName == null) ? 0 : fatherMiddleName.hashCode());
        result = prime * result + ((motherLastName == null) ? 0 : motherLastName.hashCode());
        result = prime * result + ((motherFirstName == null) ? 0 : motherFirstName.hashCode());
        result = prime * result + ((motherMiddleName == null) ? 0 : motherMiddleName.hashCode());
        result = prime * result + ((spouseLastName == null) ? 0 : spouseLastName.hashCode());
        result = prime * result + ((spouseFirstName == null) ? 0 : spouseFirstName.hashCode());
        result = prime * result + ((spouseMiddleName == null) ? 0 : spouseMiddleName.hashCode());
        result = prime * result + ((spouseSuffix == null) ? 0 : spouseSuffix.hashCode());
        result = prime * result + ((spouseOccupation == null) ? 0 : spouseOccupation.hashCode());
        result = prime * result + ((occupation == null) ? 0 : occupation.hashCode());
        result = prime * result + ((employerName == null) ? 0 : employerName.hashCode());
        result = prime * result + ((employerAddress == null) ? 0 : employerAddress.hashCode());
        result = prime * result + ((employerTelephoneNumber == null) ? 0 : employerTelephoneNumber.hashCode());
        result = prime * result + ((children == null) ? 0 : children.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        PersonalInfo other = (PersonalInfo) obj;
        if (csId == null) {
            if (other.csId != null)
                return false;
        } else if (!csId.equals(other.csId))
            return false;
        if (firstName == null) {
            if (other.firstName != null)
                return false;
        } else if (!firstName.equals(other.firstName))
            return false;
        if (lastName == null) {
            if (other.lastName != null)
                return false;
        } else if (!lastName.equals(other.lastName))
            return false;
        if (middleName == null) {
            if (other.middleName != null)
                return false;
        } else if (!middleName.equals(other.middleName))
            return false;
        if (suffix == null) {
            if (other.suffix != null)
                return false;
        } else if (!suffix.equals(other.suffix))
            return false;
        if (dateOfBirth == null) {
            if (other.dateOfBirth != null)
                return false;
        } else if (!dateOfBirth.equals(other.dateOfBirth))
            return false;
        if (placeOfBirth == null) {
            if (other.placeOfBirth != null)
                return false;
        } else if (!placeOfBirth.equals(other.placeOfBirth))
            return false;
        if (sex == null) {
            if (other.sex != null)
                return false;
        } else if (!sex.equals(other.sex))
            return false;
        if (civilStatus == null) {
            if (other.civilStatus != null)
                return false;
        } else if (!civilStatus.equals(other.civilStatus))
            return false;
        if (civilStatusOther == null) {
            if (other.civilStatusOther != null)
                return false;
        } else if (!civilStatusOther.equals(other.civilStatusOther))
            return false;
        if (height == null) {
            if (other.height != null)
                return false;
        } else if (!height.equals(other.height))
            return false;
        if (weight == null) {
            if (other.weight != null)
                return false;
        } else if (!weight.equals(other.weight))
            return false;
        if (bloodType == null) {
            if (other.bloodType != null)
                return false;
        } else if (!bloodType.equals(other.bloodType))
            return false;
        if (gsisId == null) {
            if (other.gsisId != null)
                return false;
        } else if (!gsisId.equals(other.gsisId))
            return false;
        if (pagIbigId == null) {
            if (other.pagIbigId != null)
                return false;
        } else if (!pagIbigId.equals(other.pagIbigId))
            return false;
        if (philHealthId == null) {
            if (other.philHealthId != null)
                return false;
        } else if (!philHealthId.equals(other.philHealthId))
            return false;
        if (sssId == null) {
            if (other.sssId != null)
                return false;
        } else if (!sssId.equals(other.sssId))
            return false;
        if (tinId == null) {
            if (other.tinId != null)
                return false;
        } else if (!tinId.equals(other.tinId))
            return false;
        if (agencyEmployeeNumber == null) {
            if (other.agencyEmployeeNumber != null)
                return false;
        } else if (!agencyEmployeeNumber.equals(other.agencyEmployeeNumber))
            return false;
        if (citizenship == null) {
            if (other.citizenship != null)
                return false;
        } else if (!citizenship.equals(other.citizenship))
            return false;
        if (dualCitizenshipStatus == null) {
            if (other.dualCitizenshipStatus != null)
                return false;
        } else if (!dualCitizenshipStatus.equals(other.dualCitizenshipStatus))
            return false;
        if (dualCitizenshipCountry == null) {
            if (other.dualCitizenshipCountry != null)
                return false;
        } else if (!dualCitizenshipCountry.equals(other.dualCitizenshipCountry))
            return false;
        if (residentialAddress == null) {
            if (other.residentialAddress != null)
                return false;
        } else if (!residentialAddress.equals(other.residentialAddress))
            return false;
        if (permanentAddress == null) {
            if (other.permanentAddress != null)
                return false;
        } else if (!permanentAddress.equals(other.permanentAddress))
            return false;
        if (telephoneNumber == null) {
            if (other.telephoneNumber != null)
                return false;
        } else if (!telephoneNumber.equals(other.telephoneNumber))
            return false;
        if (mobileNumber == null) {
            if (other.mobileNumber != null)
                return false;
        } else if (!mobileNumber.equals(other.mobileNumber))
            return false;
        if (emailAddress == null) {
            if (other.emailAddress != null)
                return false;
        } else if (!emailAddress.equals(other.emailAddress))
            return false;
        if (fatherLastName == null) {
            if (other.fatherLastName != null)
                return false;
        } else if (!fatherLastName.equals(other.fatherLastName))
            return false;
        if (fatherFirstName == null) {
            if (other.fatherFirstName != null)
                return false;
        } else if (!fatherFirstName.equals(other.fatherFirstName))
            return false;
        if (fatherMiddleName == null) {
            if (other.fatherMiddleName != null)
                return false;
        } else if (!fatherMiddleName.equals(other.fatherMiddleName))
            return false;
        if (motherLastName == null) {
            if (other.motherLastName != null)
                return false;
        } else if (!motherLastName.equals(other.motherLastName))
            return false;
        if (motherFirstName == null) {
            if (other.motherFirstName != null)
                return false;
        } else if (!motherFirstName.equals(other.motherFirstName))
            return false;
        if (motherMiddleName == null) {
            if (other.motherMiddleName != null)
                return false;
        } else if (!motherMiddleName.equals(other.motherMiddleName))
            return false;
        if (spouseLastName == null) {
            if (other.spouseLastName != null)
                return false;
        } else if (!spouseLastName.equals(other.spouseLastName))
            return false;
        if (spouseFirstName == null) {
            if (other.spouseFirstName != null)
                return false;
        } else if (!spouseFirstName.equals(other.spouseFirstName))
            return false;
        if (spouseMiddleName == null) {
            if (other.spouseMiddleName != null)
                return false;
        } else if (!spouseMiddleName.equals(other.spouseMiddleName))
            return false;
        if (spouseSuffix == null) {
            if (other.spouseSuffix != null)
                return false;
        } else if (!spouseSuffix.equals(other.spouseSuffix))
            return false;
        if (spouseOccupation == null) {
            if (other.spouseOccupation != null)
                return false;
        } else if (!spouseOccupation.equals(other.spouseOccupation))
            return false;
        if (occupation == null) {
            if (other.occupation != null)
                return false;
        } else if (!occupation.equals(other.occupation))
            return false;
        if (employerName == null) {
            if (other.employerName != null)
                return false;
        } else if (!employerName.equals(other.employerName))
            return false;
        if (employerAddress == null) {
            if (other.employerAddress != null)
                return false;
        } else if (!employerAddress.equals(other.employerAddress))
            return false;
        if (employerTelephoneNumber == null) {
            if (other.employerTelephoneNumber != null)
                return false;
        } else if (!employerTelephoneNumber.equals(other.employerTelephoneNumber))
            return false;
        if (children == null) {
            if (other.children != null)
                return false;
        } else if (!children.equals(other.children))
            return false;
        return true;
    }

}
