import { Observable } from "rxjs";
import { Component, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
 
@Injectable()
export class Alabay{
   
    constructor (private conexHttp:HttpClient) { }
 
    getNurses(): Observable<Nurse[]>{
        let url = "http://127.0.0.1:8000/nurse/index";
       
        return this.conexHttp.get<Nurse[]>(url,
            { headers: new HttpHeaders({'Content-Type': 'application/json'})}
        )
    }
}
 
export class Nurse {
    id: number;
    user: string;
    pass: string;
 
    constructor (id: number, user: string, pass: string){
        this.id = id;
        this.user = user;
        this.pass = pass;
    }
   
}