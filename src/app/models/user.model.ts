export class User {

    id?: number;
    email?: string;
    password?: string;
    name?: string;
    lastName?: string;
    isAdmin?: boolean;

    constructor(id?: number, email?: string, password?: string, name?: string, lastName?: string, isAdmin?: boolean){
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
        this.isAdmin = isAdmin;
    }
  }