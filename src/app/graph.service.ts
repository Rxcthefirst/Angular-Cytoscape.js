import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Person } from './models/elements';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http: HttpClient) {}

  private baseURL: string = `${environment.baseUrl}`

  getData(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.baseURL}/persons/all`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
