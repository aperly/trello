import { Component } from '@angular/core';
import { ServerService} from './server.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lists = [

  ]

  addList(lists) {
        // this.lists.push(list)
        this.server.addList(lists).subscribe(res => {
        this.router.navigate(['main']);

        });
      }


}
