import { Component, OnInit } from '@angular/core';
import {PublicationService} from "../shared/services/publication.service";
import {AuthService} from "../../core/services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import { ProfileService } from './profile.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  publications: any[] = [];
  
  constructor(private publicationService: PublicationService,
    private matDialog: MatDialog,
    private profileService: ProfileService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.profileService.currentLoad().subscribe((s) => this.loadData());
  }
  loadData() {
    const id = this.authService.getUserId();
    if(id) {
      this.publicationService.getAllById(id).subscribe(
        res => {
          console.log('PROFILE: ', res);
          this.saveData(res);
        }
      )
    }
  }
  saveData(data: any): void {
    this.publications = Object.entries(data);
  }

}
