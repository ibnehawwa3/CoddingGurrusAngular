import { Component } from '@angular/core';
import { CustomizeService } from '../../../../customize/customize.service';

@Component({
  selector: 'app-bookmarked-threads',
  templateUrl: './bookmarked-threads.component.html',
  styleUrl: './bookmarked-threads.component.css'
})
export class BookmarkedThreadsComponent {
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










    let dropdownbookmark_threads:any = document.getElementById('dropboxbookmark_threads')
    let selectBoxbookmark_threads = dropdownbookmark_threads.querySelector('select.select-boxbookmark_threads')
    const selectionbookmark_threads:any = document.getElementById('selected_titlebookmark_threads')

    dropdownbookmark_threads.addEventListener('click', (e:any) => {

      console.log("selected value: "+selectBoxbookmark_threads.value)

      const dropList = dropdownbookmark_threads.querySelector('ul.list-itemsbookmark_threads')
      if(dropList.classList.contains('open')){
        dropList.classList.remove('open')
      }else{
        dropList.classList.add('open')
      }
      if(e.target.localName=='li' && e.target.dataset.value){
        console.log(e.target.dataset.value)
        selectBoxbookmark_threads.value = e.target.dataset.value
        console.log(selectBoxbookmark_threads.value)
        selectionbookmark_threads.innerHTML = e.target.innerHTML
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



     let dropdownbookmark_threads_category:any = document.getElementById('dropboxbookmark_threads_category')
     let selectBoxbookmark_threads_category = dropdownbookmark_threads_category.querySelector('select.select-boxbookmark_threads_category')
     const selectionbookmark_threads_category:any = document.getElementById('selected_titlebookmark_threads_category')

     dropdownbookmark_threads_category.addEventListener('click', (e:any) => {

       console.log("selected value: "+selectBoxbookmark_threads_category.value)

       const dropListbookmark_threads_category = dropdownbookmark_threads_category.querySelector('ul.list-itemsbookmark_threads_category')
       if(dropListbookmark_threads_category.classList.contains('open')){
         dropListbookmark_threads_category.classList.remove('open')
       }else{
         dropListbookmark_threads_category.classList.add('open')
       }
       if(e.target.localName=='li' && e.target.dataset.value){
         console.log(e.target.dataset.value)
         selectBoxbookmark_threads_category.value = e.target.dataset.value
         console.log(selectBoxbookmark_threads_category.value)
         selectionbookmark_threads_category.innerHTML = e.target.innerHTML
         dynamicListItemChanges(dropListbookmark_threads_category, e.target)
       }
     })

     const dynamicListItemChangesbookmark_threads_category = (listItemsbookmark_threads_category:any, selectedItembookmark_threads_category:any) => {
       for(let i = 0;i<listItemsbookmark_threads_category.children.length;i++){
         let li = listItemsbookmark_threads_category.children.item(i)
         if(li) li.classList.remove('active')
       }
       selectedItembookmark_threads_category.classList.add('active')
     }



//-short


let dropdown_shortbookmark_th:any = document.getElementById('dropbox-shortbookmark_th')
let selectBox_shortbookmark_th = dropdown_shortbookmark_th.querySelector('select.select-box-shortbookmark_th')
const selection_shortbookmark_th:any = document.getElementById('selected_title-shortbookmark_th')

dropdown_shortbookmark_th.addEventListener('click', (e:any) => {

  console.log("selected value: "+selectBox_shortbookmark_th.value)

  const dropList_shortbookmark_th = dropdown_shortbookmark_th.querySelector('ul.list-items-shortbookmark_th')
  if(dropList_shortbookmark_th.classList.contains('open')){
    dropList_shortbookmark_th.classList.remove('open')
  }else{
    dropList_shortbookmark_th.classList.add('open')
  }
  if(e.target.localName=='li' && e.target.dataset.value){
    console.log(e.target.dataset.value)
    selectBox_shortbookmark_th.value = e.target.dataset.value
    console.log(selectBox_shortbookmark_th.value)
    selection_shortbookmark_th.innerHTML = e.target.innerHTML
    dynamicListItemChanges(dropList_shortbookmark_th, e.target)
  }
})

const dynamicListItemChanges_shortbookmark_th = (listItems_shortbookmark_th:any, selectedItem_shortbookmark_th:any) => {
  for(let i = 0;i<listItems_shortbookmark_th.children.length;i++){
    let li = listItems_shortbookmark_th.children.item(i)
    if(li) li.classList.remove('active')
  }
  selectedItem_shortbookmark_th.classList.add('active')
}









  }
}
