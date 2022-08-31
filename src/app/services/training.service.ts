import { Injectable, OnInit } from "@angular/core";
import { Training } from "../models/training.model";

@Injectable()
export class TrainingService implements OnInit {

    private trainings: Training[] = [];

    constructor() { }
  
    ngOnInit(): void {
    }

    public initialize(): void {

    }

    public getById(id: number): Training | null {
        let training = this.trainings.find(x => x.id === id);
        if (training === undefined){
            return null;
        }
        return training;
    }

    public getAll(): Training[] {
        return this.trainings;
    }

    public add(newTraining: Training): void {
        this.trainings.push(newTraining);
    }

    public remove(id: number): void {
        let training = this.trainings.find(x => x.id === id);

        if (training === undefined){
            return;
        }

        const index: number = this.trainings.indexOf(training);
        if (index !== -1) {
            this.trainings.splice(index, 1);
        }        
    }
}