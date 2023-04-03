package com.ortegafalces.piruletassilence;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/ejemplopost")
public class PostController {

    @GetMapping("/form")
    public String Form(Model model){
        model.addAttribute("usuario",new Usuario());
        return "formulario";
    }

    @PostMapping("/addPersona")
    public ModelAndView Resultados(@ModelAttribute("usuario") Usuario usuario){
        ModelAndView mav = new ModelAndView("resultados");
        mav.addObject("usuario",usuario);
        return mav;
    }
}
    
    

