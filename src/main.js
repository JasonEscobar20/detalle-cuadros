import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase';

import App from './App.vue'
import router from './router'

// // Initialize Firebase
// initializeApp(firebaseConfig);
// getAnalytics(firebaseApp)
// getAnalytics(firebaseApp);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
