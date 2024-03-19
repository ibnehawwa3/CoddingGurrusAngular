import { Component } from '@angular/core';
import { CustomizeService } from '../../../customize/customize.service';
import { HttpService } from '../../../shared/services/http-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../shared/services/common-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isNightMode = false;
  constructor(private dataService: CustomizeService,private router:Router, public fb: FormBuilder,private loader:NgxSpinnerService, private httpService: HttpService, public commonService: CommonService) {

  }
  registerForm: FormGroup = new FormGroup({
    fullname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
 
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe((res) => {
      this.isNightMode = res;
      this.registerForm = this.fb.group({
        firstname: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    });
  }
  register() {
    this.loader.show();

    if (this.registerForm.valid) {
      this.httpService.post<any>(this.commonService.apiEndPoints.Register, this.registerForm.value)
      .subscribe(response => {
       console.log('Register successful:', response);
       this.loader.hide();
       this.router.navigate(['/login']);

      }, error => {
       // Handle login errorng
       console.error('Register error:', error);
       this.loader.hide();

      });
  }else{

  }
  }
}