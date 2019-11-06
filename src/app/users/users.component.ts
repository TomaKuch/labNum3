import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../api/User.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users: User[] = [];
  count = 0;
  constructor(private usersService: UserService) {
  }

  ngOnInit() {
     this.users = this.usersService.getAll();
  }

  addUser(user: User) {
    this.users[this.count++] = user;
  }
}
