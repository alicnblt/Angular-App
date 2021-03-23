import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  isLoggedin(){
   return this.accountService.isLoggedIn();
  }
  logOut(){
    this.accountService.logOut();
  }
}
