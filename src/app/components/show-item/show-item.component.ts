import { Component, Input, OnInit } from '@angular/core';
import { Show, ShowClass } from 'src/app/models/show';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
})
export class ShowItemComponent {
  @Input() show: ShowClass | undefined = undefined;

  constructor() {}
}
