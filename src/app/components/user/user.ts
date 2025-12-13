import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import {DUMMY_USERS} from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
})
export class User {
  @Input({required:true}) id!:string
  @Input({required: true}) avatar!:string;
  @Input({required: true}) name!:string;

  @Output() select = new EventEmitter();
  onSelectUser(){
  // console.log("selected user with ID"+ id);
  // this.select.emit(this.id);
  this.select.emit(this.name)
  }

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }


}
  // select = output<string>();


  /* Using Signals */
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar;
  // })
