# Where's Waldo Photo Tagging App

[Live Demo Here!](https://zflegle3.github.io/where-is-waldo/)

## Summary
This project was built as part of The Odin Project Fullstack JavaScript curriculum to practice using a backend to store data. It allows users to play the game Where's Waldo by selecting locations on the gameboard where they think the 3 hidden characters are located. The selected coordinates are compared with the character's actual coordinates to determine if the selection was correct. Checkout the demo link above and the gameplay instuctions below to give it a try!

## Features
* Where's Waldo gameplay with two different levels
* Score submission without requiring player login
* High Score Leaderboard display filtered by the game played and sorted by player score
* Firebase Cloud Firestore datbase to store game data and high score data

## Technologies
* React JS
* React-router-dom
* Firebase Cloud Firestore Database
* CSS

## Gameplay Example
1. Select a level by clicking the image of the desired gameboard.

![demo image](https://raw.githubusercontent.com/zflegle3/where-is-waldo/main/src/images/demo1.png)

2. To play, click on the gameboard where a character is found and use the pop-up menu to select which character. If the selection is correct the character's name will appear green with a checkmark in the scoreboard at the top of the page.

![demo image](https://raw.githubusercontent.com/zflegle3/where-is-waldo/main/src/images/demo3.png)

3. Once all 3 characters have been found submit your name using the submission form modal.

4. Select the "leaderboard" tab to display the high scores or select the "Where's Waldo" icon to return home and play again.
