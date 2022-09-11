import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) {}

    //Enter CLIENT_ID and CLIENT_SECRET below
    private CLIENT_ID = '';
    private CLIENT_SECRET = '';

    postCredentials(){
        const myHeadersAuth = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'})
        const body = `grant_type=client_credentials&client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}&scope=api`;
        this.http.post<any>(`https://login.allhours.com/connect/token`, body, {headers: myHeadersAuth}).subscribe(data => {
            console.log(data['access_token']);
            
        });
     }
}