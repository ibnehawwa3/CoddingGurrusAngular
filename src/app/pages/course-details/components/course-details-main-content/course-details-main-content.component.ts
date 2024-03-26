import { Component, Input } from '@angular/core';
import { CustomizeService } from '../../../../customize/customize.service';
import { ClipboardService } from 'ngx-clipboard';
interface Item {
  question: any;
  answer: any;
  expanded: boolean; // Add this property
}
@Component({
  selector: 'course-details-main-content',
  templateUrl: './course-details-main-content.component.html',
  styleUrl: './course-details-main-content.component.css'
})

export class CourseDetailsMainContentComponent {
  isNightMode = false;
  @Input() content:any;
  constructor(private dataService: CustomizeService,private _clipboardService: ClipboardService) {

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

  items = [
    { question: 'What is Data Structure?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).,',expanded:false },
    { question: 'How to start learning algorithms?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',expanded:false },
    // Add more FAQ items as needed
  ];
get_data:Item|undefined|null;
  toggleAccordion(item: {question:any;answer:any; expanded: boolean; }) {
    item.expanded = !item.expanded;
  }
  copyText(){
    let tooltip:any = document.getElementsByClassName("copy_tool_tip");
    tooltip[0].innerText="Copied!";
    let text_copys:any = document.getElementsByClassName("copy_txt");
    let element = text_copys[0].innerText;
    //this.clipboardService.copy(textToCopy);
    this._clipboardService.copy(element);

  }

}
