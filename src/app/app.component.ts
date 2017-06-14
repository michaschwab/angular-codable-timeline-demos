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
  height = 100;

  public x;

  start2 = new Date(2000, 1);
  end2 = new Date();
  public x2;
  public y2 = (value) => this.margin.top + (1 - value) * (this.height - this.margin.top - this.margin.bottom);

  onScaleUpdate(newX) { this.x = newX; }
  onScaleUpdate2(newX) { this.x2 = newX; this.updateTimeDataPoints(); }

  events = [{name: 'Something', description: 'March 2001', time: new Date(2001, 2)}, {name: 'Something else', description: 'January 2010', time: new Date(2010, 0)}];
  timelineData = [];

  constructor()
  {
    this.generateRandomTimeData();
  }

  generateRandomTimeData()
  {
    const msPerDay = 24 * 3600 * 1000;
    for(let timeInMs = this.start2.getTime(); timeInMs < this.end2.getTime(); timeInMs += msPerDay * 30)
    {
      this.timelineData.push({date: new Date(timeInMs), value: Math.random()})
    }
  }

  timelinePoints = "";
  updateTimeDataPoints()
  {
    this.timelinePoints = "";
    //x2(data.date)+','+y2(data.value)
    for(let data of this.timelineData)
    {
      this.timelinePoints += this.x2(data.date) + ',' + this.y2(data.value) + ' ';
    }
  }
}
