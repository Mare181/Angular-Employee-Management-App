import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.onPostCredentials();
  }
  onPostCredentials(): void{
    this.userService.postCredentials();
  }
}
