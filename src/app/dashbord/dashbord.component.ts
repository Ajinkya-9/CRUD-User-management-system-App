import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  p: Number = 1;
  Users: any;
  editableUser: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.showData();
  }

  showEditModel(user) {
    this.editableUser = user;
    console.log(this.editableUser);
  }

  createUser(createUserForm) {
    console.log('data is couming' + JSON.stringify(this.editableUser));
    this.userService.editeUserData(createUserForm, this.editableUser.id).subscribe((data: any) => {
      console.log('data edited sucessfull' + JSON.stringify(data));
      this.showData();
    });
  }



  showData() {
    this.userService.getUserData().subscribe((data: any) => {
      this.Users = data;
      console.log(this.Users);
    });
  }

  deletUser(id) {
    console.log(id);
    this.userService.deletUser(id).subscribe((data: any) => {
      console.log('user is sucessfully deleated' + JSON.stringify(data));
      this.showData();
    });
  }


}
