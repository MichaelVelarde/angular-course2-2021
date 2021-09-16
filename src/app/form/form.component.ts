import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../core/services/firebase.service';


@Component({
  selector: 'app-register',
  templateUrl: './post-message.component.html',
  styleUrls: ['./post-message.component.scss']
})
export class PostMessageComponent implements OnInit {

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
  }

  onRegister(form:any){

  }

}