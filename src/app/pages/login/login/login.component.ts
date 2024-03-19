import { Component } from '@angular/core';
import { CustomizeService } from '../../../customize/customize.service';
import { HttpService } from '../../../shared/services/http-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../shared/services/common-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiResponse } from '../../../shared/interfaces/response';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  
})
export class LoginComponent {
  isNightMode = false;
  constructor(private dataService: CustomizeService,private router:Router, private fb: FormBuilder,private loader:NgxSpinnerService, private httpService: HttpService, public commonService: CommonService) {

  }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
 
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe((res) => {
      this.isNightMode = res;
      this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    });
  }
  login() {
    this.loader.show();
    if (this.loginForm.valid) {
      this.httpService.post<any>(this.commonService.apiEndPoints.Login, this.loginForm.value)
      .subscribe( response => {
       this.loader.hide();
       this.router.navigate(['/']);

      }, error => {
       // Handle login errorng
       this.loader.hide();

      });
  }else{

  }
  }
}
