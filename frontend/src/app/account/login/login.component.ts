import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { Cliente } from './../../clientes/shared/cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cliente!: Cliente;
  
  login = {
    email: '',
    password: ''
  };

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
  }

  async onSubmit() {
    try{
      const result = await this.accountService.login(this.login);
      console.log(`Login efetuado: ${result}`);
      // aqui vai me levar para a rota vazia novamente
      this.router.navigate(['']);
    
    }catch(err){
      console.error(err);
    }    
  } 
}
