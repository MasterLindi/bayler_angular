import {Component} from "@angular/core";
import {Page} from "./models/page";
import {NavigationSvc} from "./services/navi.svc";

@Component({
    selector: 'navigation-component',
    templateUrl: 'app/commons/navigation.template.html',
    providers: [NavigationSvc]
})

export class NavigationComponent {

    pageList: Array<Page> = [];

    constructor(private navSvc: NavigationSvc) {
        this.pageList = this.navSvc.getPages();
    }
}