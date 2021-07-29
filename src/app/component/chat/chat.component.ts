import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../service/chat.service";
import {NotificationService} from "../../service/notification.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public message: string = '';
  public messages: string[] = [];

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.chatService.receiveChat().subscribe((message: string) => this.messages.push(message));
  }

  addChat() {
    this.messages.push(this.message);
    this.chatService.sendChat(this.message);
    this.message = '';
  }

}
