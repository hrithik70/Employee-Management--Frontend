import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

userDataJson : any =
{
  id: '',
  fullName: '',
  email : '',
  mobileNo : '',
  gender: ''
};
isFail: any;
isSuccess: any;

  constructor(
    private http : ActivatedRoute, 
    private service : UserServiceService,
    private route : Router
    ) { }

  userId : any;

  ngOnInit(): void {
   this.userId =  this.http.snapshot.params['userId'];
    this.service.fetchUserById(this.userId).subscribe((resp) =>
    {
      this.userDataJson = resp;
    }
    )
  }

  UpdateBtn(userId: any) {
    this.service.updateUser(userId, this.userDataJson).subscribe((resp) =>
    {
      this.route.navigate(['userDetails']);
    })    
    }

}
