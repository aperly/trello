import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class ServerService {

  private url:string = 'http://localhost:3000';
  private refreshRate:number = 60000;
  private userLoginStatus:boolean = false;
  public userLogin: Subject<boolean> = new Subject<boolean>();
  public userDetails: Subject<boolean> = new Subject<boolean>();

  public lists:Subject<Object[]> = new Subject<Object[]>();
  public cards: Subject<Object> = new Subject<Object>();


  constructor(private http:Http) {
    this.userLogin.subscribe(isLogin => {
      if(!isLogin) return;

      this.getMe()
      .subscribe((userData) => {
        this.userDetails.next(userData);
      })
    })
  }

  // list
  addList(lists) {
      return this.http.post(this.url + '/api/sumbitList', lists);
  }

  getLists() {
    this.http.get(this.url + '/api/lists')
      .map(res=>res.json())
      .subscribe(lists => {
        this.lists.next(lists);

        setTimeout(this.getLists.bind(this), this.refreshRate);
      });
  }

  //Card

  addCard(cards) {
      return this.http.post(this.url + '/api/sumbitCards', cards);
  }

  getCards() {
    this.http.get(this.url + '/api/displayCards')
      .map(res=>res.json())
      .subscribe(cards => {
        this.cards.next(cards);

        setTimeout(this.getCards.bind(this), this.refreshRate);
      });
  }


  getMe() {
    return this.http.get(this.url + '/api/me')
      .map(res=>res.json())
  }


  isLogedIn() {
    return this.getMe()
    .map((user) => {
      this.userLoginStatus = true;
      this.userLogin.next(true);

      return user._id ? true : false;
    });
  }

  login(data:Object){
    const loginHttp = this.http.post(this.url + '/api/login',data)
      .map(res=>res.ok)
      .map(ok => {
        if(ok) {
          this.userLoginStatus = true;
          this.userLogin.next(true);
        }
        return ok;
      });

    return loginHttp;
  }

  register(data:Object){
    return this.http.post(this.url + '/api/register',data)
      .map(res=>res.ok);
  }

}
