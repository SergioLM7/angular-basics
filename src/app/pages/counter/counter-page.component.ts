import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter-page.component.html',
    styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
    public counter:number= 10;
    counterSignal = signal(10);

    increasedBy(value:number) {
        this.counter += value;
        this.counterSignal.update( current => current + value );
    }

    resetCounter() {
        this.counter = 0;
        this.counterSignal.set(0);
    }
}