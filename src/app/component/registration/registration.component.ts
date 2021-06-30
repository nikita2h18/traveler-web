import { Component, OnInit } from '@angular/core';
import {UserDto} from "../../dto/UserDto";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public value1!: string;

  public value2!: string;

  public value3!: string;

  public value4!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
