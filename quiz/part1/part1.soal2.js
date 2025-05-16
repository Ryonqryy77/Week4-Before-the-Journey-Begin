/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
  let newStr = str.split('');
  let result = "";
  for (let i = 0; i < newStr.length; i++) {
    let huruf = newStr[i];
    if ('aiueoAIUEO'.includes(huruf)) {
      let code = huruf.charCodeAt(0);
      let nextAlph = String.fromCharCode(code + 1);
      result += nextAlph;
    } else {
      result += huruf;
    }
  }
  return result
}

function reverseWord (str) {
  return str.split('').reverse().join('')
}

function setLowerUpperCase (str) {
  hasil = "";
  for (let i = 0; i < str.length; i++) {
    let chc = str[i];
    if (chc === chc.toLowerCase()) {
      hasil += chc.toUpperCase();
    } else {
      hasil += chc.toLowerCase();
    }
  }
  return hasil;
}

function removeSpaces (str) {
  return str.replace(/\s/g, '');
}

function passwordGenerator (name) {
  if (name.length <= 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
    let changed = changeVocals(name);
    let twste = reverseWord(changed);
    let bigSmall = setLowerUpperCase(twste);
    let end = removeSpaces(bigSmall);
    return end;
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
