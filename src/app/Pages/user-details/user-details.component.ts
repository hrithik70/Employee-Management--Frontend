import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(private service: UserServiceService, private router: Router) { }

  userDetails: any;
  isLoaderShow : boolean = true;

  ngOnInit(): void {
    this.service.getAllUser().subscribe((Response) => {
      this.userDetails = Response;
      this.isLoaderShow = false;
    })
  }
  deleteUserById(userId: any) {
    this.service.deleteUserById(userId).subscribe((resp) =>
    {
      alert("Deleted Successfully !!")
    });
  }

  updateByUserId(userId: any) {
      this.router.navigate(['userUpdate',userId]);
    } 



}
