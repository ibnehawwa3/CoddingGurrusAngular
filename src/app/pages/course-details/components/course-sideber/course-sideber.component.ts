import { Component, Input } from '@angular/core';
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
  @Input() topics:any;
  constructor(private dataService: CustomizeService) {}

  ngOnInit(): void {
    // Subscribe to night mode changes
    debugger
    this.dataService.currentMessage.subscribe((res) => {
    this.isNightMode = res;
    console.log(this.isNightMode);
    });
  }
}