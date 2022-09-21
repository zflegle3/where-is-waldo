# Where's Waldo Photo Tagging App

[Live Demo Here!](https://zflegle3.github.io/where-is-waldo/)

## Summary
This project, made with React and Firebase, was built as part of The Odin Project JavaScript curriculum in order to practice using as backend to store data. This application allows users to play the game Where's Waldo by selecting locations on the gameboard where they think the 3 hidden characters are located. The selected coordinates are then compared with the character coordinates stored with a Firebase database to determine if the selection was correct. 

## Features
* Use of Firebase Cloud Firestore to store game data


## Gameplay Example
1. Select a game by clicking the image of the desired gameboard.

![demo image](https://raw.githubusercontent.com/zflegle3/where-is-waldo/main/src/images/demo1.png)

2. To play, click on the image where a character is located and use the pop-up menu to select which character was found. If the selection is correct the character's name will appear green with a checkmark in the scoreboard at the top of the page.

![demo image](https://raw.githubusercontent.com/zflegle3/where-is-waldo/main/src/images/demo3.png)

3. Once all 3 characters have been found submit your name using the pop-up submission form.

4. Select the "leaderboard" tab to display the high scores or select the "Where's Waldo" icon to return home and play again.
