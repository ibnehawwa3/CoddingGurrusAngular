import { Component } from '@angular/core';
import { CustomizeService } from '../../../../customize/customize.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
  import { ListeningParameter } from '../../../../shared/interfaces/response';
import { CommonService } from '../../../../shared/services/common-service';

@Component({
  selector: 'course-sideber',
  templateUrl: './course-sideber.component.html',
  styleUrl: './course-sideber.component.css'
})
export class CourseSideberComponent {
  isNightMode = false;
  courseList:any;
 listeningParameter: ListeningParameter={} as ListeningParameter;
  constructor(private dataService: CustomizeService, private router: Router, private fb: FormBuilder,
    private loader: NgxSpinnerService, public commonService: CommonService) {}

ngOnInit(): void {
// Fetch course data
debugger
this.commonService.Get<any>(this.commonService.apiEndPoints.CourseListForSlider + `?take=${10}&skip=${1}`)
.then(response => {
  debugger
  console.log("call");
  console.log(response);

this.courseList = response.data;
})
.catch(error => {
console.error(error);
// Handle error gracefully
});

// Subscribe to night mode changes
this.dataService.currentMessage.subscribe((res) => {
this.isNightMode = res;
console.log(this.isNightMode);
});
}
}