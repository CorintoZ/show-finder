import { Component, Input } from '@angular/core';
import { ShowClass } from 'src/app/models/show';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
})
export class ShowItemComponent {
  @Input() show: ShowClass | undefined = undefined;

  constructor() {}
}
