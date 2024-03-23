import { Component, Input } from '@angular/core';
import { CustomizeService } from '../../../../customize/customize.service';
import { CommonService } from '../../../../shared/services/common-service';
import { ListeningParameter } from '../../../../shared/interfaces/response';
import { ITopicCount } from '../../IThread';

@Component({
  selector: 'app-threads-for-search',
  templateUrl: './threads-for-search.component.html',
  styleUrl: './threads-for-search.component.css'
})
export class ThreadsForSearchComponent {
  isNightMode = false;
  topics:any[]=[];
  constructor(private dataService: CustomizeService, public commonService: CommonService) {

  }
  
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe((res) => {
      this.isNightMode = res;
      console.log(this.isNightMode)
    });
    this.papolateThreadSearch()
 
  }
  papolateThreadSearch()
  {
    this.commonService._defaultSkip++;
    this.commonService.Get<any>(this.commonService.apiEndPoints.TopicList + `?take=${this.commonService._defaultTake}&skip=${this.commonService._defaultSkip}&selilizationNeeded=${false}`)
    .then(response => {
     this.topics.push(...response.data)
    })
    .catch(error => {
    
    });
  }
}