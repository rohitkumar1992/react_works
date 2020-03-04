'use strict';

function stripTags(string, remove_breaks) {
  string = string.replace(/<(script|style)[^>]*?>.*?<\/\\1>/si, '');

  // Replace all Tags
  string = string.replace(/<[^>]*>/g, '');
  if (remove_breaks) {
    string = string.replace(/[\r\n\t ]+/, ' ');
  }

  return trim(string);
}

function trim(str, charlist) {
  var whitespace = [
    ' ',
    '\n',
    '\r',
    '\t',
    '\f',
    '\x0b',
    '\xa0',
    '\u2000',
    '\u2001',
    '\u2002',
    '\u2003',
    '\u2004',
    '\u2005',
    '\u2006',
    '\u2007',
    '\u2008',
    '\u2009',
    '\u200a',
    '\u200b',
    '\u2028',
    '\u2029',
    '\u3000'
  ].join('');
  var finalString = '';
  var l = 0;
  var i = 0;
  str += '';

  if (charlist) {
    whitespace = (charlist + '').replace(/([[\]().?/*{}+$^:])/g, '$1');
  }

  l = str.length;
  for (i = 0; i < l; i += 1) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(i);
      break;
    }
  }

  l = str.length;
  for (i = l - 1; i >= 0; i -= 1) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(0, i + 1);
      break;
    }
  }

  if (whitespace.indexOf(str.charAt(0)) === -1) {
    finalString = str;
  }

  return finalString;
}

function trimWords(text, numWords, more) {
  if (!numWords) {
    numWords = 55;
  }
  if (!more) {
    more = '&hellip;';
  }

  text = stripTags(text);
  var wordsArray = text.split(/[\n\r\t ]+/, numWords + 1);
  var sep = ' ';

  if (wordsArray.length > numWords) {
    wordsArray.pop();
    text = wordsArray.join(sep);
    text = text + more;
  } else {
    text = wordsArray.join(sep);
  }

  return text;
}

exports.trimWords = trimWords;
