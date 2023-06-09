// creating an array using [ ] and comma sperated liust of values
// index of an array starts with 0
const myColors = ["red", "green", "blue", "white", "black", "tomato"]

// access the element with id and save in a variable
const messageList = document.getElementById("colorMessages")
// console.log(messageList.children)

messageList.children[0].innerHTML += myColors[3]

myColors[4] = "cyan"

messageList.children[1].innerHTML += myColors[4]
// messageList.children[1].style.background = myColors[4]

myColors.push("jetblack")

messageList.children[2].innerHTML += myColors

myColors.pop()
messageList.children[3].innerHTML += myColors

myColors.shift()
messageList.children[4].innerHTML += myColors

myColors.unshift("hotpink")
messageList.children[5].innerHTML += myColors

myColors.splice(2, 0, "royalblue")
messageList.children[6].innerHTML += myColors

// sorting array using sort() method, default for all lowercase text is ascending alphabetical
myColors.sort()
messageList.children[7].innerHTML += myColors

// concatenating arrays using concat()
const darkColors = ["darkseagreen", "darkred", "darkgreen"]

const allColors = myColors.concat(darkColors)
// messageList.children[8].innerHTML += myColors
messageList.children[8].innerHTML += myColors.join(" - ")

const searchMessage = document.getElementById("colorResponse")

function doYouHaveColor(colorName) {
    let colorIndex = allColors.indexOf(colorName)
    if(colorIndex >= 0){
        searchMessage.innerHTML = "Yes, we have" + colorName + "this color"
    } else{
        searchMessage.innerHTML = `No, we dont have ${colorName} color`
    }
}

const scores = [43, 68, 35, 82]

const scoreMessageList = document.getElementById("scoreMessages").children
//console.log(scoreMessageList)

// create a new array passingScore out of a scores array by filtering the values based on functions that return the values that are greater than 50
const passingScores = scores.filter(score => score > 50)
//console.log(passingScores)
scoreMessageList[0].innerHTML += passingScores

const doubleScores = scores.map(score => score * 2)
scoreMessageList[1].innerHTML += doubleScores

const totalDoubleScore = doubleScores.reduce(
    (accumulator, score) => accumulator + score)
    scoreMessageList[2].innerHTML += totalDoubleScore

const coloredBoxsection = document.getElementById("coloredBoxes")

for (let color of allColors) {
    coloredBoxsection.innerHTML += `<div class="box" style="background-color: ${color}"></div>  `
}