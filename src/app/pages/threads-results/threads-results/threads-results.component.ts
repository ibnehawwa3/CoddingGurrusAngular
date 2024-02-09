import { Component } from '@angular/core';
import { CustomizeService } from '../../../customize/customize.service';

@Component({
  selector: 'app-threads-results',
  templateUrl: './threads-results.component.html',
  styleUrl: './threads-results.component.css'
})
export class ThreadsResultsComponent {
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

  //  location.reload()






  let dropdown3:any = document.getElementById('dropbox3')
  let selectBox3 = dropdown3.querySelector('select.select-box3')
  const selection3:any = document.getElementById('selected_title3')

  dropdown3.addEventListener('click', (e:any) => {

    console.log("selected value: "+selectBox3.value)

    const dropList = dropdown3.querySelector('ul.list-items3')
    if(dropList.classList.contains('open')){
      dropList.classList.remove('open')
    }else{
      dropList.classList.add('open')
    }
    if(e.target.localName=='li' && e.target.dataset.value){
      console.log(e.target.dataset.value)
      selectBox3.value = e.target.dataset.value
      console.log(selectBox3.value)
      selection3.innerHTML = e.target.innerHTML
      dynamicListItemChanges(dropList, e.target)
    }
  })

  const dynamicListItemChanges = (listItems:any, selectedItem:any) => {
    for(let i = 0;i<listItems.children.length;i++){
      let li = listItems.children.item(i)
      if(li) li.classList.remove('active')
    }
    selectedItem.classList.add('active')
  }




   //category



   let dropdown4:any = document.getElementById('dropbox4')
   let selectBox4 = dropdown4.querySelector('select.select-box4')
   const selection4:any = document.getElementById('selected_title4')

   dropdown4.addEventListener('click', (e:any) => {

     console.log("selected value: "+selectBox4.value)

     const dropList4 = dropdown4.querySelector('ul.list-items4')
     if(dropList4.classList.contains('open')){
       dropList4.classList.remove('open')
     }else{
       dropList4.classList.add('open')
     }
     if(e.target.localName=='li' && e.target.dataset.value){
       console.log(e.target.dataset.value)
       selectBox4.value = e.target.dataset.value
       console.log(selectBox4.value)
       selection4.innerHTML = e.target.innerHTML
       dynamicListItemChanges(dropList4, e.target)
     }
   })

   const dynamicListItemChanges4 = (listItems4:any, selectedItem4:any) => {
     for(let i = 0;i<listItems4.children.length;i++){
       let li = listItems4.children.item(i)
       if(li) li.classList.remove('active')
     }
     selectedItem4.classList.add('active')
   }
//-short


let dropdown_short:any = document.getElementById('dropbox-short')
let selectBox_short = dropdown_short.querySelector('select.select-box-short')
const selection_short:any = document.getElementById('selected_title-short')

dropdown_short.addEventListener('click', (e:any) => {

  console.log("selected value: "+selectBox_short.value)

  const dropList_short = dropdown_short.querySelector('ul.list-items-short')
  if(dropList_short.classList.contains('open')){
    dropList_short.classList.remove('open')
  }else{
    dropList_short.classList.add('open')
  }
  if(e.target.localName=='li' && e.target.dataset.value){
    console.log(e.target.dataset.value)
    selectBox_short.value = e.target.dataset.value
    console.log(selectBox_short.value)
    selection_short.innerHTML = e.target.innerHTML
    dynamicListItemChanges(dropList_short, e.target)
  }
})

const dynamicListItemChanges_short = (listItems_short:any, selectedItem_short:any) => {
  for(let i = 0;i<listItems_short.children.length;i++){
    let li = listItems_short.children.item(i)
    if(li) li.classList.remove('active')
  }
  selectedItem_short.classList.add('active')
}
  }
}
