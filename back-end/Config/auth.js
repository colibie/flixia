
exports.facebookAuth = {
    'clientID'      : '1310150985788548', // App ID
    'clientSecret'  : '86572fa24275ee9375b53e0afb94713b', // App Secret
    'callbackURL'   : 'http://localhost:3000/auth/facebook/callback',
    'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API

}