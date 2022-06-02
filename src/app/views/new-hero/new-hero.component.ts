import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IHero } from 'src/app/models/hero';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {
hero!:IHero;
form!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required],
      abilities: this.fb.array([], Validators.required)
    });
  }
  get abilities(): FormArray {
    return this.form.controls['abilities'] as FormArray;
  }

  newAbility(): FormGroup {
    return this.fb.group({
      ability: ['', Validators.required]
    });
  }

  addAbility(): void {
    this.abilities.push(this.newAbility());
  }

  deleteAbility(index: number): void {
    this.abilities.removeAt(index);
  }

 


addHero():any{
  this.hero = {
      id: 0,
      name: this.form.value.name,
      imageUrl: this.form.value.imageUrl,
      abilities: this.form.value.abilities.map((lista: any) => lista.ability)
    };
    this.form.reset();
  this.abilities.controls = [];   

  }

}
