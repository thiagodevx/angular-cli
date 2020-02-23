import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any[];
  hasPermission = false;
  constructor() { }

  ngOnInit() {
    if (this.hasPermission) {
      this.getUsers().then(users => this.users = users)
        .catch(error => console.log(error));
    }
  }
  async getUsers(): Promise<any> {
    return [
      {name: 'john', email: 'john@angular.com'},
      {name: 'colleen', email: 'colleen@angular.com'}
    ];
  }

}
