import { Injectable, OnInit } from "@angular/core";
import { User } from "../models/user.model";

@Injectable()
export class UserService implements OnInit {

    private users: User[] = [];

    constructor() { }
  
    ngOnInit(): void {
    }

    public loadInitialUsers(): void {
        this.users.push(new User(0, 'Alex@gmail.com', 'Alex123', 'Alex', 'Allison'));
        this.users.push(new User(1, 'Nathanial@gmail.com', 'Nathanial123', 'Nathanial', 'Cruz'))
        this.users.push(new User(2, 'Miah@gmail.com', 'Miah123', 'Miah', 'Werner'))
        this.users.push(new User(3, 'Cullen@gmail.com', 'Cullen123', 'Cullen', 'Roberts'))
        this.users.push(new User(4, 'Marilyn@gmail.com', 'Marilyn123', 'Marilyn', 'Delacruz'))
        this.users.push(new User(5, 'Roy@gmail.com', 'Roy123', 'Roy', 'Peterson'))
        this.users.push(new User(6, 'Bronson@gmail.com', 'Bronson123', 'Bronson', 'Shields'))
    }

    public getUserByEmail(): void {

    }

    public getUserById(): void {

    }

    public getAll(): void {

    }

    public add(): void {
        console.log('Add user')
    }

    public remove(): void {
        console.log('Remove user')
    }

    public setTraining(): void{
        console.log('Set training for user')
    }
  
  }