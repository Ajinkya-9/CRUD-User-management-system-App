import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

createUser(data) {
console.log(data);
this.userService.postUserData(data).subscribe(( dataa: any) => {
console.log('Sucessfull data pass ' + JSON.stringify(dataa));
this.router.navigate(['/dasbord']);
});
  }
}
