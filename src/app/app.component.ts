import { Component } from '@angular/core';
import { ParserService } from './core/parser/parser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private parserService: ParserService) {
    console.log(this.parserService);
  }
}
