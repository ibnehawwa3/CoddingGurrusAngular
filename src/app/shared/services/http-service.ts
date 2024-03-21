import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../interfaces/response';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }
  
  private buildUrl(endpoint: string): string {
    return `${environment.baseUrl}/${endpoint}`;
  }

  public get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(this.buildUrl(endpoint));
  }


  public post<ApiResponse>(endpoint: string, body: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.buildUrl(endpoint), body);
  }


  public put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(this.buildUrl(endpoint), body);
  }


  public delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(this.buildUrl(endpoint));
  }
}
