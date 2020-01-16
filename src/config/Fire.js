import firebase from 'firebase';

const config ={
    apiKey: "AIzaSyBWJF62zIPbBXWZ_h5W4D07FxsR7Tgyw78",
    authDomain: "stockauth-20eaa.firebaseapp.com",
    databaseURL: "https://stockauth-20eaa.firebaseio.com",
    projectId: "stockauth-20eaa",
    storageBucket: "stockauth-20eaa.appspot.com",
    messagingSenderId: "208623172815",
    appId: "1:208623172815:web:96092379d42d8d63050bba"
}
const fire = firebase.initializeApp(config);
export default fire;