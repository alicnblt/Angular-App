import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { DrugService } from 'src/app/services/drug.service';
import { Drug } from '../drug';


@Component({
  selector: 'app-drug-add',
  templateUrl: './drug-add.component.html',
  styleUrls: ['./drug-add.component.css'],
  providers:[DrugService]
})
export class DrugAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private drugService:DrugService, 
    private alertifyService:AlertifyService) { }

  drugAddForm!: FormGroup;
  drug:Drug = new Drug();


  createDrugAddForm(){
    this.drugAddForm = this.formBuilder.group({
      name:["", Validators.required],
      description:["", Validators.required],
      piece:["", Validators.required],
      when:["", Validators.required]

    });
  }

  ngOnInit() {
    this.createDrugAddForm();
 


  }
  add(){
    if(this.drugAddForm.valid){
      this.drug = Object.assign({}, this.drugAddForm.value)
    }
    this.drugService.addDrug(this.drug).subscribe(data=> {
      this.alertifyService.success(data.name + " başarıyla eklendi.")
    });
  }

 
}
