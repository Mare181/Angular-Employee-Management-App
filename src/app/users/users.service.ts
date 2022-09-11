import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { User } from "../interface/user";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    ACCESS_TOKEN: any;

    //Enter CLIENT_ID and CLIENT_SECRET below
    private CLIENT_ID = '';
    private CLIENT_SECRET = '';

    postCredentials(){
        const myHeadersAuth = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'})
        const body = `grant_type=client_credentials&client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}&scope=api`;
        this.http.post<any>(`https://login.allhours.com/connect/token`, body, {headers: myHeadersAuth}).subscribe(data => {
            console.log(data['access_token']);
            this.ACCESS_TOKEN = data['access_token'];
        });
     }

     getUsers():Observable<User[]>{
        const myHeaders = new HttpHeaders({'authorization': `Bearer ${this.ACCESS_TOKEN}`  , 'content-type': 'application/json'})
        return this.http.get<User[]>(`${this.apiUrl}/api/v1/Users`, {headers: myHeaders});
     }
}