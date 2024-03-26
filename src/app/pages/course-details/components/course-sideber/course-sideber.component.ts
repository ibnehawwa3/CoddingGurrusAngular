import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomizeService } from '../../../../customize/customize.service';

@Component({
  selector: 'course-sideber',
  templateUrl: './course-sideber.component.html',
  styleUrl: './course-sideber.component.css'
})
export class CourseSideberComponent {
  isNightMode = false;
  @Input() topics:any[];
  @Output() topicSelect = new EventEmitter<any>();
  constructor(private dataService: CustomizeService) {}

  ngOnInit(): void {
    // Subscribe to night mode changes
    
    this.dataService.currentMessage.subscribe((res) => {
    this.isNightMode = res;
    console.log(this.isNightMode);
    });
  }

  byTopicSelect(topicId:number){
    
     this.topicSelect.emit(topicId);
  }
}