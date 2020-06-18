import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddlinkService } from 'src/app/addlink.service'

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {

  title = 'addLink';
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,private addlinkService: AddlinkService) { }
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      sourcenode: ['', [Validators.required]],
      targetnode: ['', [Validators.required]]
     
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    const sourceval = this.f.sourcenode.value ;
    const targetval = this.f.targetnode.value;
 
    var formData = new FormData();
 
 // Display the values
 
      formData.append("source", sourceval);
      formData.append("target", targetval);
     
 
      for (var value of formData.values()) {
       console.log(value); 
    }
 
    this.addlinkService.sendData(formData).subscribe(        //service to post addnode data in the backend
      (response) => console.log(response),
      (error) => console.log(error)
    );
 
     
     this.submitted = true;
     // stop here if form is invalid
     if (this.registerForm.invalid) {
         return;
     }
     if(this.submitted)
     {
       this.showModal = false;
     }
     window.location.reload();
    
 }

}
