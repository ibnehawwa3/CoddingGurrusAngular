import { Component } from '@angular/core';
import { CustomizeService } from '../../../customize/customize.service';
import { HttpService } from '../../../shared/services/http-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../shared/services/common-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiResponse } from '../../../shared/interfaces/response';
import { Router, RouterLink } from '@angular/router';
import { ResponseStatus } from '../../../shared/enum/enums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  
})
export class LoginComponent {
  isNightMode = false;
  isValid=true;
  constructor(private dataService: CustomizeService,private router:Router, private fb: FormBuilder,
    private loader:NgxSpinnerService, private httpService: HttpService, public commonService: CommonService) {

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
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }
    
    if (this.loginForm.valid) {
      this.loader.show();
      this.httpService.post<ApiResponse<any>>(this.commonService.apiEndPoints.Login, this.loginForm.value).subscribe(response=>{
        debugger
        if(response.status==ResponseStatus.Success){
          this.loader.hide();
          this.router.navigate(['/']);
        }
        else{
          this.loader.hide();
          this.isValid=false;
        }
      }, error => {
       this.loader.hide();

      });
  }else{

  }
  }
}
