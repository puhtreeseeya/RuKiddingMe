import OAuthManager from 'react-native-oauth';

const manager = new OAuthManager('firestackexample')
manager.configure({
  google: {
    callback_url: `io.fullstack.FirestackExample:/oauth2redirect`,
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_SECRET'
  }
});

manager.authorize('google', {scopes: 'profile email'})
.then(resp => console.log(resp))
.catch(err => console.log(err)); 