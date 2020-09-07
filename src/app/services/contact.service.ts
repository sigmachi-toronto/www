import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api = 'https://api.mailjet.com/v3/send'

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post(this.api, input).pipe(
      map(
        (response) => {
          if(response) {
            console.log('got response');
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
  }
}
