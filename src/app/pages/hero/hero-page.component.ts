import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
    templateUrl: './hero-page.component.html',
    //styleUrl: './hero-page.component.css'
    imports: [ UpperCasePipe ],
})
export class HeroPageComponent {

    name = signal('Ironman');
    age = signal(45);

    nameUpperCase = computed(() => {
       return this.name().toUpperCase();
      });

    heroDescription = computed(() => {
        return `${this.name()} - ${this.age()}`
    });

    changeHero() {
        this.name.update(current => 'Spiderman');
        this.age.update(currente => 22);
    }

    resetForm() {
        this.name.update(current => 'Ironman');
        this.age.update(current => 45); 
    }

    changeAge() {
        this.age.update(current => 60);
    }

}