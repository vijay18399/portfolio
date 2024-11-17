import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor() { }

  isEmptyString(string: string) {
    return string === '';
  }

  isLastInput(index: any, limit: any) {
    return index === limit;
  }

  getElement(index: any) {
    return document.querySelector<HTMLInputElement>(`#otp-${index}`);
  }
}
