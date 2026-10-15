/**
 *    at() : It retrives the character at a specific index and supports negative integers to count backwards from the end of the string.
 */


let username = "Laxman Krishnamurti";
console.log(username.at(0));
console.log(username.at(1));
console.log(username.at(2));
console.log(username.at(3));
console.log(username.at(-1));
console.log(username.at(-2));
console.log(username.at(-3));

/**
 *    charAt() : retrives the character at a specific index from the start of the string. Unlinke at(), it does not support negatie numbers and returns an empty string ("") if the index is out of bounds.
 */

console.log("chatAt Outputs")
console.log(username.charAt(1));
console.log(username.charAt(-1));   // add a blank line

/**
 *    charCodeAt() : retrives the UTF-16 code unit (in integer between 0 to 65535). Returns an integer representing the character's code. If the index is out of bounds, it return NaN.
 */

console.log("charCodeAt Outputs");
console.log(username.charCodeAt(1));


/**
 *    codePointAt() : 
 */

let username1 = "🚀 Laxman Krishnamurti";

console.log("codePointAt Outputs");
console.log(username1.charCodeAt(0));     // 55357 (broken, first half of that pair, which is incomplete, unusable fragment on its own)
console.log(username1.codePointAt(0));    // 128640

/**
 *    - Always use `codePointAt()` if our system needs to process text that might contain emojis, matematical symbols, or diverse international scripts. 
 *    - Use `charCodeAt()` only if you are working purely with standard English alphanumeric text (ASCII - American Standard Code for Information Interchange) or doing legacy binary/buffer processing. 
**/


/**
 *    concat() : joins two to more string together and returns a combined new string. It does not modify the original strings. 
 */
console.log("concat Outputs");
console.log(username.concat(" is", " a quant developer"));
console.log(username.concat(" is a quant developer"));

let first = "Laxman";
let second = "Krishnamurti";
let third = "is a";
let forth = "quant";
let fifth = "developer";

console.log(first.concat(second, third, forth, fifth)); // LaxmanKrishnamurtiis aquantdeveloper
console.log(`${first} ${second} ${third} ${forth} ${fifth}`); // Laxman Krishnamurti is a quant developer

/**
 *    endsWith() : determines whether a string ends with the characters of a specified string. Requires two args : searchString, endPosition or index up to which the string should be searched (optional)
 */

console.log("endsWith Outputs");
console.log(username.endsWith("i", 5));   // false
console.log(username.endsWith("i"));      //true


/**
 *    includes() : checks if a specific substring can be found anywhere within the string.
 *                Two arguments
 *                      - searchString
 *                      - index (optional)
 */

console.log("includes method Outputs");
console.log(username.includes("Laxman")); // true


/**
 *    indexOf() : returns the index of the first occurrence of a specified substring.
 *    Two Agruments
 *          - searchString
 *          - position(optional)
 */

console.log("indexOf Outputs");
console.log(username.indexOf("L"));       // 0
console.log(username.indexOf("Lax"));     // 0
console.log(username.indexOf("Laxman"));  // 0

/**
 *    isWellFormed() : checks if a string contains any `lone surrogates`, ensuring it is valid UTF-16 text that won't cause errors when processed by external systems. 
 * 
 *    Arguments : None
 *    Returns   : boolean value
 * 
 * To put it simply, a lone surrogate is a broken piece of computer code that happens when text gets corrupted or split up incorrectly.
Think of it like a broken pair of shoes.
In certain text formats (like UTF-16), emojis and rare characters are stored as a matching pair of codes: a "left shoe" (high surrogate) and a "right shoe" (low surrogate).
• A healthy pair: Left Shoe + Right Shoe = 🌟 (Emoji works perfectly)
• A lone surrogate: Left Shoe + Missing =  (Error / Broken text)
A lone surrogate is just that single, lonely "shoe" left behind without its partner, which causes computers to display error blocks or crash if the code isn't cleaned up.
 */

const rocketEmoji = "🚀";
console.log(rocketEmoji.isWellFormed());  // true
console.log(username.isWellFormed());     // true

/**
 *    lastIndexOf() : Returns the last occurrence of a substring in the string, or -1 if it is not present.
 */

console.log("lasIndexOf Outputs");
console.log(username.lastIndexOf("L"));
console.log(username.lastIndexOf("L"));
console.log(username.lastIndexOf("Laxman"));

let username2 = "Chetan Maharashtra";
console.log(username2.lastIndexOf("a"));

/**
 *    length: Returns the length of string object
 */
console.log(`lenght: ${username.length}`);


console.log(`localCompare: ${username.localeCompare(username)}`);
console.log(`match: ${username.match(username, username1)}`);      // match: Laxman Krishnamurti
console.log(`match: ${username.match(username2)}`);               // match: null
console.log(`match: ${username.matchAll(username1)}`);            // match: [object RegExp String Iterator]
console.log(`normalize: ${username.normalize()}`);                // normalize: Laxman Krishnamurti
console.log(`normalize: ${username.normalize("NFD")}`);           // normalize: Laxman Krishnamurti
console.log(`normalize: ${username.normalize("NFKC")}`);          // normalize: Laxman Krishnamurti
console.log(`normalize: ${username.normalize("NFKD")}`);          // normalize: Laxman Krishnamurti
console.log(`padEnd: ${username.padEnd(3)} ;`);                   // padEnd: Laxman Krishnamurti ;
console.log(`padEnd: ${username.padEnd(30)} ;`);                  // padEnd: Laxman Krishnamurti            ;
console.log(`padStart: ${username.padStart(50)}`);                // padStart:                                Laxman Krishnamurti
console.log(`repeat: ${username.repeat()}`);                      // repeat: 
console.log(`repeat: ${username.repeat(10)}`);                    // repeat: Laxman KrishnamurtiLaxman KrishnamurtiLaxman KrishnamurtiLaxman KrishnamurtiLaxman KrishnamurtiLaxman KrishnamurtiLaxman KrishnamurtiLaxman KrishnamurtiLaxman KrishnamurtiLaxman Krishnamurti
console.log(`replace: ${username.replace("Laxman", "Ranjani")}`); // replace: Ranjani Krishnamurti
console.log(`replaceAll: ${username.replaceAll("a","b")}`);       // replaceAll: Lbxmbn Krishnbmurti
console.log(`search: ${username.search("an")}`);      // 4 (best for regExp)
console.log(`slice: ${username.slice(1,2)}`);          // a
console.log(`slice: ${username.slice(1)}`);           // axman Krishnamurti
console.log(`split: ${username.split(" ")}`);         // split: Laxman,Krishnamurti
console.log(`split: ${username.split("a")}`);         // split: L,xm,n Krishn,murti
console.log(`split: ${username.split("ax")}`);        // split: L,man Krishnamurti
console.log(`startsWith ${username.startsWith("Sonu")}`);        // fasle
console.log(`subString ${username.substring(1,2)}`)         // a
console.log(`subString ${username.substring(1,5)}`)         // axma
console.log(`subString ${username.substring(3)}`)         // man krishnamurti
console.log(`toLocaleLowerCase: ${username.toLocaleLowerCase()}`); // toLocaleLowerCase: laxman krishnamurti
console.log(`toLocalUpperCase: ${username.toLocaleUpperCase()}`); // toLocalUpperCase: LAXMAN KRISHNAMURTI

let spaceVariable = "      Space Bar      ";
console.log(`lenght of spaceVariable is: ${spaceVariable.length}`);     // 21
console.log(`spaceVariable: ${spaceVariable.trim()}`);
console.log(`after trimming: ${spaceVariable.length}`);     // It doesn't modify the original variable
console.log(`lenght along-side trimming: ${spaceVariable.trim().length}`);    // lenght along-side trimming: 9

console.log(`trimEnd: before ${spaceVariable.length} ${spaceVariable.trimEnd()} after ${spaceVariable.trimEnd().length}`); // trimEnd: before 21       Space Bar after 15

console.log(`trimStart: before length: ${spaceVariable.length} after length: ${spaceVariable.trimStart().length}`); //trimStart: before length: 21 after length: 15

console.log(`${spaceVariable.valueOf()}`);