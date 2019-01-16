import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {MatStepper} from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({

  imports: [
     MatStepper
  ]
})


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isEditable = false;
  detail:any={}
  @ViewChild('stepper') stepper: MatStepper;
  

  constructor(private _formBuilder: FormBuilder) { 
     
  }

  ngOnInit() {

    this.detail.flag = 0;
    this.firstFormGroup = this._formBuilder.group({
      studentNameCtrl: ['', Validators.required],
      fatherNameCtrl: ['', Validators.required],
      motherNameCtrl: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      ageCtrl: ['', Validators.required],
      dobCtrl: ['', Validators.required],
      nationalityCtrl: ['', Validators.required],
    });

    this.thirdFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.required],
      phoneCtrl: ['', Validators.required]
    });
  }

   
 
 

  handleFirstForm(){  
   
    this.detail.name=this.firstFormGroup.get("studentNameCtrl").value
    this.detail.father=this.firstFormGroup.get("fatherNameCtrl").value
    this.detail.mother=this.firstFormGroup.get("motherNameCtrl").value
    var reg = /^[a-zA-Z]+$/;
     
    if(this.detail.name.length == 0 ||
      this.detail.father.length == 0 ||
      this.detail.mother.length == 0)
    {
       this.detail.name = null;
       this.detail.father = null;
       this.detail.mother = null;
       this.detail.flag_for_error = 1;
       this.move(0);
       
    }
    else if(reg.test(this.detail.name) == false)
    {
       this.detail.name = " ";
       this.detail.flag_for_error = 1;
       this.move(0);

       
    }
    else if(reg.test(this.detail.father) == false)
    {
       this.detail.father = " ";
       this.detail.flag_for_error = 1;
       this.move(0);

       
    }
    else if(reg.test(this.detail.mother) == false)
    {
       this.detail.father = " ";
       this.detail.flag_for_error = 1;
       this.move(0);

       
    }
    
    
  }


  handleSecondForm() {
    this.detail.age=this.secondFormGroup.get("ageCtrl").value
    this.detail.dob=this.secondFormGroup.get("dobCtrl").value
    this.detail.nationality=this.secondFormGroup.get("nationalityCtrl").value
    

     
    if(this.detail.age.length == 0 ||
      this.detail.dob.length == 0 ||
      this.detail.nationality.length == 0)
    {
       this.detail.age = null;
       this.detail.dob = null;
       this.detail.nationality = null;
       this.detail.flag_for_error = 1;
       this.move(1);
       
    }
    else if(this.detail.age <=0 ||
      this.detail.age >100)
    {
       this.detail.age = " ";
       this.detail.flag_for_error = 1;
       this.move(1);
       
    }
    

  }

  handleThirdForm() {
    this.detail.email=this.thirdFormGroup.get("emailCtrl").value
    this.detail.phone=this.thirdFormGroup.get("phoneCtrl").value
    var emailpattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    var phonepattern = /[0-9]{10}/;


      
    if(this.detail.email.length == 0 ||
      this.detail.phone.length == 0)
    {
       this.detail.email = null;
       this.detail.phone = null;
       this.detail.flag_for_error = 1;
       this.move(2);
       
    }
    else if(emailpattern.test(this.detail.email) == false)
    {
       this.detail.email = " ";
       this.detail.flag_for_error = 1;
       this.move(2);

       
    }
    else if(phonepattern.test(this.detail.phone) == false)
    {
       this.detail.phone = " ";
       this.detail.flag_for_error = 1;
       this.move(2);

       
    }
    

  }

   
  move(index: number) {
    this.stepper.selectedIndex = index;

    if(this.detail.flag_for_error == 1)
    {
      this.detail.flag_for_error = 0;
      this.detail.flag = 0;
    }
    else
    {
      this.detail.flag = 1;
    }
    
  }


  handleFirstSave()
  {
    this.detail.flag = 0;
    this.detail.name=this.firstFormGroup.get("studentNameCtrl").value
    this.detail.father=this.firstFormGroup.get("fatherNameCtrl").value
    this.detail.mother=this.firstFormGroup.get("motherNameCtrl").value
    this.stepper.selectedIndex = 3;
  }


  handleSecondSave()
  {
    this.detail.flag = 0;
    this.detail.age=this.secondFormGroup.get("ageCtrl").value
    this.detail.dob=this.secondFormGroup.get("dobCtrl").value
    this.detail.nationality=this.secondFormGroup.get("nationalityCtrl").value
    this.stepper.selectedIndex = 3;
  }
   
}

