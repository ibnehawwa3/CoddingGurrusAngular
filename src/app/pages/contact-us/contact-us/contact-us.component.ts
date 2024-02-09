import { Component } from '@angular/core';
import { CustomizeService } from '../../../customize/customize.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
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
