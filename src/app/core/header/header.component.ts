import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    //variables
    formLogin: FormGroup;
    isSubmitted = false;
    isLogin:Boolean=false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
    this.formLogin = this.fb.group({
      email: [ "", Validators.required ],
      password: [ "", Validators.required ]

    });
    if(this.authService.isLogIn()){
      this.isLogin = !this.isLogin;
    }
   }

  ngOnInit(): void {
  }

  login(){
    this.isSubmitted = true;
    if (this.formLogin.invalid) {
      return;
    }    
    this.authService.login(this.formLogin.value);
    console.log("enviando");
  }

  logout(){
    this.authService.logout();
  }

}
