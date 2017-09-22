import * as firebaseModule from 'firebase'; 

const firebaseConfig = {
	apiKey: "AIzaSyBMtacC0cQEd_K9jwtCi4ZZbf8S5m0HWoM",
  authDomain: "rustudying-ca789.firebaseapp.com",
  databaseURL: "https://rustudying-ca789.firebaseio.com",
  projectId: "rustudying-ca789",
  storageBucket: "rustudying-ca789.appspot.com",
  messagingSenderId: "552749906424"
};

const firebase = firebaseModule.initializeApp(firebaseConfig);
export default firebase; 