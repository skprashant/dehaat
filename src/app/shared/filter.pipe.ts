import { Pipe, PipeTransform } from "@angular/core";
import { Person } from "../model/person";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: Person[], filterText: string): any {
    if (filterText === "") {
      return value;
    }
    const key = Number(filterText);
    const persons: Person[] = [];
    for (const person of value) {
      if (key !== NaN && person.getName().startsWith(filterText)) {
        persons.push(person);
      } else if (
        person
          .getMobile()
          .toString()
          .startsWith(filterText)
      ) {
        persons.push(person);
      }
    }
    return persons;
  }
}
