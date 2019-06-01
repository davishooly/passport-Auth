const passport = require('passport');
const GitHubStrategy = require('passport-github');

console.log(process.env);
passport.use( new GitHubStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL:  process.env.CALLBACK_URL
},(accessToken, refreshToken,  profile , done )=> {
    done(profile);
}));
