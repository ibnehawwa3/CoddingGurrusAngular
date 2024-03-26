import { Component, Input } from '@angular/core';
import { CustomizeService } from '../../../../customize/customize.service';

@Component({
  selector: 'course-details-header',
  templateUrl: './course-details-header.component.html',
  styleUrl: './course-details-header.component.css'
})
export class CourseDetailsHeaderComponent {
  isNightMode = false;
  @Input() contentheader: any;


  constructor(private dataService: CustomizeService) {

  }
  // ngOnInit() {
  //   let storedNightMode = localStorage.getItem('nightMode');
  //   this.isNightMode = storedNightMode ? JSON.parse(storedNightMode) : false;
  //   alert(storedNightMode )
  // }
  ngOnInit(): void {
    debugger
    console.log(this.contentheader)
    this.dataService.currentMessage.subscribe((res) => {
      this.isNightMode = res;
      console.log(this.isNightMode)
    });
  }
}
