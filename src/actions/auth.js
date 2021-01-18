import { firebase, googleAuthProvider, GithubAuthProvider, TwitterAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid: uid
})

export const startLoginGoogle = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const startLoginGithub = () => {
    return () => {
        return firebase.auth().signInWithPopup(GithubAuthProvider)
    }
}

export const startLoginTwitter = () => {
    return () => {
        return firebase.auth().signInWithPopup(TwitterAuthProvider)
    }
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
}