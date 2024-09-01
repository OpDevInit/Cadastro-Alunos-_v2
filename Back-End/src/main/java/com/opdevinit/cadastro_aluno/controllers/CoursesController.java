package com.opdevinit.cadastro_aluno.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.opdevinit.cadastro_aluno.models.Course;

@CrossOrigin
@RestController
public class CoursesController {

    private List<Course> listCourses = new ArrayList<>(List.of(
        new Course(1, "Angular"),
        new Course(2, "Kotlin"),
        new Course(3,"SpringBoot")
    ));
    @GetMapping("/courses")
    public List<Course> getCourses() {
        return listCourses;
    }

    
}
