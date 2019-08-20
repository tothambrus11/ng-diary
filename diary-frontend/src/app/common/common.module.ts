import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageContainerComponent} from './page-container/page-container.component';
import {SubmitButtonComponent} from './submit-button/submit-button.component';


@NgModule({
  declarations: [
    PageContainerComponent,
    SubmitButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageContainerComponent,
    SubmitButtonComponent,
  ],
})
export class MyCommonModule {
}

