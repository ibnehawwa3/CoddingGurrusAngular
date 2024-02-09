import { Component } from '@angular/core';
import { CustomizeService } from '../../../../customize/customize.service';

@Component({
  selector: 'similar-course-details',
  templateUrl: './similar-course-details.component.html',
  styleUrl: './similar-course-details.component.css'
})
export class SimilarCourseDetailsComponent {
  isNightMode = false;
  constructor(private dataService: CustomizeService) {

  }
  // ngOnInit() {
  //   let storedNightMode = localStorage.getItem('nightMode');
  //   this.isNightMode = storedNightMode ? JSON.parse(storedNightMode) : false;
  //   alert(storedNightMode )
  // }
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe((res) => {
      this.isNightMode = res;
      console.log(this.isNightMode)
    });
  }
}
