import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isUserAuthorized = new BehaviorSubject<boolean>(false);

  isUserAuthorizedState$ = this.isUserAuthorized.asObservable();

  toggleBoolean() {
    this.isUserAuthorized.next(!this.isUserAuthorized.value);
  }

  setBoolean(value: boolean) {
    this.isUserAuthorized.next(value);
  }
}
