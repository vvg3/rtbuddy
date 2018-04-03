import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomHttpService {

  constructor(public http: HttpClient) {
  }

  getSingle<T>(id:number) {
    return this.http.get<T>(`www.espn.go.com/${id}`);
  }

  post<T>(item: any) {
    return this.http.post<T>(`www.espn.go.com`, item);
  }

  put<T>(id: number, item: any) {
    return this.http.put<T>(`www.espn.go.com/${id}`, item);
  }

  delete(id: number) {
    return this.http.delete(`www.espn.go.com/${id}`);
  }

}
