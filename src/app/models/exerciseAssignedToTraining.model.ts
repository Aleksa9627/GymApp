export class ExerciseAssignedToTraining {
    id?: number;
    exerciseId?: number;
    reps?: number;
    sets?: number;
    rpe?: number;
    weight?: number;
    trainerComment?: string;

    constructor(id?: number, exerciseId?: number, reps?: number, sets?: number, rpe?: number, weight?: number, trainerComment?: string){
        this.id = id;
        this.exerciseId = exerciseId;
        this.reps = reps;
        this.sets = sets;
        this.rpe = rpe;
        this.weight = weight;
        this.trainerComment = trainerComment;
       }
}