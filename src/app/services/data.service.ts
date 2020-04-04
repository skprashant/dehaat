import { Injectable } from "@angular/core";
import { Person } from "../model/person";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private detail = new Subject();
  private personList: Person[];
  detailObservable = this.detail.asObservable();

  constructor() {}

  getData() {
    this.personList = [
      new Person(
        "100",
        "A. P. J. Abdul Kalam",
        1234567890,
        20,
        "Delhi",
        "https://cdn.britannica.com/56/148856-004-2F59E2D9/APJ-2008.jpg",
        "Avul Pakir Jainulabdeen Abdul Kalam was an aerospace scientist who served as the 11th President of India from 2002 to 2007. He was born and raised in Rameswaram, Tamil Nadu and studied physics and aerospace engineering."
      ),
      new Person(
        "101",
        "Shyam",
        1234567891,
        21,
        "Mumbai",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaCx2moGjcuH9eGrbcrnesZXkJxUcnYcsxQE0BliO7IR6I3KpH&usqp=CAU",
        "Steve Jobs was a charismatic pioneer of the personal computer era. With Steve Wozniak, Jobs founded Apple Inc. in 1976 and transformed the company into a world leader in telecommunications. Widely considered a visionary and a genius, he oversaw the launch of such revolutionary products as the iPod and the iPhone."
      ),
      new Person(
        "102",
        "Mohan",
        1234567892,
        22,
        "Kolkata",
        "https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg",
        "Mark Elliot Zuckerberg is an American internet entrepreneur and philanthropist. He is known for co-founding Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder. He also co-founded and is a board member of the solar sail spacecraft development project Breakthrough Starshot."
      ),
      new Person(
        "103",
        "Sohan",
        1234567893,
        23,
        "Pune",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaCx2moGjcuH9eGrbcrnesZXkJxUcnYcsxQE0BliO7IR6I3KpH&usqp=CAU",
        "Steve Jobs was a charismatic pioneer of the personal computer era. With Steve Wozniak, Jobs founded Apple Inc. in 1976 and transformed the company into a world leader in telecommunications. Widely considered a visionary and a genius, he oversaw the launch of such revolutionary products as the iPod and the iPhone."
      ),
      new Person(
        "104",
        "Sonu",
        1234567894,
        24,
        "Patna",
        "https://www.gstatic.com/tv/thumb/persons/532529/532529_v9_bb.jpg",
        "Jeffrey Preston Bezos is an American internet and aerospace entrepreneur, media proprietor, and investor. He is best known as the founder, chief executive officer, and president of Amazon."
      ),
      new Person(
        "105",
        "John",
        1234567895,
        25,
        "US",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaCx2moGjcuH9eGrbcrnesZXkJxUcnYcsxQE0BliO7IR6I3KpH&usqp=CAU",
        "Steve Jobs was a charismatic pioneer of the personal computer era. With Steve Wozniak, Jobs founded Apple Inc. in 1976 and transformed the company into a world leader in telecommunications. Widely considered a visionary and a genius, he oversaw the launch of such revolutionary products as the iPod and the iPhone."
      ),
      new Person(
        "106",
        "Jack",
        1234567896,
        26,
        "UK",
        "https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg",
        "Mark Elliot Zuckerberg is an American internet entrepreneur and philanthropist. He is known for co-founding Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder. He also co-founded and is a board member of the solar sail spacecraft development project Breakthrough Starshot."
      ),
      new Person(
        "107",
        "Arti",
        1234567897,
        27,
        "Punjab",
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mother_Teresa_1.jpg",
        "Mary Teresa Bojaxhiu, commonly known as Mother Teresa and honoured in the Catholic Church as Saint Teresa of Calcutta, was an Albanian-Indian Roman Catholic nun and missionary. She was born in Skopje, then part of the Kosovo Vilayet of the Ottoman Empire."
      ),
      new Person(
        "108",
        "Neha",
        1234567898,
        28,
        "Goa",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaCx2moGjcuH9eGrbcrnesZXkJxUcnYcsxQE0BliO7IR6I3KpH&usqp=CAU",
        "Steve Jobs was a charismatic pioneer of the personal computer era. With Steve Wozniak, Jobs founded Apple Inc. in 1976 and transformed the company into a world leader in telecommunications. Widely considered a visionary and a genius, he oversaw the launch of such revolutionary products as the iPod and the iPhone."
      ),
      new Person(
        "109",
        "Kapil",
        1234567899,
        29,
        "Haryana",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaCx2moGjcuH9eGrbcrnesZXkJxUcnYcsxQE0BliO7IR6I3KpH&usqp=CAU",
        "Steve Jobs was a charismatic pioneer of the personal computer era. With Steve Wozniak, Jobs founded Apple Inc. in 1976 and transformed the company into a world leader in telecommunications. Widely considered a visionary and a genius, he oversaw the launch of such revolutionary products as the iPod and the iPhone."
      ),
      new Person(
        "110",
        "Krishna",
        1234567900,
        30,
        "Agra",
        "https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg",
        "Mark Elliot Zuckerberg is an American internet entrepreneur and philanthropist. He is known for co-founding Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder. He also co-founded and is a board member of the solar sail spacecraft development project Breakthrough Starshot."
      )
    ];
    const sorted = this.personList.sort((a: Person, b: Person) => {
      if (a.getName() > b.getName()) {
        return 1;
      }

      if (a.getName() < b.getName()) {
        return -1;
      }

      return 0;
    });
    return sorted;
  }

  showDetail(person: Person) {
    this.detail.next(person);
  }

  getDataFromId(id: string) {
    for (const person of this.personList) {
      if (person.getId() === id) {
        return person;
      }
    }
    return null;
  }
}
