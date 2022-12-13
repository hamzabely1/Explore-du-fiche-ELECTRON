export class Task {
    label:string;
    done:boolean = false;

    constructor(label:string){
        this.label = label;
    }
    
    toggle(): void {
        this.done = !this.done;
    }
}
