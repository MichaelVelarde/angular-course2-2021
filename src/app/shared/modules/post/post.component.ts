import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  @Input() category: string|undefined;
  @Input() date: string|undefined;
  @Input() description: string|undefined;
  @Input() idUser: string|undefined;
  @Input() imageUrl: string|undefined;
  @Input() userPhotoUrl: string|undefined;
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
