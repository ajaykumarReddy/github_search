import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersResponse } from './utilities/type';

@Injectable({providedIn: 'root'})
export class HttpService {

    constructor(private http: HttpClient) { }


    getUsers(login: string) : Observable<UsersResponse> {
        return this.http.get<UsersResponse>(`https://api.github.com/search/users?q=${login} in:login`);
    }
    
}