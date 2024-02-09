import { Component,EventEmitter, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CustomizeService } from '../../customize/customize.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() nightModeChanged = new EventEmitter<boolean>();
  constructor(private dataService: CustomizeService) {
    const storedNightMode = localStorage.getItem('nightMode');
    this.isNightMode = storedNightMode ? JSON.parse(storedNightMode) : false;
  }
  isNightMode = false;

  toggleNightMode() {
    this.isNightMode = !this.isNightMode;
    // this.nightModeChanged.emit(this.isNightMode);
    // localStorage.setItem('nightMode', JSON.stringify(this.isNightMode));
    this.dataService.changeMessage(this.isNightMode);
  }
ngOnInit() {
  this.toggleNightMode()
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
    margin: 15,
    dots: false,
    items: 100,
    autoWidth:true,
    lazyLoad: true,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 6,
        autoWidth:false
      },
      940: {
        items: 40,
        autoWidth:false
      },
      1300: {
        items: 30,
        autoWidth:true,
        margin: 10,
      }
    },
    nav: true
  }
show_menus:boolean=false;
  mobile_menus(){
    this.show_menus = !this.show_menus;
  }
  close_btn(){
    this.show_menus = false;
  }






}
