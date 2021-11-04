import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { API } from '@env/environment';
import {IDragon} from "@shared/interfaces/dragon-service.interface";

@Injectable({
  providedIn: 'root'
})
export class DragonsService {


  constructor(
    private http: HttpClient
  ) { }

  public getDragons() {
    return this.http.get<IDragon[]>(`${API.base}/api/v1/dragon`);
  }

  public createDragon(dragonData: IDragon) {
    return this.http.post<IDragon>(`${API.base}/api/v1/dragon`, dragonData);
  }

  public getDragonDetail(dragonData: IDragon['id']) {
    return this.http.get<IDragon>(`${API.base}/api/v1/dragon/${dragonData}`);
  }

  public updateDragon(dragonData: IDragon) {
    return this.http.put<IDragon>(`${API.base}/api/v1/dragon/${dragonData.id}`, dragonData)
  }

  public removeDragon(dragonData: IDragon['id']) {
    return this.http.delete(`${API.base}/api/v1/dragon/`)
  }

}
