var maxCaracteres = 140;
var textarea = document.getElementById('message');
var btnTweet = document.getElementById('btn-enviar');
var countText = document.getElementById('count');

textarea.addEventListener("keydown",autosize);
textarea.addEventListener("keyup",countCharacter);
textarea.addEventListener("keydown",countCharacter);
btnTweet.addEventListener("click", createTweet);

function createTweet(){
  var containerTweets = document.getElementById("tweets");
  var reference = containerTweets.getElementsByTagName("div")[0];
  var newTweet = document.createElement("div");
  var textTweet = document.createElement("p");
  var hourTweet = document.createElement("span");

  textTweet.textContent = textarea.value;
  hourTweet.textContent = hourTweetCreate();

  newTweet.classList.add("nuevoMensaje");
  newTweet.appendChild(textTweet);
  newTweet.appendChild(hourTweet);
  containerTweets.insertBefore(newTweet, reference);

  textarea.value = "";
  countCharacter()
  disableAndEnableBtn();
}

function hourTweetCreate() {
  var date = new Date();
  var hora = date.getHours();
  var minute = date.getMinutes();
  var horaCompleta;
  if (hora > 12) {
    horaCompleta = hora - 12 + ":" + minute + " PM";
  } else {
    horaCompleta = hora + ":" + minute + " AM";
  }
  return horaCompleta;
}

function countCharacter() {
  var longitud = parseInt(textarea.value.length);
  if(longitud < maxCaracteres) {
		countText.textContent = maxCaracteres - longitud;
	}else {
		countText.textContent = maxCaracteres - longitud;
	};
  changeColorCount(longitud);
  disableAndEnableBtn();
}

function changeColorCount(longitud){
  if (longitud >= 120 && longitud <= 129){
		countText.classList.add('text-blue');
		countText.classList.remove('text-red');
    countText.classList.remove("text-black");
	} else if (longitud >= 130) {
		countText.classList.add('text-red');
		countText.classList.remove('text-blue');
    countText.classList.remove("text-black");
	}	else {
		countText.classList.remove('text-red');
		countText.classList.remove('text-blue');
    countText.classList.add("text-black");
	};
}

function disableAndEnableBtn(){
  var text = textarea.value;

  if (text.trim().length == 0 || text.length > maxCaracteres) {
    btnTweet.classList.add("btn-grey");
    btnTweet.disabled = true;
  } else {
    btnTweet.classList.remove("btn-grey")
    btnTweet.disabled = false;
  }
}

function autosize(){
  event.target.style.cssText = 'height:auto;';
  event.target.style.cssText = 'height:' + event.target.scrollHeight + 'px';
}
