import {Injectable} from "@angular/core";
import {Page} from "../models/page";

@Injectable()
export class NavigationSvc {

    public getPages(): Array<Page> {
        let pageList = [];
        pageList.push(new Page("Home", "home"));
        pageList.push(new Page("Wir über uns", "ueberuns"));
        pageList.push(new Page("Weine", "weine"));
        pageList.push(new Page("Buschenschank", "buschenschank"));
        pageList.push(new Page("Zimmer", "zimmer"));
        pageList.push(new Page("Links", "links"));
        pageList.push(new Page("So erreichen Sie uns", "kontakt"));
        return pageList;
    }
}