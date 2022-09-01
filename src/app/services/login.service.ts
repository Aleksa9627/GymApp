import { Injectable, OnInit } from "@angular/core";
import { User } from "../models/user.model";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root',
})
export class LoginService implements OnInit {

    public loggedIn = false;
    public loggedInUser: User;

    constructor(private userService: UserService) {
        this.loggedInUser = new User();
    }
  
    ngOnInit(): void {
    }

    public login(email: string, password: string): boolean {
        const user = this.userService.getByLoginInformation(email, password);

        if (user !== null){
            this.loggedInUser = user;
            this.loggedIn = true;
        }

        return this.loggedIn;
    }

    public logout(): void {
        this.loggedIn = false;
        this.loggedInUser = new User();
    }
  }