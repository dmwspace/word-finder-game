# Word Finder Game

Inspired by Boggle, this is a web game located at https://word-finder-game.herokuapp.com/. The object of the game is to find words of three or more letters by clicking adjacent letters and using no letter more than once.

### Why I created this

I created this game because I have always liked the game of Boggle and I thought that this would be a good exercise to try to figure out the logic to code this kind of game. 

### Technologies used

React was used to code this game. React Router was used to switch between the game page and the rules page while functional components were used for the entire project. A React package called react-stay-scrolled was used to keep the submitted word list properly scrolled so that the user could see the most recent word that was entered.

For styling, vanilla CSS was used and the game was deployed via Heroku.

### Problems

The most basic problem was how to make sure that the player could not make illegal moves on the board. The solution was twofold: First, create an object that would delineate the moves that are legal for the player. If a tile was not adjacent to a previously clicked tile, then the key-value pair of the two tiles did not exist and nothing occurred. The click would only be legal if the key-value pair actually did exist. Second, a used tiles array kept track of tiles that were already clicked before a word was submitted. The two methods together ensured that a tile was both legal and unused before it would be added to the word.

A second problem was that the submitted word list was staying at the beginning of the list and wouldn’t scroll. Ultimately the solution that I found was, as I stated above, to use a React package called react-stay-scrolled. This package allowed the submitted word list to stay scrolled at the bottom of the list where each new word was placed.

A third problem was that I needed to find a word list that I could use to look for matches for words that have been submitted. Eventually I found words_dictionary.json, a json file that contains some 250000 words and turned out to be excellent for this use.

