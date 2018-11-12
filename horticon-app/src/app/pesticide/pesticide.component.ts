import { Component, OnInit } from '@angular/core';

import { Pesticide } from './pesticide.model'
import { PesticideService } from './pesticide.service'

@Component({
  selector: 'app-pesticide',
  templateUrl: './pesticide.component.html',
  styleUrls: ['./pesticide.component.css']
})
export class PesticideComponent implements OnInit {

  pesticides: Pesticide[]

  constructor(private pesticideService: PesticideService) { }

  ngOnInit() {

    debugger;

    this.pesticideService.pesticides()
      .subscribe(pesticides => this.pesticides = pesticides)

  }

}
