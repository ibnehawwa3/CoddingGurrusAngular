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
  public topics:any[];
  content:any;
  topiciddefault :any;
  public contents:any;

  constructor(private dataService: CustomizeService,private route: ActivatedRoute,public commonService:CommonService) {

  }
  // ngOnInit() {
  //   let storedNightMode = localStorage.getItem('nightMode');
  //   this.isNightMode = storedNightMode ? JSON.parse(storedNightMode) : false;
  //   alert(storedNightMode )
  // }
  ngOnInit(): void {
    debugger
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('id');
      this.papolateTopics();
    });

    this.dataService.currentMessage.subscribe((res) => {
      this.isNightMode = res;
      console.log(this.isNightMode)
    });
  }

  papolateTopics()
  {
    this.commonService.Get<any>(this.commonService.apiEndPoints.TopicList + `?courseId=${this.courseId}`)
    .then(response => {
      debugger
        if(response.data && response.data.length > 0)
        {
           this.topics=response.data[0].topics;
           if(response.data[0].topics.length>0)
           {
            this.topiciddefault=response.data[0].topics[0].id;
            this.populateContent(this.topiciddefault)
           }
        }
        else
        this.topics=[];
    })
    .catch(error => {
    });
  }

  populateContent(topicId:any){
    
    this.commonService.Get<any>(this.commonService.apiEndPoints.ContentByCourse + `?topicId=${topicId}`)
    .then(response => {

        if(response.data && response.data.length > 0)
           this.content=response;
        else
           this.topics=[];
    })
    .catch(error => {
    });
  }
}