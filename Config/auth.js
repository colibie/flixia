
exports.facebookAuth = {
    'clientID'      : '270789443749446', // App ID
    'clientSecret'  : 'b1ddce6ae73d0bebc7fc922e72fe4069', // App Secret
    'callbackURL'   : 'https://flixia.herokuapp.com/auth/facebook/callback',
    'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API

}