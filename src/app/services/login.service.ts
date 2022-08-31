import { OnInit } from "@angular/core";
import { User } from "../models/user.model";
import { UserService } from "./user.service";

export class LoginService implements OnInit {

    private loggedIn = false;
    private loggedInUser: User;

    constructor(private userService: UserService) {
        this.loggedInUser = new User();
     }
  
    ngOnInit(): void {
    }

    public login(email: string, password: string): boolean {
        const user = this.userService.getUserByLoginInformation(email, password);

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

    public userLoggedIn(): boolean{
        return this.loggedIn;
    }

    public userIsAdmin(): boolean{
        return (this.loggedInUser.isAdmin) ? true : false;  
    }
  }