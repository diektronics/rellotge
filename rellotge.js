function quina_hora(time)
{
  var ret = new Array();
  var hour = time.getHours() + 1;

  if (time.getMinutes() >= 58 || time.getMinutes() < 13) {
    if (time.getMinutes() < 13) {
      hour -= 1;
      if (hour == 0) {
        hour = 12;
      }
    }
    
    hora('l', hour, ret);

    if (time.getMinutes() >=3 && time.getMinutes() < 8) {
      ret.push("#i-2");
      ret.push("#i-cinc-2");
    } else if (time.getMinutes() >= 8 && time.getMinutes() < 13) {
      ret.push("#i-2");
      ret.push("#i-deu-2");
    } else {
      ret.push("#en");
      ret.push("#punt");
    }
  } else {
    if (time.getMinutes() >=13 && time.getMinutes() < 18) {
      ret.push("#un-quart");
      ret.push("#quart");
    } else if (time.getMinutes() >= 18 && time.getMinutes() < 23) {
      ret.push("#un-quart");
      ret.push("#quart");
      ret.push("#i");
      ret.push("#i-cinc");
    } else if (time.getMinutes() >= 23 && time.getMinutes() < 28) {
      ret.push("#un-quart");
      ret.push("#quart");
      ret.push("#i");
      ret.push("#i-deu")
    } else if (time.getMinutes() >= 28 && time.getMinutes() < 33) {
      ret.push("#dos-quarts");
      ret.push("#quart");
      ret.push("#s");
    } else if (time.getMinutes() >= 33 && time.getMinutes() < 38 ) {
      ret.push("#dos-quarts");
      ret.push("#quart");
      ret.push("#s");
      ret.push("#i");
      ret.push("#i-cinc");
    } else if (time.getMinutes() >= 38 && time.getMinutes() < 43) {
      ret.push("#dos-quarts");
      ret.push("#quart");
      ret.push("#s");
      ret.push("#i");
      ret.push("#i-deu");
    } else if (time.getMinutes() >= 43 && time.getMinutes() < 48) {
      ret.push("#tres-quarts");
      ret.push("#quart");
      ret.push("#s");
    } else if (time.getMinutes() >= 48 && time.getMinutes() < 53) {
      ret.push("#tres-quarts");
      ret.push("#quart");
      ret.push("#s");
      ret.push("#i");
      ret.push("#i-cinc");
    } else if (time.getMinutes() >= 53 && time.getMinutes() < 58) {
      ret.push("#tres-quarts");
      ret.push("#quart");
      ret.push("#s");
      ret.push("#i");
      ret.push("#i-deu");
    }

    hora('d', hour, ret);
  }

  return ret.join(", ");
}


function hora(art, hour, ret)
{
  var hours = [ "#una", "#dues", "#tres", "#quatre", "#cinc", "#sis", "#set", "#vuit", "#nou", "#deu", "#onze", "#dotze" ];

  if (hour > 12) {
    hour -= 12;
  }

  if (art == "d") {
    ret.push("#d");
    if (hour != 1 && hour != 11) {
      ret.push("#e");
    }
  } else if (art == "l") {
    ret.push("#l");
    if (hour != 1) {
      ret.push("#es");
    }
  }

  ret.push(hours[hour - 1]);
}

var current_time = '';

function change_time() {
  var new_time = quina_hora(new Date());

  if (new_time != current_time) {
    $("#rellotge span").removeClass("shine");
    $(new_time).addClass("shine");
    current_time = new_time;
  }
}