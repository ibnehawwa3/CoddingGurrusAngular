import { Component } from '@angular/core';
import { CustomizeService } from '../../../../customize/customize.service';

@Component({
  selector: 'search-massive-community',
  templateUrl: './search-massive-community.component.html',
  styleUrl: './search-massive-community.component.css'
})
export class SearchMassiveCommunityComponent {
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
