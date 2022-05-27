import { Component, Input, OnInit, Output } from '@angular/core';
import { IHero } from 'src/app/models/hero';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() hero!:IHero;

  @Output() phrases: EventEmitter<string> = new EventEmitter<string> ();

  heroPhrase:string[]=[
    'It s not who I am underneath, but what I do that defines me',
    'He s the hero Gotham deserves, but not the one it needs right now',
    'Maybe that s what hero is about',
    'This city just showed you that its full of people ready to believe in good',
'I am the strongest of all'

  ]
randomFr():void{
const frase:number = Math.floor(Math.random() * this.heroPhrase.length) // generate the random phrase
this.phrases.emit(this.heroPhrase[frase])
}
}
