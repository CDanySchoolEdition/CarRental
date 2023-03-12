import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public pagesList: string[] = ['Home', 'Login', 'My History', 'Rent a car'];
  public pageRoute: Map<string, string> =new Map([
                                                  ['Home', '/home'],
                                                  ['Login', '*'],
                                                  ['My History', '*'],
                                                  ['Rent a car', '*']
                                                ]);
}
