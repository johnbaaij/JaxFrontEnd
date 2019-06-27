import {Component, HostListener, OnInit} from '@angular/core';
import {ChatMessage} from "../../models/chatmessage";
import {MessageService} from "../../data/message.service";
import {Sizes} from "../../jquery/sizes";
import {CookieService} from "ngx-cookie-service";



@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})


/**
 *this component is the main component ot this webapp. Every component is loaded into this one..
 */
export class MainScreenComponent implements OnInit {



  messages: ChatMessage[];

  //every message is saved in this array and send to the bubble wrapper. Received and user generated messages
  receivedMessages: any[];
  chat : ChatMessage;
  private text: string;
  title: any;

  constructor(private mess: MessageService, private cookieService: CookieService){

    this.title = "hoi";


    const cookieExists: boolean = this.cookieService.check('firstTime');
    this.text ="Door gebruik te maken van de Jax chatbot accepteer je dat we gebruikersdata verzamelen. De gegevens die door ons wordt verzameld is volledig anoniem. De data wordt gebruikt om de chatbot en de gebruikerservaring te verbeteren. We verzamelen geen persoonlijke gegevens zoals namen, emailadressen etc. Deze data wordt niet met derden gedeeld. Als je nog vragen hebt kun je ons bereiken via plakband.dss@gmail.com ";

    //cookies are being used to give the user a welcome message. If this is the first time a data collection warning will be given. See this.text
    if (!cookieExists){
      mess.changeReceivedMessage(new ChatMessage(this.text, true, Date.now()));
      this.cookieService.set( 'firstTime', "false" );
    }

    else{

      //the messages that are being send to returning users. Giving them a warm welcome :)

      setTimeout(function () {
        mess.changeReceivedMessage(new ChatMessage("Hoi, welkom terug! ", true, Date.now()));
      }, 1000);

      setTimeout(function () {
        mess.changeReceivedMessage(new ChatMessage("Waarmee kan ik je helpen ?", true, Date.now()));
      }, 2000);
    }


    this.receivedMessages =[];


  }

  ngOnInit() {
    this.mess.currentMessage.subscribe(message => this.receivedMessages.push(message));
    this.mess.receivedCurrentMessage.subscribe(message => this.receivedMessages.push(message));

    //All JQuery scripts are being called here. For more information see /jquery/sizes.ts
    Sizes.mainAreaSize();
    Sizes.textBarSize();

  }

  ngAfterViewInit() {
    //All JQuery scripts are being called here. For more information see /jquery/sizes.ts

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
  onResize() {
    //perform actions
    //All JQuery scripts are being called here. For more information see /jquery/sizes.ts

    Sizes.mainAreaSize();
    Sizes.textBarSize();
    Sizes.detectIphone();
  }



}
