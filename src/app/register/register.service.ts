import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NursesServiceService } from '../../services/nurses-service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nurse } from '../../services/nurses-BBDD.service';

@Injectable()
export class CreateNurse{
    constructor(private conexHttp:HttpClient){}
    postNurses(name: string, pass: string): Observable<any>{
        let nurse = ({"name": name, "pass": pass})
        let url = "http://127.0.0.1:8000/nurse/new";
        return this.conexHttp.post(url, nurse,
            { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
            );
    }
}
export function confirmPassword(name: string, password: string, password2: string): boolean{
    let num = NursesServiceService.nurses.length;

    if(password === password2){
        NursesServiceService.nurses.push({"id": num+1, "first_name": name, "last_name":"dasfasdf", "password": password});
        return true;
    }else{
        return false;
    }
    
}