import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParserService } from './parser/parser.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  providers:    [
    ParserService],
  imports:      [
    CommonModule,
    HttpClientModule
  ],
  declarations: []
})
export class CoreModule {

}
