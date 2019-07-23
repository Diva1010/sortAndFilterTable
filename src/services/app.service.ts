import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppService{

    constructor(private http:HttpClient){}

    public getData(){
        return this.http.get("./assets/screenings.json")
    }
}