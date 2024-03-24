import { Component, EventEmitter, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CustomizeService } from '../../customize/customize.service';
import { CommonService } from '../../shared/services/common-service';
import { ListeningParameter } from '../../shared/interfaces/response';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() nightModeChanged = new EventEmitter<boolean>();
  constructor(private dataService: CustomizeService, public commonService: CommonService) {
    const storedNightMode = localStorage.getItem('nightMode');
    this.isNightMode = storedNightMode ? JSON.parse(storedNightMode) : false;
  }
  isNightMode = false;
  courseList:any;
  listeningParameter: ListeningParameter={} as ListeningParameter;
  toggleNightMode() {
    this.isNightMode = !this.isNightMode;
    // this.nightModeChanged.emit(this.isNightMode);
    // localStorage.setItem('nightMode', JSON.stringify(this.isNightMode));
    this.dataService.changeMessage(this.isNightMode);
  }
  ngOnInit() {
    this.toggleNightMode();
    this.commonService.Get<any>(this.commonService.apiEndPoints.CourseListForSlider + `?take=${10}&skip=${1}`)
   .then(response => {
    console.log("call")
    console.log(response.data)

this.courseList = response.data;
})
.catch(error => {
console.error(error);
// Handle error gracefully
});
  }

  // id:any = 'grabbedblocks';
  // tapChange(ids:any){
  // this.id = ids;
  // this.dataService.changeMessage(this.id);
  // console.log(this.id)
  // }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    rtl: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    items: 20, // Default number of items
    autoWidth: false,
    lazyLoad: false,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],

    responsive: {
      0: {
        items: 10,
      },
      400: {
        items: 10,
      },
      740: {
        items: 10,
      },
      940: {
        items: 10,
      },
      1300: {
        items: 10,
      },
    },

    nav: true,
  };

  show_menus: boolean = false;
  mobile_menus() {
    this.show_menus = !this.show_menus;
  }
  close_btn() {
    this.show_menus = false;
  }
}
