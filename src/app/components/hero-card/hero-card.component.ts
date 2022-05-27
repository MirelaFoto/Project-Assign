import { Component, Input, OnInit, Output } from '@angular/core';
import { IHero } from 'src/app/models/hero';
import { EventEmitter } from '@angular/core';
import { HeroPhraseGeneratorService} from 'src/app/services/hero-phrase-generator-service.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  constructor(private heroService: HeroPhraseGeneratorService) { }

  ngOnInit(): void {
  }
  @Input() hero!:IHero;

  @Output() phrases: EventEmitter<string> = new EventEmitter<string> ();

  randomFr():void{
    
    this.phrases.emit(this.heroService.randomFr())
    }

}
