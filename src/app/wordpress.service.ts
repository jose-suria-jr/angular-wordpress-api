import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  wpUrl:string = 'http://wp.services.mnljdvr102-w7d.risk.regn.net:8999/wp-json/wp/v2/posts?_embed';
  wpPages:string = '6';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(
        this.wpUrl, 
        {
            params: {
                per_page: this.wpPages
            }
        });
  }
}
