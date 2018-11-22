/* USEFUL METHODS */

//Numbers and Arrays

function generaNumeroCasualeTra(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generaNumeroPositivoCon(maxNum) {
  return Math.ceil(Math.random() * maxNum);
}

function dammiSommaNumeriPariIn(arrayNumeri) {
  var sum = 0;

  for (var cont = 0; cont < arrayNumeri.length; cont++) {
    sum += (cont % 2 != 0) ? 0 : arrayNumeri[cont];
  }

  return sum;
}

function dammiSommaNumeriDispariIn(arrayNumeri) {
  var sum = 0;

  for (var cont = 0; cont < arrayNumeri.length; cont++) {
    sum += (cont % 2 != 0) ? arrayNumeri[cont] : 0;
  }

  return sum;
}

function estraiPosizioneNumeroPiuAltoPresenteIn(arrayNumeri) {

  var posizioneArrayVincitore = 0;
  var numeroPiuAlto = 0;

  for (var i = 0; i < arrayNumeri.length; i++) {
    //controlla che gli altri numeri non siano più alti
    if (arrayNumeri[i] > numeroPiuAlto) {
      posizioneArrayVincitore = arrayNumeri.indexOf(arrayNumeri[i]);
      numeroPiuAlto = arrayNumeri[i];
    }
  }

  return posizioneArrayVincitore;
}

function sommaTuttiGliElementiDi(arrayDiNumeri) {
  var sum = 0;
  for (var i = 0; i < arrayDiNumeri.length; i++) {
    sum += array[i];
  }

  return sum;
}

function generaArrayConNumeriCasualiPositiviFinoA(maxNum, numElementiArray) {
  var customArray = [];

  for (var i = 0; i < numElementiArray; i++) {
    customArray.push(generaNumeroPositivoCon(maxNum));
  }

  return customArray;
}

function chiedimiNumeriDaSommareFinoACheIlTotaleSommaE(maxNum) {
  var chosenNumbers = [];
  var sum = 0;

  while (sum < maxNum) {

    var chosenNumber = parseInt(prompt('inserisci un nuovo numero'));

    sum += chosenNumber;
    chosenNumbers.push(chosenNumber);
    console.log(sum);
  }

}

function chiedimiElementiFincheNonHoStessaLunghezzaPer(array1, array2) {
  while (array2.length != array1.length) {
    var newElement = prompt('add an element');
    if (array2.length < array1.length) {
      array2.push(newElement);
    } else {
      array1.push(newElement);
    }
  }
}

function risultaPari(numero) {
  return (numero % 2 == 0) ? true : false;
}

//Objects

function stampaTutteLeProprietaDi(oggetto) {
  for (var key in oggetto) {
    document.writeln(key + ': ' + oggetto[key] + '<br>');
  }
}

function stampaTutteLeProprietaDiIstanzeIn(arrayDiOggetti) {
  for (var i = 0; i < arrayDiOggetti.length; i++) {
    document.writeln('OGGETTO IN POSIZIONE: ' + arrayDiOggetti.indexOf(arrayDiOggetti[i]) + '<br>');
    for (var key in arrayDiOggetti[i]) {
      document.writeln(key + ': ' + arrayDiOggetti[i][key] + '<br>');
    }
  }
}

function dammiIndiceValoreMinoreIn(arrayOggetti, nomeChiave) {

  var valoreMinore = 0;
  var posizioneArrayConValoreMinore = 0;

  for (var i = 0; i < arrayOggetti.length; i++) {

    //Se è la prima iterazione valoreMinore è
    //uguale al valore della prima chiave
    if (arrayOggetti.indexOf(arrayOggetti[i]) == 0) {
      valoreMinore = arrayOggetti[i][nomeChiave];
    }//altrimenti controlla sempre se la nuova
    //iterazione è inferiore a valoreMinore
    else if (arrayOggetti[i][nomeChiave] < valoreMinore) {
      valoreMinore = arrayOggetti[i][nomeChiave];
      posizioneArrayConValoreMinore = arrayOggetti.indexOf(arrayOggetti[i]);
    }
  }

  console.log(valoreMinore);
  return posizioneArrayConValoreMinore;
}

//Strings

//restituisce la parola al contrario con feedback in console
function reverse(word) {

  var reversedWord = '';

  for (var i = word.length; i >= 0; i--) {
    reversedWord = reversedWord.concat(word.charAt(i));
  }

  console.log('La tua parola è ' + word);
  console.log('La tua parola al contrario è ' + reversedWord);
  return reversedWord;
}

//Funzione che sfruttando la precedente reverse controlla
//se la parola in input è palindroma  con feedback in console
function risultaPalindroma(word) {
  if (word == reverse(word)) {
    console.log(word + ' è un parola palindroma');
    return true;
  }

  console.log(word + ' non è una parola palindroma');
  return false;
}

//"censura" fa affidamento su trasformaPrimaLetteraInMaiuscoloDi()
//e sostituisce anche occorrenze della parola contenute in altre.
function censura(paroleProibite, testoSostitutivo, testoIniziale) {
  var contatoreCensurate = 0;
  for (var i = 0; i < paroleProibite.length; i++) {
    while (esisteRegolareOConPrimaMaiuscolaMinuscola(paroleProibite[i], testoIniziale)) {

      var tuttaMinuscola = paroleProibite[i].toLowerCase();
      var conPrimaMaiuscola = conPrimaLetteraMaiuscola(paroleProibite[i]);

      //Processerà  in tutte le sue occorrenze prima solo...
      if (testoIniziale.includes(paroleProibite[i])) {//la parola regolare
        testoIniziale = testoIniziale.replace(paroleProibite[i], testoSostitutivo);
      } else if (testoIniziale.includes(tuttaMinuscola)) {//la parola minuscola
        testoIniziale = testoIniziale.replace(tuttaMinuscola, testoSostitutivo);
      } else if (testoIniziale.includes(conPrimaMaiuscola)) {//la parola con prima lettera Maiuscola
        testoIniziale = testoIniziale.replace(conPrimaMaiuscola, testoSostitutivo);
      }

      //..un ciclo alla volta incrementando il contatore
      contatoreCensurate = contatoreCensurate + 1;
    }
  }

  document.writeln('<br>Parole censurate totali: ' + contatoreCensurate + '<br>Il testo censurato è:<br>' + testoIniziale);
  console.log('testo censurato ok\nParole censurate ' + contatoreCensurate);
  return testoIniziale;
}

function trasformaPrimaLetteraInMaiuscoloDi(parola) {
  return parola[0].toUpperCase().concat(parola.slice(1));
}

function esisteRegolareOConPrimaMaiuscolaMinuscola(parola, testo) {

  var tuttoMinuscolo = parola.toLowerCase();
  var primaMaiuscola = conPrimaLetteraMaiuscola(parola);

  if (testo.includes(parola) || testo.includes(tuttoMinuscolo) || testo.includes(primaMaiuscola)) {
    return true;
  }

  return false;
}
