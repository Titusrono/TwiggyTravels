import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  get(url: string, options?: any) {
return new Promise<any>((resolve, reject) =>{
  this.httpClient.get(url, options).pipe(take(1)).subscribe({
    next: (response) => {
      resolve(response);
    },
    error: (error) => {
      reject(error);
    }
  })
})
}

post(url: string, body: any, options?: any) {
  return new Promise<any>((resolve, reject) => {
    this.httpClient.post(url, body, options).pipe(take(1)).subscribe({
      next: (response) => {
        resolve(response);
      },
      error: (error =>{
        reject(error);
      })
    })
  })
}

put(url: string, body: any, options?: any) {
  return new Promise<any>((resolve, reject) => {
    this.httpClient.put(url, body, options).pipe(take(1)).subscribe({
      next: (response) => {
        resolve(response);
      },
      error: (error =>{
        reject(error);
      })
    })
  })
}

delete(url: string, options?: any) {
  return new Promise<any>((resolve, reject) =>{
    this.httpClient.delete(url, options).pipe(take(1)).subscribe({
      next: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      }
    })
  })
  }
}