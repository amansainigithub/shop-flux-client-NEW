import { Component, OnInit } from '@angular/core';
import { FinalCategoryService } from 'src/app/category_services/final-category.service';

@Component({
  selector: 'app-show-final-category',
  templateUrl: './show-final-category.component.html',
  styleUrls: ['./show-final-category.component.css']
})
export class ShowFinalCategoryComponent implements OnInit {

  constructor(private _final_category_service:FinalCategoryService) { }


  ngOnInit(): void {
    this.reteriveFinalCategoryList();
  }

 
  finalCategoryData:any=[];
  //********************Reterive-FINAL-Category****************************
  reteriveFinalCategoryList()
{
  this._final_category_service.reteriveFinalCategoryList().subscribe(
    data=>{
        console.log(data);
        this.finalCategoryData=data;
    },
    error=>
    {
      console.log(error);
      
    }
  );
}



}
