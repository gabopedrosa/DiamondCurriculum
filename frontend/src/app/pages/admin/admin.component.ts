import { map, tap } from 'rxjs';
import { UserData, UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  dataSource: UserData = null;
  displayedColumns: string[] = ['id', 'name', 'cpf', 'birth', 'email', 'escolaridade', 'role']
  pageEvent: PageEvent;
  
  constructor(private userService: UserService){ }


  ngOnInit(): void {
    this.initDataSource();
  }

  initDataSource(){
    this.userService.findAll(1, 5).pipe(
      tap(users => console.log(users)),
      map((userData: UserData) => this.dataSource = userData)
    ).subscribe();
  }

  onPaginateChange(event: PageEvent) {
    let page = event.pageIndex;
    let size = event.pageSize;

    page = page +1;

    this.userService.findAll(page, size).pipe(
      map((userData: UserData) => this.dataSource = userData)
    ).subscribe();
  }





}
