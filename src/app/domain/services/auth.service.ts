import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(email: string, senha: string) {
    if(email == "imperialufla@gmail.com" && senha == "imperialufla")
      this.isAuthenticated = true;
  }

  logout() {
    // Lógica de logout aqui
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
