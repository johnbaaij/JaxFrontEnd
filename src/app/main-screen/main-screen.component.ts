import {Component, HostListener, OnInit} from '@angular/core';
import {ChatMessage} from "../../models/chatmessage";
import {MessageService} from "../../data/message.service";
import {Sizes} from "../../jquery/sizes";
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  messages: ChatMessage[];
  receivedMessages: any[];
  chat : ChatMessage;
  today: Date;
  private text: string;

  constructor(private mess: MessageService, private cookieService: CookieService){


    const cookieExists: boolean = this.cookieService.check('firstTime');
    this.text ="Door gebruik te maken van de Jax chatbot accepteer je dat we gebruikersdata verzamelen. De gegevens die door ons wordt verzameld is volledig anoniem. De data wordt gebruikt om de chatbot en de gebruikerservaring te verbeteren. We verzamelen geen persoonlijke gegevens zoals namen, emailadressen etc. Deze data wordt niet met derden gedeeld. Als je nog vragen hebt kun je ons bereiken via plakband.dss@gmail.com ";


    if (!cookieExists){
      mess.changeReceivedMessage(new ChatMessage(this.text, true, Date.now()));
      this.cookieService.set( 'firstTime', "false" );
    }

    else{

      setTimeout(function () {
        mess.changeReceivedMessage(new ChatMessage("Hoi, welkom terug! ", true, Date.now()));
      }, 1000);

      setTimeout(function () {
        mess.changeReceivedMessage(new ChatMessage("Waarmee kan ik je helpen ?", true, Date.now()));
      }, 2000);
    }


    this.messages = [];
    this.receivedMessages =[];
    this. today = new Date();


  }

  ngOnInit() {
    this.mess.currentMessage.subscribe(message => this.receivedMessages.push(message));
    this.mess.receivedCurrentMessage.subscribe(message => this.receivedMessages.push(message));
    Sizes.mainAreaSize();
    Sizes.textBarSize();

  }

  ngAfterViewInit() {
    Sizes.mainAreaSize();
    Sizes.textBarSize();
    Sizes.detectIphone();

  }

    pushMessage(message: ChatMessage){
    if(message.message != null){
      this.receivedMessages.push(message)
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    //perform actions
    Sizes.mainAreaSize();
    Sizes.textBarSize();
    Sizes.detectIphone();
  }



}
