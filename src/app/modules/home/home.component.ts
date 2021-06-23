import {Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserType } from 'src/app/enums/user-type.enum';
import { IUserData } from 'src/app/interfaces/user-data.interface';
import { IUserIdentity } from 'src/app/interfaces/user-indentity.interface';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , IUserIdentity{
  detailsForm!: FormGroup;
  id!: string;
  data: any;
  dataList: IUserData[] = [];
  loading: boolean = true;
  initials: void;
  firstName: any;
  type!: UserType;
  formDetails: boolean = false;
  dataArray: IUserData[] = [];
  fullName: any;

  constructor( private userData: UserDataService,private renderer: Renderer2
  ) {
  
  }


  ngOnInit(){
    this.formDetails = false;
    this.detailsForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      address: new FormGroup({
        line1: new FormControl(null),
        line2: new FormControl(null),
        line3: new FormControl(null),
        city: new FormControl(null),
        county: new FormControl(null),
        postcode: new FormControl(null)
      })
    })

    this.userData.getCurrentUser().subscribe(data => {
      this.loading = false;
      this.id = data.id;
      this.userData.getUserData(this.id)
      .subscribe((res: any ) => {
        this.loading = false;
        this.detailsForm.setValue(res);
      }
     )
    })
   }

  
  onSubmit(data: any){
    this.formDetails = true;
    this.dataList.push(data);
    this.fullName = data?.firstName?.toUpperCase() + ' ' + data?.lastName?.toUpperCase();
    this.initials =  
     this.fullName
    .split(" ")
    .map((n: any[]) => n[0])
    .join("");
  }
}
