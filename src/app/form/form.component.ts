import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../core/services/firebase.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
  }

  onRegister(form:any){

  }

}