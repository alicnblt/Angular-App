import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { DrugService } from 'src/app/services/drug.service';
import { Drug } from '../drug';
import { DrugLisstService } from './drug-lisst.service';


declare let alertify:any;
@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css'],

})
export class DrugListComponent implements OnInit {

  constructor(private alertifyService:AlertifyService, private drugService:DrugService, private dService:DrugLisstService) { }
  title = "İlaç Listesi"   
  drugs!: Drug[];
  

  ngOnInit() {
    this.drugService.getDrugs().subscribe(data=>{
      this.drugs = data
    });
  }

  removeDrug(drug: Drug) {
    this.alertifyService.success(drug.name + " çıkarıldı.")
    for (let i = 0; i <= this.drugs.length; i++) {
      if (drug == this.drugs[i]) {
        this.drugs.splice(i, 1)
      }
    } 
}


}
