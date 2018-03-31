import { Component, OnInit } from '@angular/core';
import { ServerService} from '../server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private server:ServerService) {
  }

  loginUser(data){
     this.server.login(data).subscribe(res => {

     });
   }

  ngOnInit() {
  }

}
