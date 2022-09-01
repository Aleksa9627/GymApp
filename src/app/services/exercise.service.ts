import { Injectable, OnInit } from "@angular/core";
import { Exercise } from "../models/exercise.model";

@Injectable()
export class ExerciseService implements OnInit {

    private exercises: Exercise[] = [];

    constructor() { }
  
    ngOnInit(): void {
    }

    public initialize(): void {

    }

    public getById(id: number): Exercise | null {
        let exercise = this.exercises.find(x => x.id === id);
        if (exercise === undefined){
            return null;
        }
        return exercise;
    }

    public getAll(): Exercise[] {
        return this.exercises;
    }

    public add(newExercise: Exercise): void {
        this.exercises.push(newExercise);
    }

    public remove(id: number): void {
        let exercise = this.exercises.find(x => x.id === id);

        if (exercise === undefined){
            return;
        }

        const index: number = this.exercises.indexOf(exercise);
        if (index !== -1) {
            this.exercises.splice(index, 1);
        }        
    }
}