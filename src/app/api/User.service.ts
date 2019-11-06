import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
@Injectable()
export class UserService {
    getAll(): User[] {
        return [
            new User('Mrs', 'Tamara', 'Kucherenko', 'tom.kuch.2000@gmail.com', 'abcdefg576'),
            new User('Mrs', 'Ann', 'GHUUJJN', 'Ann@gmail.com', 'abcdefg576')
        ];
    }
}
