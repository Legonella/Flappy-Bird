'use strict'
const cvs = document.getElementById('canvas')
const ctx = cvs.getContext('2d')

let bird = new Image()
let bg = new Image()
let fg = new Image()
let pipeUp = new Image()
let pipeBottom = new Image()

bird.src = 'img/bird.png'
bg.src = 'img/bg.png'
fg.src = 'img/fg.png'
pipeUp.src = 'img/pipeUp.png'
pipeBottom.src = 'img/pipeBottom.png'

// Audio
const fly = new Audio()
const score_audio = new Audio()

fly.src = 'audio/fly.mp3'
score_audio.src = 'audio/score.mp3'

let gap = 90

// When you press any button
document.addEventListener('keydown', moveUp)

function moveUp() {
    yPos -= 25
    fly.play()
}

// Creating blocks
const pipe = []

pipe[0] = {
    x: cvs.width,
    y: 0,
}

let score = 0