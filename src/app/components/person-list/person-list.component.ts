import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Person } from "src/app/model/person";

@Component({
  selector: "app-person-list",
  templateUrl: "./person-list.component.html",
  styleUrls: ["./person-list.component.scss"]
})
export class PersonListComponent implements OnInit {
  private persons: Person[];
  @Input() private searchKey: string = "";

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.persons = this.dataService.getData();
    if (localStorage.getItem("personId") !== null) {
      const id = localStorage.getItem("personId");
      this.dataService.showDetail(this.dataService.getDataFromId(id));
    } else {
      this.dataService.showDetail(this.persons[0]);
    }
  }
}
