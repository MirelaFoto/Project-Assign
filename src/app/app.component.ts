import { Component } from '@angular/core';
import { IHero } from './models/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string="Born to be hero"
hero: IHero={
id:1,
name:'Batman',
imageUrl:"../assets/batman.jpg",
abilities:['Abilita', 'Intimidazione', 'Intelleto', 'Arti Marziali', 'Armi tecnologiche']
  
}
showPhrase(frase:string){
alert(frase)

}
}
