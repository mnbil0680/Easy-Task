import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { DUMMY_USERS } from "./components/user/dummy-users";
import { User } from './components/user/user';
import { Tasks } from "./components/tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
})
export class App {
 nameToDisplay:string = "";
onSelectUser(name:string) {
  console.log("Selected User With Id ==> "+ name);
  this.nameToDisplay = name;


}

  protected readonly title = signal('tmp');
 user= DUMMY_USERS;
}
