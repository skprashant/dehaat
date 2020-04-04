import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Person } from "src/app/model/person";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-people-list-item",
  templateUrl: "./people-list-item.component.html",
  styleUrls: ["./people-list-item.component.scss"]
})
export class PeopleListItemComponent implements OnInit {
  @Input() person: Person;

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  getDetail() {
    localStorage.setItem("personId", this.person.getId());
    this.dataService.showDetail(this.person);
  }
}
