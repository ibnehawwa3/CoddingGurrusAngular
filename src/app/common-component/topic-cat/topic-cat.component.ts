import { Component } from '@angular/core';
import { CustomizeService } from '../../customize/customize.service';

@Component({
  selector: 'topic-cat',
  templateUrl: './topic-cat.component.html',
  styleUrl: './topic-cat.component.css'
})
export class TopicCatComponent {
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

  let dropdown:any = document.getElementById('dropbox')
  let selectBox = dropdown.querySelector('select.select-box')
  const selection:any = document.getElementById('selected_title')

  dropdown.addEventListener('click', (e:any) => {

    console.log("selected value: "+selectBox.value)

    const dropList = dropdown.querySelector('ul.list-items')
    if(dropList.classList.contains('open')){
      dropList.classList.remove('open')
    }else{
      dropList.classList.add('open')
    }
    if(e.target.localName=='li' && e.target.dataset.value){
      console.log(e.target.dataset.value)
      selectBox.value = e.target.dataset.value
      console.log(selectBox.value)
      selection.innerHTML = e.target.innerHTML
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



   let dropdown2:any = document.getElementById('dropbox2')
   let selectBox2 = dropdown2.querySelector('select.select-box2')
   const selection2:any = document.getElementById('selected_title2')

   dropdown2.addEventListener('click', (e:any) => {

     console.log("selected value: "+selectBox2.value)

     const dropList2 = dropdown2.querySelector('ul.list-items2')
     if(dropList2.classList.contains('open')){
       dropList2.classList.remove('open')
     }else{
       dropList2.classList.add('open')
     }
     if(e.target.localName=='li' && e.target.dataset.value){
       console.log(e.target.dataset.value)
       selectBox2.value = e.target.dataset.value
       console.log(selectBox2.value)
       selection2.innerHTML = e.target.innerHTML
       dynamicListItemChanges(dropList2, e.target)
     }
   })

   const dynamicListItemChanges2 = (listItems2:any, selectedItem2:any) => {
     for(let i = 0;i<listItems2.children.length;i++){
       let li = listItems2.children.item(i)
       if(li) li.classList.remove('active')
     }
     selectedItem2.classList.add('active')
   }
}
}
