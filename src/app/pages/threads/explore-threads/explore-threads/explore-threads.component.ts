import { Component } from '@angular/core';
import { CustomizeService } from '../../../../customize/customize.service';

@Component({
  selector: 'app-explore-threads',
  templateUrl: './explore-threads.component.html',
  styleUrl: './explore-threads.component.css'
})
export class ExploreThreadsComponent {
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


    let dropdownexplore_threads:any = document.getElementById('dropboxexplore_threads')
    let selectBoxexplore_threads = dropdownexplore_threads.querySelector('select.select-boxexplore_threads')
    const selectionexplore_threads:any = document.getElementById('selected_titleexplore_threads')

    dropdownexplore_threads.addEventListener('click', (e:any) => {

      console.log("selected value: "+selectBoxexplore_threads.value)

      const dropList = dropdownexplore_threads.querySelector('ul.list-itemsexplore_threads')
      if(dropList.classList.contains('open')){
        dropList.classList.remove('open')
      }else{
        dropList.classList.add('open')
      }
      if(e.target.localName=='li' && e.target.dataset.value){
        console.log(e.target.dataset.value)
        selectBoxexplore_threads.value = e.target.dataset.value
        console.log(selectBoxexplore_threads.value)
        selectionexplore_threads.innerHTML = e.target.innerHTML
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



     let dropdownexplore_threads_category:any = document.getElementById('dropboxexplore_threads_category')
     let selectBoxexplore_threads_category = dropdownexplore_threads_category.querySelector('select.select-boxexplore_threads_category')
     const selectionexplore_threads_category:any = document.getElementById('selected_titleexplore_threads_category')

     dropdownexplore_threads_category.addEventListener('click', (e:any) => {

       console.log("selected value: "+selectBoxexplore_threads_category.value)

       const dropListexplore_threads_category = dropdownexplore_threads_category.querySelector('ul.list-itemsexplore_threads_category')
       if(dropListexplore_threads_category.classList.contains('open')){
         dropListexplore_threads_category.classList.remove('open')
       }else{
         dropListexplore_threads_category.classList.add('open')
       }
       if(e.target.localName=='li' && e.target.dataset.value){
         console.log(e.target.dataset.value)
         selectBoxexplore_threads_category.value = e.target.dataset.value
         console.log(selectBoxexplore_threads_category.value)
         selectionexplore_threads_category.innerHTML = e.target.innerHTML
         dynamicListItemChanges(dropListexplore_threads_category, e.target)
       }
     })

     const dynamicListItemChangesexplore_threads_category = (listItemsexplore_threads_category:any, selectedItemexplore_threads_category:any) => {
       for(let i = 0;i<listItemsexplore_threads_category.children.length;i++){
         let li = listItemsexplore_threads_category.children.item(i)
         if(li) li.classList.remove('active')
       }
       selectedItemexplore_threads_category.classList.add('active')
     }



//-short


let dropdown_shortexplore_th:any = document.getElementById('dropbox-shortexplore_th')
let selectBox_shortexplore_th = dropdown_shortexplore_th.querySelector('select.select-box-shortexplore_th')
const selection_shortexplore_th:any = document.getElementById('selected_title-shortexplore_th')

dropdown_shortexplore_th.addEventListener('click', (e:any) => {

  console.log("selected value: "+selectBox_shortexplore_th.value)

  const dropList_shortexplore_th = dropdown_shortexplore_th.querySelector('ul.list-items-shortexplore_th')
  if(dropList_shortexplore_th.classList.contains('open')){
    dropList_shortexplore_th.classList.remove('open')
  }else{
    dropList_shortexplore_th.classList.add('open')
  }
  if(e.target.localName=='li' && e.target.dataset.value){
    console.log(e.target.dataset.value)
    selectBox_shortexplore_th.value = e.target.dataset.value
    console.log(selectBox_shortexplore_th.value)
    selection_shortexplore_th.innerHTML = e.target.innerHTML
    dynamicListItemChanges(dropList_shortexplore_th, e.target)
  }
})

const dynamicListItemChanges_shortexplore_th = (listItems_shortexplore_th:any, selectedItem_shortexplore_th:any) => {
  for(let i = 0;i<listItems_shortexplore_th.children.length;i++){
    let li = listItems_shortexplore_th.children.item(i)
    if(li) li.classList.remove('active')
  }
  selectedItem_shortexplore_th.classList.add('active')
}



















  }
}
