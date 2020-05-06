const HashMap = require('./hashMap')

function removeDuplicates(string) {
    string = string.split("")
    let newString = ""
    const word = new HashMap()

    console.log(string.length)

    for(let i = 0; i < string.length; i++) {
        word.set(i, string[i])
    }

    for(let i = 0; i < string.length; i++) {
        if(!newString.includes(word.get(i))) {
            newString += string[i]
        }
    }

    console.log(word)
    return newString
}

console.log(removeDuplicates("google all that you think can think of"))