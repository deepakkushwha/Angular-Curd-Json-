import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { StudentModel } from './student.model';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  
  studentobj: StudentModel = new StudentModel;
  id:any;
  showModel:boolean=false;
  allstudent: any;
  btnUpdateShow:boolean = false;
  btnSaveShow:boolean = true;
  formSubmitAttempt: boolean = false;
  gender: boolean = false;

  constructor(private formBuilder:FormBuilder, private api:ApiService ) { }


  public formValue = this.formBuilder.group({
    fname: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    lname: ["", [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,16}')]],
    phone:['',[Validators.required, Validators.pattern('^\\d{10}$')]],
    Company:['',[Validators.required]],
    Gender:['',[Validators.required]],
    DOB:['',[Validators.required]],
    password:['',[Validators.required, Validators.minLength(6)]],
    CPassword:['',[Validators.required]]
  })
 
  ngOnInit(): void {
    this.AllStudent();
  }

  AddStudent(){

    if (this.formValue.invalid) {
      this.formSubmitAttempt = true;  
      return

    }
    let payload = this.formValue.value;
    if(payload.CPassword != payload.password){
      alert('not match')
      return
    }
    else{ console.log('data',this.formValue.value);
      this.api.postStudent(this.formValue.value).subscribe({
        next: (v) => {console.log(v)},
      error: (e) => {
        console.log(e)},
      complete: () => {
        console.log('complete')
        this.AllStudent();
        this.formValue.reset();
      } })
      }
      window.location.reload();
  }


  AllStudent(){
    this.api.getStudent().subscribe(res => {
      this.allstudent = res;
    })
  }

  EditStudent(data:any){
    this.id = data.id;
    this.UpdateShowBtn();
    this.formValue.patchValue({
      fname:data.fname,
      lname:data.lname,
      email:data.email,
      phone:data.phone,
      Company:data.Company,
      Gender:data.Gender,
      DOB:data.DOB,
      password:data.password,
      CPassword:data.CPassword,
    })
  }

  UpdateStudent(){
    
    this.api.putStudent(this.formValue.value,this.id).subscribe(res => {
      this.AllStudent();
      this.SaveShowBtn();
      window.location.reload();
      })  
  }


  DeleteStudent(data:any){
    this.api.deleteStudent(data.id).subscribe(res => {
      this.AllStudent();
    })

  }

  UpdateShowBtn()
  {
    this.btnUpdateShow = true;
    this.btnSaveShow = false;
  }
  SaveShowBtn()
  {
    this.btnUpdateShow = false;
    this.btnSaveShow = true;
  }

  get f() {
    return this.formValue.controls;
  }


}
