import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from "../../data/message.service";
import {UserInputController} from "../controlllers/UserInputController";
import {BotConnect} from "../azure/BotConnect";


@Component({
  selector: 'app-quick-reply',
  templateUrl: './quick-reply.component.html',
  styleUrls: ['./quick-reply.component.scss']
})

/**
 * This component is send a message to the backend to the chatbot and the message is displayed as a bubble to the user
 * The text is currently provided by in an array and they are displayed randomly. It is possible that the user sees the same bubble text twice
 *
 * In further development the text should change to the context of the conversation to make it easier and faster to interact
 * with the chatbot.
 *
 * Another faster solution would be to make a custom api that will generate the text for the user to provide the user with questions about hot topics and
 * to make it faster to update the bubbles
 */

//TODO Provide the text by the backend and make the messages context aware





export class QuickReplyComponent implements OnInit {
  //buttonText: string;
  private userInput: UserInputController;
  private readonly botConnect: BotConnect;
  @Input() buttonText: string[];
  buttonTextValue : string;

  buttonTextArray =["Kan ik mijn rugzak meenemen?","Mag ik mijn tas meenemen ?","Hoe groot mag de tas zijn die ik mee neem ?","Wat is de maximale grote van mijn tas ?","Kan ik alcohol drinken?","Mag ik alcohol drinken?","Is roken toegestaan?","Mag ik roken ?","Kan ik roken ?","Mag ik roken in de ArenA?","Mag ik roken in het stadion ?","Verkopen jullie alcohol?","Wordt er alcohol verkocht ?","Wordt er alcohol geschonken ?","Welke items zijn verboden in het stadion?","Welke voorwerpen zijn verboden in de ArenA","Welke voorwerpen zijn verboden in het stadion ?","Waar kan ik tickets kopen?","Hoe kan ik tickets kopen ","Op welke website kan ik tickets kopen ?","Ik wil een ticket kopen","Ik wil een kaartje kopen","Kan ik mijn tickets annuleren","Ik kan niet op de dag van de wedstrijd","Kan ik annuleren ?","Moet ik mijn ticket printen?","Kan ik het ticket laten zien via mijn smartphone ","Welke vakken zijn voor families?","Wat zin de familievakken ?","Wat houdt het familie vak in","Kan ik tickets kopen voor het familievak","Hoe kan ik registreren voor de Ajax online ticketshop?","Hoe regristreer ik voor de ticketshop ?","Hoe maak ik een account aan voor de ticketshop ?","Hoe kan ik een ticket bestellen voor de F-side?","Kan ik een ticket bestellen voor de F-side ?","Hoeveel kaarten kan ik voor een wedstrijd bestellen?","Hoeveel kaarten kan ik kopen ?","Hoe kan ik mijn barcode aan mijn 'Mijn Ajax account' koppelen?","Ik heb een ticket gekocht voor een uitwedstrijd maar kan helaas niet, wat nu?","Hoe kan ik mijn seizoenkaart betalen?","Hoe kan ik mijn seizoenskaart betalen ?","Kan ik mijn seizoenskaart via iDeal betalen ?","Kan ik mijn seizoenskaart via PayPal betalen ?","Kan ik meerdere seizoenkaarten bestellen?","Hoeveel seizoenskaarten kan ik bestellen ?","Kan ik mijn seizoenkaart ook in termijnen betalen?","Kan ik in delen betalen ?","Hoe kan ik mijn seizoenkaart opzeggen?","Kan ik mijn seizoenskaart annuleren ?","Wat is een seizoenkaart","Wat kan je met een seizoenskaart","Kan ik een seizoenkaart kopen?","Mag ik een seizoenskaafrt kopen?","Kan ik mijn seizoenkaart verlengen?","Hoe kan ik mijn seizoenskaart verlengen ?","Wanneer kan ik mijn seizoenskaart verlengen?","Kan ik een seizoenkaart voor het familievak kopen?","Mijn uitrecht staat niet op mijn seizoenkaart, hoe kan dit?","De barcode van mijn Seizoenkaart is niet zichtbaar in mijn Mijn Ajax- account, kan ik deze toevoegen?","De barcode van mijn Club Card is niet zichtbaar in mijn Mijn Ajax- account, kan ik deze toevoegen?","Wat is een club card?","Wat kan ik met een club card ","Kan ik een club card kopen?","Hoe kan ik een clubcard kopen ?","Hoe bestel ik meerdere kaarten naast elkaar met meerdere Club Cards?","Hoe weet ik of ik een Club Card nodig heb voor een wedstrijd waar ik kaarten voor wil bestellen?","Voor welke wedstrijden heb ik een clubcard nodig ?","Ik heb onlangs een Club Card besteld, wanneer ontvang ik deze?","Wanneer krijg ik mijn clubcard","Wanneer komt mijn clubcard binnen ?","Mijn Club Card is verlopen, hoe kan ik deze verlengen?","Mijn clubcard is verlopen","Ik wil mijn clubcard verlengen","Verkopen jullie cola","Verkopen julie frisdrank?","Verkopen jullie limonade ","Verkopen jullie sinas ?","Verkopen jullie koffie?","Mag ik cola drinken ?","Mag ik limonade drinken ?","Mag ik koffie drinken ?","Heb ik je voldoende geholpen met dit antwoord ?","Kan ik mijn rugzak meenemen?","Mag ik mijn tas meenemen ?","Hoe groot mag de tas zijn die ik mee neem ?","Wat is de maximale grote van mijn tas ?","Kan ik alcohol drinken?","Mag ik alcohol drinken?","Is roken toegestaan?","Mag ik roken ?","Kan ik roken ?","Mag ik roken in de ArenA?","Mag ik roken in het stadion ?","Verkopen jullie alcohol?","Wordt er alcohol verkocht ?","Wordt er alcohol geschonken ?","Welke items zijn verboden in het stadion?","Welke voorwerpen zijn verboden in de ArenA","Welke voorwerpen zijn verboden in het stadion ?","Waar kan ik tickets kopen?","Hoe kan ik tickets kopen ","Op welke website kan ik tickets kopen ?","Ik wil een ticket kopen","Ik wil een kaartje kopen","Kan ik mijn tickets annuleren","Ik kan niet op de dag van de wedstrijd","Kan ik annuleren ?","Moet ik mijn ticket printen?","Kan ik het ticket laten zien via mijn smartphone ","Welke vakken zijn voor families?","Wat zin de familievakken ?","Wat houdt het familie vak in","Kan ik tickets kopen voor het familievak","Hoe kan ik registreren voor de Ajax online ticketshop?","Hoe regristreer ik voor de ticketshop ?","Hoe maak ik een account aan voor de ticketshop ?","Hoe kan ik een ticket bestellen voor de F-side?","Kan ik een ticket bestellen voor de F-side ?","Hoeveel kaarten kan ik voor een wedstrijd bestellen?","Hoeveel kaarten kan ik kopen ?","Hoe kan ik mijn barcode aan mijn 'Mijn Ajax account' koppelen?","Ik heb een ticket gekocht voor een uitwedstrijd maar kan helaas niet, wat nu?","Hoe kan ik mijn seizoenkaart betalen?","Hoe kan ik mijn seizoenskaart betalen ?","Kan ik mijn seizoenskaart via iDeal betalen ?","Kan ik mijn seizoenskaart via PayPal betalen ?","Kan ik meerdere seizoenkaarten bestellen?","Hoeveel seizoenskaarten kan ik bestellen ?","Kan ik mijn seizoenkaart ook in termijnen betalen?","Kan ik in delen betalen ?","Hoe kan ik mijn seizoenkaart opzeggen?","Kan ik mijn seizoenskaart annuleren ?","Wat is een seizoenkaart","Wat kan je met een seizoenskaart","Kan ik een seizoenkaart kopen?","Mag ik een seizoenskaafrt kopen?","Kan ik mijn seizoenkaart verlengen?","Hoe kan ik mijn seizoenskaart verlengen ?","Wanneer kan ik mijn seizoenskaart verlengen?","Kan ik een seizoenkaart voor het familievak kopen?","Mijn uitrecht staat niet op mijn seizoenkaart, hoe kan dit?","De barcode van mijn Seizoenkaart is niet zichtbaar in mijn Mijn Ajax- account, kan ik deze toevoegen?","De barcode van mijn Club Card is niet zichtbaar in mijn Mijn Ajax- account, kan ik deze toevoegen?","Wat is een club card?","Wat kan ik met een club card ","Kan ik een club card kopen?","Hoe kan ik een clubcard kopen ?","Hoe bestel ik meerdere kaarten naast elkaar met meerdere Club Cards?","Hoe weet ik of ik een Club Card nodig heb voor een wedstrijd waar ik kaarten voor wil bestellen?","Voor welke wedstrijden heb ik een clubcard nodig ?","Ik heb onlangs een Club Card besteld, wanneer ontvang ik deze?","Wanneer krijg ik mijn clubcard","Wanneer komt mijn clubcard binnen ?","Mijn Club Card is verlopen, hoe kan ik deze verlengen?","Mijn clubcard is verlopen","Ik wil mijn clubcard verlengen","Verkopen jullie cola","Verkopen julie frisdrank?","Verkopen jullie limonade ","Verkopen jullie sinas ?","Verkopen jullie koffie?","Mag ik cola drinken ?","Mag ik limonade drinken ?","Mag ik koffie drinken ?","Heb ik je voldoende geholpen met dit antwoord ?"]


  constructor(private mess: MessageService) {

    this.botConnect = new BotConnect(mess);
    this.userInput = new UserInputController(mess, this.botConnect)



  }
  ngOnInit() {

    this.buttonTextValue = this.generateButtonText(this.buttonTextArray);


  }

  onCLick() {

    this.userInput.sendUserGeneratedMessage(this.buttonTextValue);
    this.buttonTextValue = this.generateButtonText(this.buttonTextArray);

  }

  private generateButtonText(messages: string[]){

    return messages[Math.floor(Math.random() * messages.length)]

  }
}
