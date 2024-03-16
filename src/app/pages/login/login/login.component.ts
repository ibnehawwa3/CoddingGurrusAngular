import { Component } from '@angular/core';
import { CustomizeService } from '../../../customize/customize.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isNightMode = false;
  constructor(private dataService: CustomizeService,private fb: FormBuilder, private http: HttpClient) {

  }
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
    // ngOnInit() {
  //   let storedNightMode = localStorage.getItem('nightMode');
  //   this.isNightMode = storedNightMode ? JSON.parse(storedNightMode) : false;
  //   alert(storedNightMode )
  // }
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe((res) => {
      this.isNightMode = res;
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    });
  }
  login() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      this.http.post<any>('https://api.example.com/login', credentials)
        .subscribe(response => {
          // Handle successful login
          console.log('Login successful:', response);
        }, error => {
          // Handle login error
          console.error('Login error:', error);
        });
    }
  }
}
