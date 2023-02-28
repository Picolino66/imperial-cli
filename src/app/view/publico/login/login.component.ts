import { AuthService } from './../../../domain/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  email: string = '';
  senha: string = '';

  constructor(
    private router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit(){
  }

  login(): void {
    this._authService.login(this.email, this.senha);
    this.router.navigate(['adm']);
  }

}
