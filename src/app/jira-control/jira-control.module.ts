import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { SMInputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SMAvatarComponent } from './avatar/avatar.component';
import { NavigatedPathComponent } from '@trungk18/jira-control/navigatedpath/navigatedPath.component';
import { SMButtonComponent } from '@trungk18/jira-control/button/button.component';

const JiraControlComponents = [
  SvgDefinitionsComponent,
  SvgIconComponent,
  SMInputComponent,
  SMAvatarComponent,
  NavigatedPathComponent,
  SMButtonComponent
];
@NgModule({
  declarations: JiraControlComponents,
  exports: JiraControlComponents,
  imports: [CommonModule, ReactiveFormsModule]
})
export class JiraControlModule {}
