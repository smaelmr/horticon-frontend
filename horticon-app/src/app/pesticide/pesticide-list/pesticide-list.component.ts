import { Component, OnInit } from '@angular/core';

import { Pesticide } from '../pesticide.model';
import { PesticideService } from '../pesticide.service';

@Component({
  selector: 'app-pesticide-list',
  templateUrl: './pesticide-list.component.html',
  styleUrls: ['./pesticide-list.component.css']
})
export class PesticideListComponent implements OnInit {

  pesticides: Pesticide[]

  constructor(private pesticideService: PesticideService) { }

  debugger;
  
  ngOnInit() {

    this.pesticideService.pesticides()
      .subscribe(pesticides => this.pesticides = pesticides)
  
    }

  

}
