import { Component } from '@angular/core';
import { CustomizeService } from '../../customize/customize.service';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'common-editor',
  templateUrl: './common-editor.component.html',
  styleUrl: './common-editor.component.css'
})
export class CommonEditorComponent {
  title = 'the-coding-gurus';
  isNightMode = false;
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

  // copyText(){
  //   let tooltip:any = document.getElementsByClassName("copy_tool_tip");
  //   tooltip[1].innerText="Copied!";
  //   let text_copy:any = document.getElementsByClassName("copy_txt");
  //   let element = text_copy[1].innerText;
  //   //this.clipboardService.copy(textToCopy);
  //   this._clipboardService.copy(element);

  // }
  copyText() {
    // Find all elements with class "copy_tool_tip"
    let tooltips: HTMLCollectionOf<Element> = document.getElementsByClassName("copy_tool_tip");

    // Iterate through each element with class "copy_tool_tip"
    for (let i = 0; i < tooltips.length; i++) {
        let tooltip = tooltips[i] as HTMLElement;

        // Update the inner text of the tooltip
        tooltip.innerText = "Copied!";
    }

    // Find all elements with class "copy_txt"
    let textCopies: HTMLCollectionOf<Element> = document.getElementsByClassName("copy_txt");

    // Iterate through each element with class "copy_txt"
    for (let i = 0; i < textCopies.length; i++) {
        let textCopy = textCopies[i] as HTMLElement;

        // Get the text content of the element
        let elementText = textCopy.innerText;

        // Copy the text content to the clipboard
        this._clipboardService.copy(elementText);
    }
}
}
