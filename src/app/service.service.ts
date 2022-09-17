import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  rotaDigimon?: string;
  private _API_URL = 'https://digimon-api.vercel.app/api/';

  constructor(private http: HttpClient) {
    this.rotaDigimon = 'digimon';
  }

  getDigimonList(){
    return this.http.get(`${this._API_URL}${this.rotaDigimon}`);
  }
}
