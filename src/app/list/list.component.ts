import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() title = '';
  @Input() id = '';

  cards =[]
  constructor() { }

  ngOnInit() {
  }

  addCard(card) {
      this.cards.push(card)

    }



}
