import { Component } from '@angular/core';
import { CustomizeService } from '../../../customize/customize.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrl: './threads.component.css'
})
export class ThreadsComponent {
  title = 'the-coding-gurus';
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
