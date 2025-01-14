import { Component } from '@angular/core';
import { NursesServiceService } from '../../services/nurses-service.service';

export function Login(name: string, password: string): boolean {
    let nurse = NursesServiceService.nurses.find(u => u.first_name === name && u.password === password);
    if(nurse){
        return true;
    }else{
        return false;
    }
    
}

