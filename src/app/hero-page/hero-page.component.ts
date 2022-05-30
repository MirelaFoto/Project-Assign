import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IHero } from '../models/hero';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent implements OnInit {
  hero: IHero={
    id:1,
    name:'Batman',
    imageUrl:"../assets/batman.jpg",
    abilities:['Abilita', 'Intimidazione', 'Intelleto', 'Arti Marziali', 'Armi tecnologiche']
      
    }
    
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
showList(id:number):void{
this.router.navigate(['todo-page'])
}
showPhrase(frase:string){
  alert(frase)
  
  }
}
