import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroPhraseGeneratorService {

private  heroPhrase:string[]=[
    'It s not who I am underneath, but what I do that defines me',
    'He s the hero Gotham deserves, but not the one it needs right now',
    'Maybe that s what hero is about',
    'This city just showed you that its full of people ready to believe in good',
'I am the strongest of all'

  ]
  randomFr():string{
    const frase:number = Math.floor(Math.random() * this.heroPhrase.length) // generate the random phrase
    return this.heroPhrase[frase]
    }



  constructor() { }
}
