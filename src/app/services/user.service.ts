import { Injectable, OnInit } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root',
  })
export class UserService implements OnInit {

    private users: User[] = [];

    constructor() { }
  
    ngOnInit(): void {
    }

    public initialize(): void {
        this.users.push(new User(0, 'Alex@gmail.com', 'Alex123', 'Alex', 'Allison', false));
        this.users.push(new User(1, 'Nathanial@gmail.com', 'Nathanial123', 'Nathanial', 'Cruz', false));
        this.users.push(new User(2, 'Miah@gmail.com', 'Miah123', 'Miah', 'Werner', false));
        this.users.push(new User(3, 'Cullen@gmail.com', 'Cullen123', 'Cullen', 'Roberts', false));
        this.users.push(new User(4, 'Marilyn@gmail.com', 'Marilyn123', 'Marilyn', 'Delacruz', false));
        this.users.push(new User(5, 'Roy@gmail.com', 'Roy123', 'Roy', 'Peterson', false));
        this.users.push(new User(6, 'Bronson@gmail.com', 'Bronson123', 'Bronson', 'Shields', false));
        this.users.push(new User(0, 'Alex@gmail.com', 'Alex123', 'Alex', 'Allison', false));
        this.users.push(new User(1, 'Nathanial@gmail.com', 'Nathanial123', 'Nathanial', 'Cruz', false));
        this.users.push(new User(2, 'Miah@gmail.com', 'Miah123', 'Miah', 'Werner', false));
        this.users.push(new User(3, 'Cullen@gmail.com', 'Cullen123', 'Cullen', 'Roberts', false));
        this.users.push(new User(4, 'Marilyn@gmail.com', 'Marilyn123', 'Marilyn', 'Delacruz', false));
        this.users.push(new User(5, 'Roy@gmail.com', 'Roy123', 'Roy', 'Peterson', false));
        this.users.push(new User(6, 'Bronson@gmail.com', 'Bronson123', 'Bronson', 'Shields', false));
        this.users.push(new User(0, 'Alex@gmail.com', 'Alex123', 'Alex', 'Allison', false));
        this.users.push(new User(1, 'Nathanial@gmail.com', 'Nathanial123', 'Nathanial', 'Cruz', false));
        this.users.push(new User(2, 'Miah@gmail.com', 'Miah123', 'Miah', 'Werner', false));
        this.users.push(new User(3, 'Cullen@gmail.com', 'Cullen123', 'Cullen', 'Roberts', false));
        this.users.push(new User(4, 'Marilyn@gmail.com', 'Marilyn123', 'Marilyn', 'Delacruz', false));
        this.users.push(new User(5, 'Roy@gmail.com', 'Roy123', 'Roy', 'Peterson', false));
        this.users.push(new User(6, 'Bronson@gmail.com', 'Bronson123', 'Bronson', 'Shields', false));
        console.log('loaded users');
    }

    public getByLoginInformation(email: string, password: string): User | null {
        let user = this.users.find(x => x.email?.toUpperCase() === email.toUpperCase() && x.password === password);
        if (user === undefined){
            return null;
        }
        return user;
    }

    public getById(id: number): User | null {
        let user = this.users.find(x => x.id === id);
        if (user === undefined){
            return null;
        }
        return user;
    }

    public getAll(): User[] {
        return this.users;
    }

    public add(newUser: User): void {
        this.users.push(newUser);
    }

    public remove(id: number): void {
        let user = this.users.find(x => x.id === id);

        if (user === undefined){
            return;
        }

        const index: number = this.users.indexOf(user);
        if (index !== -1) {
            this.users.splice(index, 1);
        }        
    }

    public setTraining(): void{
        console.log('Set training for user')
    }
  
  }