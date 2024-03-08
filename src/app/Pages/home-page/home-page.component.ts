import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  isSuccess: boolean = false;
  isFail: boolean = false;

  userDataJson = {
    fullName: '',
    email: '',
    mobileNo: '',
    gender: ''
  }

  resetFormData() {
    // Clear the values of userDataJson
    this.userDataJson = {
      fullName: '',
      email: '',
      mobileNo: '',
      gender: ''
    };
  }

  userSaveResponse: any;

  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
  }
  
  submitBtn() {
    this.userSaveResponse = this.service.saveUser(this.userDataJson).subscribe();
    this.isSuccess = true;
    this.isFail = false
    if (this.userSaveResponse != null) {
      setTimeout(() => {
       this.isSuccess=false;
       this.resetFormData(); // Reset the form data
      }, 3000
      )

    } else {
      this.isSuccess = false;
      this.isFail = true;
    }
  }
}

