import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../shared/services/publication.service';
import { HomeService } from './home.service';
import { filter } from 'rxjs/operators';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  publications = [];
  constructor(
    private publicationService: PublicationService,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.homeService
      .currentLoad()
      .pipe(filter((s) => s === true))
      .subscribe((s) => this.loadData());
  }
  onShowMessage(): void {}
  saveData(data: any): void {
    this.publications = Object.entries(data);
    console.log('estoy en save data', data);
  }
  loadData() {
    this.publicationService.getAll().subscribe((res) => {
      console.log('RES PUBLICATIONS', res);
      this.saveData(res);
    });
  }
}
