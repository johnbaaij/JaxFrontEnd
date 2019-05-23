import * as $ from 'jquery';



export class Sizes{

  public static textBarSize(){
    let new_width = $('#bar').width();
    $("#wrapper").width(new_width);
  }

  public static mainAreaSize(){
    let chatsize = $('#chat').height();
    let barSize = $('#bar').height();
    let textInputSize = $('#textInput').height();

    let newHeight = chatsize - barSize - textInputSize - 56;
    $("#main").height(newHeight);

  }

  public static detectIphone(){

    $("body").height( window.innerHeight);

    let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

    if (iOS){
    }

  }



  constructor(){

  }
}
