import { Component, Input } from '@angular/core';

@Component({
  selector: 'sm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class SMButtonComponent {
  @Input() type = 'button';
  @Input() className = 'btn-primary';
  @Input() icon: string;
  @Input() iconSize = 18;
  @Input() isWorking: boolean;
  @Input() isActive: boolean;
  @Input() disabled: boolean;

  constructor() {}

}
