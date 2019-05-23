import {ChatMessage} from "./chatmessage";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class Messages {
  get messages(): String[] {
    return this._messages;
  }

  set messages(value: String[]) {
    this._messages = value;
  }

  private _messages: String[]


}
