import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { LoggerComponent } from './logger/logger.component';



@NgModule({
  declarations: [MyLibComponent, LoggerComponent],
  imports: [
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
