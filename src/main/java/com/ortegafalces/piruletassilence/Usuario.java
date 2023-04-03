package com.ortegafalces.piruletassilence;

import java.io.Serializable;

public class Usuario implements Serializable {
    private String nombre;
    private String apellido;
    private int edad;
    
    public Usuario(String nombre ,String apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    public Usuario(){

    }
    

    public int getEdad(){
        return edad;
    }
    public String getNombre(){
        return nombre;
    }
    public String getApellido(){
        return apellido;
    }
    public void setNombre(String nombre){
        this.nombre=nombre;
    }
}
