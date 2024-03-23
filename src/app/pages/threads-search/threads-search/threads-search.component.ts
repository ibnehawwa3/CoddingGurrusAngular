import { Component, ViewChild } from '@angular/core';
import { CustomizeService } from '../../../customize/customize.service';
import { ThreadsForSearchComponent } from '../sections/threads-for-search/threads-for-search.component';

@Component({
  selector: 'app-threads-search',
  templateUrl: './threads-search.component.html',
  styleUrl: './threads-search.component.css'
})
export class ThreadsSearchComponent {
  isNightMode = false;
  @ViewChild(ThreadsForSearchComponent) threadsForSearchComponent: ThreadsForSearchComponent;
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
  
  byViewMoreClick()
  {
   this.threadsForSearchComponent.papolateThreadSearch();
  }
}
