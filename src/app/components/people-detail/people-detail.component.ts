import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Person } from "src/app/model/person";

@Component({
  selector: "app-people-detail",
  templateUrl: "./people-detail.component.html",
  styleUrls: ["./people-detail.component.scss"]
})
export class PeopleDetailComponent implements OnInit {
  private person: Person;
  private editable = false;
  private phone: number;
  constructor(private dataService: DataService) {
    dataService.detailObservable.subscribe((person: Person) => {
      this.person = person;
    });
  }

  ngOnInit() {}

  editPhoneNumber(value: number) {
    this.person.setMobile(value);
    this.editable = false;
  }
}
