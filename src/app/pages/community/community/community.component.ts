import { Component } from '@angular/core';
import { CustomizeService } from '../../../customize/customize.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {
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
   // location.reload()


   let dropdowncmm:any = document.getElementById('dropboxcmm')
   let selectBoxcmm = dropdowncmm.querySelector('select.select-boxcmm')
   const selectioncmm:any = document.getElementById('selected_titlecmm')

   dropdowncmm.addEventListener('click', (e:any) => {

     console.log("selected value: "+selectBoxcmm.value)

     const dropListcmm = dropdowncmm.querySelector('ul.list-itemscmm')
     if(dropListcmm.classList.contains('open')){
       dropListcmm.classList.remove('open')
     }else{
       dropListcmm.classList.add('open')
     }
     if(e.target.localName=='li' && e.target.dataset.value){
       console.log(e.target.dataset.value)
       selectBoxcmm.value = e.target.dataset.value
       console.log(selectBoxcmm.value)
       selectioncmm.innerHTML = e.target.innerHTML
       dynamicListItemChanges(dropListcmm, e.target)
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



    let dropdowncm:any = document.getElementById('dropboxcm')
    let selectBoxcm = dropdowncm.querySelector('select.select-boxcm')
    const selectioncm:any = document.getElementById('selected_titlecm')

    dropdowncm.addEventListener('click', (e:any) => {

      console.log("selected value: "+selectBoxcm.value)

      const dropListcm = dropdowncm.querySelector('ul.list-itemscm')
      if(dropListcm.classList.contains('open')){
        dropListcm.classList.remove('open')
      }else{
        dropListcm.classList.add('open')
      }
      if(e.target.localName=='li' && e.target.dataset.value){
        console.log(e.target.dataset.value)
        selectBoxcm.value = e.target.dataset.value
        console.log(selectBoxcm.value)
        selectioncm.innerHTML = e.target.innerHTML
        dynamicListItemChanges(dropListcm, e.target)
      }
    })

    const dynamicListItemChanges2 = (listItemscm:any, selectedItemcm:any) => {
      for(let i = 0;i<listItemscm.children.length;i++){
        let li = listItemscm.children.item(i)
        if(li) li.classList.remove('active')
      }
      selectedItemcm.classList.add('active')
    }
  }



}
