import { Component } from '@angular/core';
import { CustomizeService } from '../../../customize/customize.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-threads',
  templateUrl: './create-threads.component.html',
  styleUrl: './create-threads.component.css'
})
export class CreateThreadsComponent {
  isNightMode = false;
  constructor(private dataService: CustomizeService) {

  }
  public editor = ClassicEditor;
  public title: string = '';
  public description: string = '';
  public editorData = '<p>Initial content</p>';
  public editorConfig = {
    toolbar: ['heading', '|', 'bold', 'italic','underline', 'link', 'bulletedList', 'numberedList', 'blockQuote',
     '|', 'undo', 'redo',
  ],
    // your configuration options
  };

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





    let dropdowncreate_threads_data_str:any = document.getElementById('dropboxcreate_threads_data_str')
    let selectBoxcreate_threads_data_str = dropdowncreate_threads_data_str.querySelector('select.select-boxcreate_threads_data_str')
    const selectioncreate_threads_data_str:any = document.getElementById('selected_titlecreate_threads_data_str')

    dropdowncreate_threads_data_str.addEventListener('click', (e:any) => {

      console.log("selected value: "+selectBoxcreate_threads_data_str.value)

      const dropList = dropdowncreate_threads_data_str.querySelector('ul.list-itemscreate_threads_data_str')
      if(dropList.classList.contains('open')){
        dropList.classList.remove('open')
      }else{
        dropList.classList.add('open')
      }
      if(e.target.localName=='li' && e.target.dataset.value){
        console.log(e.target.dataset.value)
        selectBoxcreate_threads_data_str.value = e.target.dataset.value
        console.log(selectBoxcreate_threads_data_str.value)
        selectioncreate_threads_data_str.innerHTML = e.target.innerHTML
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



     let dropdowncreate_threads_data_str_category:any = document.getElementById('dropboxcreate_threads_data_str_category')
     let selectBoxcreate_threads_data_str_category = dropdowncreate_threads_data_str_category.querySelector('select.select-boxcreate_threads_data_str_category')
     const selectioncreate_threads_data_str_category:any = document.getElementById('selected_titlecreate_threads_data_str_category')

     dropdowncreate_threads_data_str_category.addEventListener('click', (e:any) => {

       console.log("selected value: "+selectBoxcreate_threads_data_str_category.value)

       const dropListcreate_threads_data_str_category = dropdowncreate_threads_data_str_category.querySelector('ul.list-itemscreate_threads_data_str_category')
       if(dropListcreate_threads_data_str_category.classList.contains('open')){
         dropListcreate_threads_data_str_category.classList.remove('open')
       }else{
         dropListcreate_threads_data_str_category.classList.add('open')
       }
       if(e.target.localName=='li' && e.target.dataset.value){
         console.log(e.target.dataset.value)
         selectBoxcreate_threads_data_str_category.value = e.target.dataset.value
         console.log(selectBoxcreate_threads_data_str_category.value)
         selectioncreate_threads_data_str_category.innerHTML = e.target.innerHTML
         dynamicListItemChanges(dropListcreate_threads_data_str_category, e.target)
       }
     })

     const dynamicListItemChangescreate_threads_data_str_category = (listItemscreate_threads_data_str_category:any, selectedItemcreate_threads_data_str_category:any) => {
       for(let i = 0;i<listItemscreate_threads_data_str_category.children.length;i++){
         let li = listItemscreate_threads_data_str_category.children.item(i)
         if(li) li.classList.remove('active')
       }
       selectedItemcreate_threads_data_str_category.classList.add('active')
     }








  }
}
