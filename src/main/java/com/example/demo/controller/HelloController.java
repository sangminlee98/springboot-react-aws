package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class HelloController {

    @GetMapping("/test")
    public String test(@RequestParam("id") String id) {
        return id;
    }
    @PostMapping("/test")
    public TestDto test(@RequestBody TestDto testDto) {
        return testDto;
    }
}
