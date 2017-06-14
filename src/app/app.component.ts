import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  start = new Date(2000, 1);
  end = new Date();
  margin = {top: 20, right: 20, bottom: 20, left: 20};
  public x;

  onScaleUpdate(fct)
  {
    this.x = fct;
  }

  events = [{name: 'Something', description: 'March 2001', time: new Date(2001, 3)}, {name: 'Something else', description: 'January 2010', time: new Date(2010, 1)}];
}
