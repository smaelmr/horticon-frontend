import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

import { Pesticide } from '../pesticide.model';
import { PesticideService } from '../pesticide.service';

@Component({
  selector: 'app-pesticide-edit',
  templateUrl: './pesticide-edit.component.html',
  styleUrls: ['./pesticide-edit.component.css']
})
export class PesticideEditComponent implements OnInit {

  pesticide: Pesticide;
  editForm: FormGroup;

  constructor(
    private pesticideService: PesticideService, 
    private route: Router, 
    private activeRoute: ActivatedRoute,
    private formBuild: FormBuilder) { }

  ngOnInit() {

    this.pesticideService.pesticideById(this.activeRoute.snapshot.params['id'])
    .subscribe(pesticide => this.pesticide = pesticide)

  }

  onSubmit() {
    this.pesticideService.pesticideUpdate(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.route.navigate(['pesticide-list']);
        },
        error => {
          alert(error);
        });
  }

}
