import { ExerciseAssignedToTraining } from "./exerciseAssignedToTraining.model";

export class Training {

    id?: number;
    userId?: number;
    name?: string;
    day?: string;
    ExercisesAssignedToTraining?: ExerciseAssignedToTraining[] = [];

    constructor(id?: number, userId?: number, name?: string, day?: string){
     this.id = id;
     this.userId = userId;
     this.name = name;
     this.day = day;
    }
}