Page setup
- Home
  - what will be on the home page
  - play button to find for matches
  - link share button to play with friend
  - to play needs to login
- Profile
  - match history
  - winrate 
  - change username
  - user in database:
    - username
    - 
- Game
  - a game will just be an entry in the games
  - will contain list of players
- database
  - users (by userid)
    - username
    - stats
- components
  - Login component, no seperate page, when user is not logged in we can just display that in a place
    - will handle login registration or login as guest

firestore
- match history
- winrate
- stats

realtime
- user game lobby
- game states for all games
- queue of people looking for match

so player can click on button to look for match, this will put their user id in the queue in the realtime database. Once two people are in the queue they will 
