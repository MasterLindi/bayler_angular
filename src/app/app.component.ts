import {Component} from "@angular/core";
import {NavigationComponent} from "./commons/navigation.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavigationComponent]
})
export class AppComponent {

}
