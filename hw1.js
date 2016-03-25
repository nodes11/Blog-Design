//kind of like main()
document.addEventListener("DOMContentLoaded", function (event) {
  //grab the DOM version of our show menu h2
  var menuButton = document.getElementsByClassName('menu-toggle');
  menuButton = menuButton[0];
  var menu_bar_state = 0;

  //listen for a click, show menu
  menuButton.addEventListener("click", function(evt){

      //grab reference to links NAV
      var links = document.getElementsByClassName('menu-main-container');

      /*
      In JS == performs type conversion before the comparison
      Meaning, 0 == ''
      === on the other hand does no type conversion, gives us
      probably what we're expecting.*/

      if (menu_bar_state === 0)
      {

            links[0].style.display = "block";
            menu_bar_state = 1;
      }
      else
      {
          links[0].style.display = "none";
          menu_bar_state = 0;
        }


  });







    //grab the DOM version of our show menu h2
    var menuButton2 = document.getElementsByClassName('menu-item-722');
    menuButton2 = menuButton2[0];
    var menu_bar_state2 = 0;

    //listen for a click, show menu
    menuButton2.addEventListener("click", function(evt){

        //grab reference to links NAV
        var links = document.getElementsByClassName('sub-menu');

        /*
        In JS == performs type conversion before the comparison
        Meaning, 0 == ''
        === on the other hand does no type conversion, gives us
        probably what we're expecting.*/

        if (menu_bar_state2 === 0)
        {
            //change display back to block (default setting)
            links[0].style.display = "block";
            links[0].childNodes[1].style.display = "block";
            menu_bar_state2 = 1;
        }
        else
        {
            //change back to invisible
            links[0].style.display = "none";
            links[0].childNodes[1].style.display = "none";
            menu_bar_state2 = 0;
        }

    });





    //grab the DOM version of our show menu h2
    var menuButton3 = document.getElementsByClassName('widget_categories');
    menuButton3 = menuButton3[0];
    var menu_bar_state3 = 0;

    //listen for a click, show menu
    menuButton3.addEventListener("click", function(evt){

        //grab reference to links NAV
        var links = document.getElementsByClassName('widget-title')[0].nextSibling.nextSibling;

        /*
        In JS == performs type conversion before the comparison
        Meaning, 0 == ''
        === on the other hand does no type conversion, gives us
        probably what we're expecting.*/


        if (menu_bar_state3 === 0)
        {
          links.style.display = "block";
            //change display back to block (default setting)
            for (var i = 0; i < links.childNodes.length; i++){
              if (links.childNodes[i].localName){
                if (links.childNodes[i].localName == "li"){
                  if (links.childNodes[i].style){
                    links.childNodes[i].style.display = "block";
                    menu_bar_state3 = 1;
                  }
                }
              }
            }
        }
        else
        {
          links.style.display = "none";
            //change back to invisible
            for (var i = 0; i < links.childNodes.length; i++){
              if (links.childNodes[i].localName){
                if (links.childNodes[i].localName == "li"){
                  if (links.childNodes[i].style){
                    links.childNodes[i].style.display = "none";
                    menu_bar_state3 = 0;
                  }
                }
              }
            }
        }

    });

    //grab the DOM version of our show menu h2
    var menuButton4 = document.getElementsByClassName('widget_archive');
    menuButton4 = menuButton4[0];
    var menu_bar_state4 = 0;

    //listen for a click, show menu
    menuButton4.addEventListener("click", function(evt){

        //grab reference to links NAV
        var links = document.getElementsByClassName('widget-title')[1].nextSibling.nextSibling;

        /*
        In JS == performs type conversion before the comparison
        Meaning, 0 == ''
        === on the other hand does no type conversion, gives us
        probably what we're expecting.*/

        if (menu_bar_state4 === 0)
        {
          links.style.display = "block";
            //change display back to block (default setting)
            for (var i = 0; i < links.childNodes.length; i++){
              if (links.childNodes[i].localName){
                if (links.childNodes[i].localName == "li"){
                  if (links.childNodes[i].style){
                    links.childNodes[i].style.display = "block";
                    menu_bar_state4 = 1;
                  }
                }
              }
            }
        }
        else
        {
          links.style.display = "none";
            //change back to invisible
            for (var i = 0; i < links.childNodes.length; i++){
              if (links.childNodes[i].localName){
                if (links.childNodes[i].localName == "li"){
                  if (links.childNodes[i].style){
                    links.childNodes[i].style.display = "none";
                    menu_bar_state4 = 0;
                  }
                }
              }
            }
        }

    });
});
