import { Component } from '@angular/core';
import { CustomizeService } from '../../../customize/customize.service';
import { HttpService } from '../../../shared/services/http-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../shared/services/common-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  
})
export class LoginComponent {
  isNightMode = false;
  constructor(private dataService: CustomizeService, private fb: FormBuilder, private httpService: HttpService, public commonService: CommonService) {

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
      console.log('Login cre valid:');

      const credentials = this.loginForm.value;
      
      this.httpService.post<any>(this.commonService.apiEndPoints.Login, credentials)
      .subscribe(response => {
       console.log('Login successful:', response);
      }, error => {
       // Handle login error
       console.error('Login error:', error);
      });
  }else{
    console.log('Login cre invalid:');

  }
  }
}
