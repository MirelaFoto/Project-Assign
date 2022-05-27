import { Component, Input, OnInit } from '@angular/core';
import { IHero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() hero!:IHero

}
