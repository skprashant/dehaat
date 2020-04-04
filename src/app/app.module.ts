import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PeopleDetailComponent } from "./components/people-detail/people-detail.component";
import { PeopleListItemComponent } from "./components/people-list-item/people-list-item.component";
import { PersonListComponent } from "./components/person-list/person-list.component";
import { FilterPipe } from "./shared/filter.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PeopleDetailComponent,
    PeopleListItemComponent,
    PersonListComponent,
    FilterPipe
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
