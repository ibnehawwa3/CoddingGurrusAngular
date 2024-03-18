import { Component } from '@angular/core';
import { CustomizeService } from '../../../customize/customize.service';
import { HttpService } from '../../../shared/services/http-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../shared/services/common-service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isNightMode = false;
  constructor(private dataService: CustomizeService, private fb: FormBuilder, private httpService: HttpService, public commonService: CommonService) {

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
        fullname: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    });
  }
  register() {
    if (this.registerForm.valid) {

      const credentials = this.registerForm.value;
      
      this.httpService.post<any>(this.commonService.apiEndPoints.Register, credentials)
      .subscribe(response => {
       console.log('Register successful:', response);
      }, error => {
       // Handle login errorng
       console.error('Register error:', error);
      });
  }else{

  }
  }
}