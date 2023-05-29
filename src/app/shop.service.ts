import { Injectable } from '@angular/core';
import { Item } from './models/item';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  dataSource: string = "http://localhost:3000/items";

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.dataSource);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(this.dataSource + "/" + id);
  }

  createItem(newItem: Item): Observable<Item>{
    return this.http.post<Item>(this.dataSource, newItem);
  }

  editItem(id: number, edittedItem: Item): Observable<Item> {
    return this.http.put<Item>(this.dataSource + "/" + id, edittedItem);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete<any>(this.dataSource + "/" + id);
  }

  searchItems(search: string): Observable<Item[]> {
    return this.http.get<Item[]>(this.dataSource + "?q=" + search);
  }
}
