// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function isPalindrome(string) {
    
    let stringReverse = '';
    
    for (let i = string.length - 1; i >= 0; i--) {
        stringReverse += string[i];
    }

    //ripulisco le stringhe
    string = string.toLowerCase().replace(/\s/g, '');
    stringReverse = stringReverse.toLowerCase().replace(/\s/g, '');

    if (string === stringReverse) {
        return true;
    } else {
        return false;
    }
}

const string = prompt('Scrivi una parola');

if (isPalindrome(string)) {
    console.log(string + ' è palindroma');
} else {
    console.log(string + ' non è palindroma');
}