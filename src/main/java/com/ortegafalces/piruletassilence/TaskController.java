package com.ortegafalces.piruletassilence;

import java.util.HashMap;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TaskController {
    private HashMap<String,String> usuarios = new HashMap<>();

    @GetMapping("/usuarios")
    public ResponseEntity<HashMap<String,String>> getTasks() {
        return new ResponseEntity<HashMap<String,String>>(usuarios, HttpStatus.OK);
    }

    @PostMapping("/usuarios")
    public ResponseEntity<Usuario> postTask(@RequestBody Usuario usuario) {
        usuarios.put(usuario.getNombre(),usuario.getApellido());

        return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
    }

    /*@DeleteMapping("/tasks/{idString}")
    public ResponseEntity<ArrayList<Task>> deleteTask(@PathVariable String idString) throws Exception {
        int id = Integer.parseInt(idString);
        Task clone = new Task(id, "");
        usuarios.remove(clone);
        throw new Exception();
        // return new ResponseEntity<ArrayList<Task>>(new ArrayList<Task>(), HttpStatus.NO_CONTENT);
    }*/

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> exceptionHandler() {
        return new ResponseEntity<String>("Ha habido un error", HttpStatus.BAD_REQUEST);
    }
}
