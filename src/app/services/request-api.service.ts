import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestApiService {

  private paths: string = "";

  private response = new BehaviorSubject<string>("");
  response$ = this.response.asObservable();

  private backToHome: number = 0;

  constructor(private httpClient: HttpClient) { }

  apiUrl: string = "http://localhost:3000";

  addPath(path: string){
    console.log(path);

    if(this.paths == ""){
      if(path == "/"){
        this.paths += "/homepage";
      } else{
        this.paths += path;
      }
    } else{
      if(path != this.paths){
        this.paths += " -> " + path;
      }
    }

    if(path == "/homepage"){
      this.backToHome++;
      console.log("Back To Home: " + this.backToHome);
    }

    console.log(this.paths);

    if(this.backToHome >= 2){
      const request = {
        query: this.paths
      }
      
      this.httpClient.post(`${this.apiUrl}/api/chat`, request). subscribe(
        (response: any) => {
          this.response.next(response.message);
        },
        (error) => {
          console.error(error);
        }
      )
    }
  }
}
