package com.opdevinit.cadastro_aluno.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.opdevinit.cadastro_aluno.models.Students;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin
@RestController
public class StudentsController {

    private Students students;
    private List<Students> listStud = new ArrayList<>( List
        .of(new Students(1, "Jhonn", "Jhonn123@gmail.com", "11967390014", 1, 1),
            new Students(2, "Lucca", "lucc485@gmail.com", "36981063821", 2, 2),
            new Students(3, "Giovanna", "gi382@gmail.com", "35927164421", 3, 3)));

    @GetMapping("/students")
    public List<Students> getStudents() {
        return listStud;
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<Students> getStudent(@PathVariable int id) {
        Students stud = listStud.stream()
                .filter(p -> p.getId() == id)
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product Not Found"));
        return ResponseEntity.ok(stud);
    }

    @PostMapping("/students")
    public ResponseEntity<Students> newStudent(@RequestBody Students stud) {
        
        stud.setId(listStud.size() + 1);
        listStud.add(stud);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/id")
                .buildAndExpand(stud.getId())
                .toUri();

        return ResponseEntity.created(location).body(stud);
    }

}
