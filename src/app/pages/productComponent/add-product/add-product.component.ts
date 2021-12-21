import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  addProduct:any = {
    "productName": "",
    "description": "",
    "discount": "",
    "discountAvailable": true,
    "longDescription": "",
    "manufacturingPrice": "",
    "mrpPrice": "",
    "note": "",
    "productAvailable": "",
    "productDetails": "",
    "productId": 0,
    "productLongDetails": "",
    "productShortDetails": "",
    "productUSN": "",
    "quantity": "",
    "rootCategoryId": "",
    "savePrice": "",
    "savePricePercentage": "",
    "sellPrice": "",
    "shortDescription": "",
    "subCategoryId": ""
  }

  ngOnInit(): void {
  }

  saveProduct()
  {
    console.log("save Product Run....");
    console.log(this.addProduct);
    
    
  }
}
