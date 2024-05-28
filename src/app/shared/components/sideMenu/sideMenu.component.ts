import {  Component } from '@angular/core';


interface MenuItem {
  title:string,
  route:string
}


@Component({
  selector: 'shared-side-menu',
  templateUrl:'sideMenu.component.html' ,
})
export class SideMenuComponent {

  public reactiveMennu: MenuItem[] = [
    {title: 'Basicos' , route:'./reactive/basic'},
    {title: 'Dinamicos' , route:'./reactive/dynamic'},
    {title: 'Swithches' , route:'./reactive/switches'}
  ]

  public authMenu: MenuItem[] = [
    {title: 'registrar' , route:'./auth/'},
    
  ]




}
