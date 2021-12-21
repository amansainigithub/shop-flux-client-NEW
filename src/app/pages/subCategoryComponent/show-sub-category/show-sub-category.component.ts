import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from 'src/app/category_services/sub-category.service';

@Component({
  selector: 'app-show-sub-category',
  templateUrl: './show-sub-category.component.html',
  styleUrls: ['./show-sub-category.component.css']
})
export class ShowSubCategoryComponent implements OnInit {

  constructor(private _subCategory:SubCategoryService) { }

  ngOnInit(): void {
    this.reteriveSubCatergoryData();
  }

  subCategoryData:any =[];

//********************ReteriveRootCategory****************************
reteriveSubCatergoryData()
{
  this._subCategory.reteriveSubCategoryList().subscribe(
    data=>{
      console.log(data);
      
          this.subCategoryData=data;
    },
    error=>
    {
        console.log(error);
    }
  );
}

}
