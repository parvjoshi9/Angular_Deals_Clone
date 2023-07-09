import { Component, Input } from '@angular/core';

@Component({
  selector: 'navigatedPath',
  templateUrl: './navigatedPath.component.html',
  styleUrls: ['./navigatedPath.component.scss']
})
export class NavigatedPathComponent {
  @Input() items: string[] = [];
}
