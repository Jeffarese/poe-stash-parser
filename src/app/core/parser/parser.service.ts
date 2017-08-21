import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ParserService {
  
  private BASE_URL = 'api/public-stash-tabs';
  
  constructor(private http: HttpClient) {
    this.http.get(this.BASE_URL).subscribe((r: any) => {
      console.log(r);
    });
  }


}
