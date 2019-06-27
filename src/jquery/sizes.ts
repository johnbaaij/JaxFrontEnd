import * as $ from 'jquery';



export class Sizes{

  /**
  *This class contains multiple JQuery functions. Most functions are used to resize components in CSS to make it responsive
   * Most functions should be replaced by native CSS if possible to improve performance and make it less choppy

   */


  public static textBarSize(){

    //give the text bar the same width as the bar on top of the webpage in pixels whilst keeping the fixed position

    let new_width = $('#bar').width();
    $("#wrapper").width(new_width);

  }





  public static mainAreaSize(){

    //this is used to make the webpage work better on mobile devices as it hid a part of the interface under the url bar
    // in some mobile browsers.

    //TODO Convert this function to CSS or SCSS to improve the performance

    let chatsize = $('#chat').height();
    let barSize = $('#bar').height();
    let textInputSize = $('#textInput').height();

    let newHeight = chatsize - barSize - textInputSize - 56;
    $("#main").height(newHeight);

  }

  public static detectIphone(){

    //This function removes the quick reply options in iOS because it gives problems. This is a temprary "fix" and should be removed
    //TODO fix the bugs on iOS

    $("body").height( window.innerHeight);

    let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

    if (iOS== true){

      $(".buttonWrapper").css({"display":"none"});
    }

  }



  constructor(){

  }
}
