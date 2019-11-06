export class User {
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    constructor(title?: string, firstName?: string, lastName?: string, email?: string, password?: string) {
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}
