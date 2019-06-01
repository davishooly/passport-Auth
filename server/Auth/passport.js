const passport = require('passport');
const GitHubStrategy = require('passport-github');


passport.use( new GitHubStrategy({
  clientID: '6dc5076fb8f967648124',
  clientSecret: 'dbee28b8ea49dbd096f86c53d2868f9c18a2a1ea',
  callbackURL:  'http://127.0.0.1:4000/repoHunter'
},(accessToken, refreshToken,  profile , done )=> {
    done(profile);
}));
