import { Component } from '@angular/core';
import { CustomizeService } from '../../../../customize/customize.service';
import { CommonService } from '../../../../shared/services/common-service';

@Component({
  selector: 'browse-topic',
  templateUrl: './browse-topic.component.html',
  styleUrl: './browse-topic.component.css'
})
export class BrowseTopicComponent {
  isNightMode = false;
  browseTopics:any[]=[];
  constructor(private dataService: CustomizeService,public commonService:CommonService) {

  }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe((res) => {
      this.isNightMode = res;
      console.log(this.isNightMode)
    });
    this.populateBrowseTopics();
  }

  populateBrowseTopics(){

    this.commonService._defaultSkip++;
    this.commonService.Get<any>(this.commonService.apiEndPoints.GetBrowseTopics + `?take=${this.commonService._defaultTake}&skip=${this.commonService._defaultSkip}&selilizationNeeded=${false}`)
    .then(response => {
      
     this.browseTopics.push(...response.data)
    })
    .catch(error => {
      console.log(error);
    });
  }

}
