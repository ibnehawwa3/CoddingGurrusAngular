import { Component } from '@angular/core';
import { CustomizeService } from '../../../customize/customize.service';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../shared/services/common-service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  isNightMode = false;
  courseId :any;
  public topics:any[]=[];
  constructor(private dataService: CustomizeService,private route: ActivatedRoute,public commonService:CommonService) {

  }
  // ngOnInit() {
  //   let storedNightMode = localStorage.getItem('nightMode');
  //   this.isNightMode = storedNightMode ? JSON.parse(storedNightMode) : false;
  //   alert(storedNightMode )
  // }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.courseId = params['id']; // Assuming the query parameter name is 'id'
      console.log("courseid:", this.courseId);
    });

    this.papolateThreadSearch();

    this.dataService.currentMessage.subscribe((res) => {
      this.isNightMode = res;
      console.log(this.isNightMode)
    });
  }

  papolateThreadSearch()
  {
    this.commonService._defaultSkip++;
    this.commonService.Get<any>(this.commonService.apiEndPoints.TopicList + `?take=${this.commonService._defaultTake}&skip=${this.commonService._defaultSkip}&selilizationNeeded=${false}`)
    .then(response => {
      debugger
     this.topics.push(...response.data)
    })
    .catch(error => {
    
    });
  }
}