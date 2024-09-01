package com.opdevinit.cadastro_aluno.models;

public class Students {
    int id;
    String name;
    String email;
    String phone;
    int idCourse;
    int period;

    public Students(int id, String name, String email, String phone, int idCourse, int period) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.idCourse = idCourse;
        this.period = period;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getIdCurso() {
        return this.idCourse;
    }

    public void setIdCurso(int idCourse) {
        this.idCourse = idCourse;
    }

    public int getPeriod() {
        return this.period;
    }

    public void setPeriod(int period) {
        this.period = period;
    }

    public Students() {
    }
}
