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
        "Steve Jobs",
        1234567895,
        25,
        "US",
        "https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
        "Steve Jobs was a charismatic pioneer of the personal computer era. With Steve Wozniak, Jobs founded Apple Inc. in 1976 and transformed the company into a world leader in telecommunications. Widely considered a visionary and a genius, he oversaw the launch of such revolutionary products as the iPod and the iPhone."
      ),
      new Person(
        "106",
        "Mark Zuckerberg",
        1234567896,
        26,
        "UK",
        "https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg",
        "Mark Elliot Zuckerberg is an American internet entrepreneur and philanthropist. He is known for co-founding Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder. He also co-founded and is a board member of the solar sail spacecraft development project Breakthrough Starshot."
      ),
      new Person(
        "107",
        "Mother Teresa",
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
        "Kapil Dev",
        1234567899,
        29,
        "Haryana",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKp1gtmK1tUNUxd4RXZSYZeJab1AlizE0unruyy7zNNJFiuxcm&usqp=CAU",
        "Kapil Dev Ram Lal Nikhanj is a former Indian cricketer. He was a fast bowler and a hard hitting middle order batsman. Regarded as one of the greatest all-rounders to play the game, he is also regarded as one of the greatest captains in the history of cricket."
      ),
      new Person(
        "110",
        "Krishna",
        1234567900,
        30,
        "Agra",
        "https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg",
        "Mark Elliot Zuckerberg is an American internet entrepreneur and philanthropist. He is known for co-founding Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder. He also co-founded and is a board member of the solar sail spacecraft development project Breakthrough Starshot."
      ),
      new Person(
        "111",
        "Sundar Pichai",
        1234567901,
        30,
        "India",
        "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0.jpg",
        "Pichai Sundararajan, also known as Sundar Pichai, is an Indian American business executive, the chief executive officer of Alphabet Inc. and its subsidiary Google LLC. Pichai began his career as a materials engineer and joined Google as a management executive in 2004."
      ),
      new Person(
        "112",
        "Steve Wozniak",
        1234567902,
        33,
        "America",
        "https://www.gstatic.com/tv/thumb/persons/537913/537913_v9_ba.jpg",
        "Stephen Gary Wozniak, also known by his nickname Woz, is an American electronics engineer, programmer, philanthropist, and technology entrepreneur. "
      ),
      new Person(
        "113",
        "Brendan Eich",
        1234567903,
        33,
        "America",
        "https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
        "Brendan Eich is an American technologist and creator of the JavaScript programming language. He co-founded the Mozilla project, the Mozilla Foundation and the Mozilla Corporation, and served as the Mozilla Corporation's chief technical officer and briefly, as its chief executive office "
      ),
      new Person(
        "114",
        "P. V. Sindhu",
        1234567904,
        33,
        "India",
        "https://upload.wikimedia.org/wikipedia/commons/7/73/PV_Sindhu_headshot.jpg",
        "Pusarla Venkata Sindhu is an Indian professional badminton player. Having made her international debut in 2009, she rose to a career high ranking of no. 2 in April 2017."
      ),
      new Person(
        "115",
        "Sachin Tendulkar",
        1234567905,
        43,
        "India",
        "https://sportstar.thehindu.com/cricket/article31080794.ece/ALTERNATES/LANDSCAPE_1200/Sachin-Tendulkar",
        "Sachin Ramesh Tendulkar is an Indian former international cricketer and a former captain of the Indian national team. He is widely regarded as one of the greatest batsmen in the history of cricket. He is the highest run scorer of all time in International cricket."
      ),
      new Person(
        "116",
        "Virat Kohli",
        1234567906,
        33,
        "India",
        "https://imagevars.gulfnews.com/2019/12/19/Virat-Kohli-_16f1d3e177a_large.jpg",
        "Virat Kohli is an Indian cricketer who currently captains the India national team. A right-handed top-order batsman, Kohli is regarded as one of the best batsmen in the world. He plays for Royal Challengers Bangalore in the Indian Premier League, and has been the team's captain since 2013."
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
