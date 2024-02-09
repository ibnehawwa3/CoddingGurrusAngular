import { Component } from '@angular/core';
import { CustomizeService } from '../../../../customize/customize.service';

@Component({
  selector: 'app-my-threads',
  templateUrl: './my-threads.component.html',
  styleUrl: './my-threads.component.css'
})
export class MyThreadsComponent {
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



    let dropdownmy_threads:any = document.getElementById('dropboxmy_threads')
    let selectBoxmy_threads = dropdownmy_threads.querySelector('select.select-boxmy_threads')
    const selectionmy_threads:any = document.getElementById('selected_titlemy_threads')

    dropdownmy_threads.addEventListener('click', (e:any) => {

      console.log("selected value: "+selectBoxmy_threads.value)

      const dropList = dropdownmy_threads.querySelector('ul.list-itemsmy_threads')
      if(dropList.classList.contains('open')){
        dropList.classList.remove('open')
      }else{
        dropList.classList.add('open')
      }
      if(e.target.localName=='li' && e.target.dataset.value){
        console.log(e.target.dataset.value)
        selectBoxmy_threads.value = e.target.dataset.value
        console.log(selectBoxmy_threads.value)
        selectionmy_threads.innerHTML = e.target.innerHTML
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



     let dropdownmy_threads_category:any = document.getElementById('dropboxmy_threads_category')
     let selectBoxmy_threads_category = dropdownmy_threads_category.querySelector('select.select-boxmy_threads_category')
     const selectionmy_threads_category:any = document.getElementById('selected_titlemy_threads_category')

     dropdownmy_threads_category.addEventListener('click', (e:any) => {

       console.log("selected value: "+selectBoxmy_threads_category.value)

       const dropListmy_threads_category = dropdownmy_threads_category.querySelector('ul.list-itemsmy_threads_category')
       if(dropListmy_threads_category.classList.contains('open')){
         dropListmy_threads_category.classList.remove('open')
       }else{
         dropListmy_threads_category.classList.add('open')
       }
       if(e.target.localName=='li' && e.target.dataset.value){
         console.log(e.target.dataset.value)
         selectBoxmy_threads_category.value = e.target.dataset.value
         console.log(selectBoxmy_threads_category.value)
         selectionmy_threads_category.innerHTML = e.target.innerHTML
         dynamicListItemChanges(dropListmy_threads_category, e.target)
       }
     })

     const dynamicListItemChangesmy_threads_category = (listItemsmy_threads_category:any, selectedItemmy_threads_category:any) => {
       for(let i = 0;i<listItemsmy_threads_category.children.length;i++){
         let li = listItemsmy_threads_category.children.item(i)
         if(li) li.classList.remove('active')
       }
       selectedItemmy_threads_category.classList.add('active')
     }



//-short


let dropdown_short_my_th:any = document.getElementById('dropbox-short_my_th')
let selectBox_short_my_th = dropdown_short_my_th.querySelector('select.select-box-short_my_th')
const selection_short_my_th:any = document.getElementById('selected_title-short_my_th')

dropdown_short_my_th.addEventListener('click', (e:any) => {

  console.log("selected value: "+selectBox_short_my_th.value)

  const dropList_short_my_th = dropdown_short_my_th.querySelector('ul.list-items-short_my_th')
  if(dropList_short_my_th.classList.contains('open')){
    dropList_short_my_th.classList.remove('open')
  }else{
    dropList_short_my_th.classList.add('open')
  }
  if(e.target.localName=='li' && e.target.dataset.value){
    console.log(e.target.dataset.value)
    selectBox_short_my_th.value = e.target.dataset.value
    console.log(selectBox_short_my_th.value)
    selection_short_my_th.innerHTML = e.target.innerHTML
    dynamicListItemChanges(dropList_short_my_th, e.target)
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
