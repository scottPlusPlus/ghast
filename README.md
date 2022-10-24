# Github Action Proof of Concept

Proof of concept for a github action running on an issue label.

1. Open this webapp hanging out in a heroku container:
https://fathomless-sands-89325.herokuapp.com

(falls asleep every five minutes or so.  this will NOT WORK after Nov 28 with Heroku kills its free tier)

2. Create a new issue in this repo
3. Label the issue as "approved"
4. wait ~60 seconds
5. check out https://fathomless-sands-89325.herokuapp.com/show to see all the data sent from the Github Action to the webserver.
