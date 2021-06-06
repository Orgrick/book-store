import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public get isLoggedIn(): boolean{
    return this._authService.isAuthenticated()
  }

  constructor(private _authService: AuthService) {
  }

  login(email: string, password: string) {
    this._authService.login(email,password)
      .subscribe(res =>{

      }, error => {
        alert('Wrong login or password')
      })
  }

  logout(){
    this._authService.logout()
  }
}
