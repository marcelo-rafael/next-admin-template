import firebase from 'firebase/app'
import 'firebase/auth'

if(!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.EXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.EXT_PUBLIC_PROJECT_ID
  })
}

export default firebase