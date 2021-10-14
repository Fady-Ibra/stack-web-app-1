import './style.css';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAqAFF1JHs4PgaFpG6H3LDUBihHkjcp0rI',
  authDomain: 'ai-web-demo-01.firebaseapp.com',
  projectId: 'ai-web-demo-01',
  storageBucket: 'ai-web-demo-01.appspot.com',
  messagingSenderId: '169830187364',
  appId: '1:169830187364:web:8f05b08474490c1a04ba71',
  measurementId: 'G-3M8WQ79J1F',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
