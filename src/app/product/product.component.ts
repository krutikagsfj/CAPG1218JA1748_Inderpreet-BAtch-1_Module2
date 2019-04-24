import { Component, OnInit } from '@angular/core';
import{ProductserviceService} from '../service/productservice.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private pss:ProductserviceService) { }
resData;
  ngOnInit() {
    this.pss.getProducts().subscribe(res=>
      {
        this.resData=res;
        console.log(res);
      },err=>
      {
        console.log(err);
      })
  }

}
