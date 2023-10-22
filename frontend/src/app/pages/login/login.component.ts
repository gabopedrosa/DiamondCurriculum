
import { Component, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }
    
    ngOnInit(): void {
      this.loginForm = new FormGroup({
        email: new FormControl(null, [
          Validators.required,
          Validators.email,
          Validators.minLength(6)
        ]),
        password: new FormControl(null, [
          Validators.required, 
          Validators.minLength(6)
        ]),
      })
    }


    onSubmit() {
      if(this.loginForm.invalid) {
        return;
      }
      
      this.authService.login(this.loginForm.value).pipe(
        map(token => this.router.navigate(['admin']))
      ).subscribe();
    }
    
    








}


