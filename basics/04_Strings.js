const name = "pranita"
const repoCount = 50

console.log(`name is ${name} and count ${repoCount}`)

const gameName = new String("pranita")
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf("n"))

const newString = gameName.substring(0, 4)

const anotherString = gameName.slice(-4, 6)

const newsone = "    password   "
console.log(newsone.trim())

const url = "https://prsn.com/pranita%20patil"
console.log(url.replace('%20' , '-'))

console.log(url.includes('pran'))



