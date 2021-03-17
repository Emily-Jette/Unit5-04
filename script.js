// this code will change which image is displayed
document.getElementById('button1').addEventListener('click', imageChange)

function imageChange () {
  document.getElementById('picture').src = "./images/whitecat.jpeg"
}

// this code will change the text that is displayed
document.getElementById('button2').addEventListener('click', textChange)

function textChange () {
  document.getElementById('text').innerHTML = 'Dogs are better than cats, but strawberries are better than pineapples. However,nobody is better than Harry Styles.'
  document.getElementById('text').style.color = 'firebrick'
  document.getElementById('text').style.fontFamily = 'fantasy'
}

// this code will make text hide using the display tag
document.getElementById('button3').addEventListener('click', textHide)

function textHide () {
  document.getElementById('text2').style.display = "none"
}

// this code will make text hide using the display tag
document.getElementById('button4').addEventListener('click', textAppear)

function textAppear () {
  document.getElementById('text2').style.display = "block"
}

// this code will change the background color
document.getElementById('button5').addEventListener('click', colorChange)

function colorChange () {
  document.body.style.backgroundColor = 'steelblue'
}
