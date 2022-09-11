import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User =  {
    'FirstName': 'Testni',
    'LastName': 'User',
    'FullName':'Testni User',
    'Email': 'testni@user.com',
  };

  constructor(private userService: UsersService) {}

  columns = ['First Name', 'Last Name', 'Full Name', 'Email'];
  users : User[] = [];

  ngOnInit(): void {
    this.onPostCredentials();
  }
  onPostCredentials(): void{
    this.userService.postCredentials();
  }

  onGetUsers(): void{
    this.userService.getUsers().subscribe(
      //(response) => console.table(response),
      (response)=>{
        this.users = response;
      },
      (error: any) => console.log(error),
      //() => console.log('Done getting users')
    );
  }

  onCreateUser(): void{
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating user')
    );
    this.onGetUsers();
  }
}
