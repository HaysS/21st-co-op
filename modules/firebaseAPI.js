import * as firebase from 'firebase';
import * as _ from 'lodash'
import Exponent from 'expo';

export const loginUser = (accessToken) => {
    const provider = firebase.auth.FacebookAuthProvider //declare fb provider
    const credential = provider.credential(accessToken) //generate fb credential
    return firebase.auth().signInWithCredential(credential) // signin to firebase using facebook credential
}

export const logoutUser = () => {
  return firebase.auth().signOut()
}

export const updateUser = (uid, key, value) => {
  firebase.database().ref().child('users').child(uid)
    .update({[key]:value})
}

export const getQuestions = (func) => {
  firebase.database().ref().child('questions').once('value', (snap) => {
    if (snap.val()) {
      const questions = snap.val().slice(0, 4)
      func(questions)
    }})  
}

export const getQuestion = (idString, func) => {
  firebase.database().ref().child('questions').child(idString).once('value', 
    (snap) => { 
      if(snap.val())
        func(snap.val())
    })
}

export const mergeUser = (uid, newData) => {
  console.log('newData', newData)
  const firebaseRefAtUID = firebase.database().ref().child('users/'+uid)
  return firebaseRefAtUID.once("value").then((snap) => {
    const defaults = {
        maxDistance: 5,
        ageRange: [18,24],
        uid: uid,
        birthday: "01/01/1992",
        isSearchingForGame: false,
    }
    const current = snap.val()
    const mergedUser = {...defaults, ...current, ...newData}
    firebaseRefAtUID.update(mergedUser)
  })  
}

export const unlikeProfile = (userUid, profileUid) => {
  firebase.database().ref().child('relationships').child(userUid).child('liked')
  .child(profileUid).set(false)
}

export const matchProfile = (userUid, profileUid) => {
  firebase.database().ref().child('relationships').child(userUid).child('matches')
    .child(profileUid).set(true)
  firebase.database().ref().child('relationships').child(profileUid).child('matches')
    .child(userUid).set(true)
}

export const getMatches = (key, func) => {
  firebase.database().ref().child('relationships/'+key).child('matches').once('value')
    .then((snap) => {
      if(snap.val() != null)
          getUsersCb(Object.keys(snap.val()), (profiles) => {
            if(profiles != null)
              func(profiles)
          })
      else
        func(null)
    })
}

export const getUser = (key) => {
  return firebase.database().ref().child('users').child(key).once('value')
    .then((snap) => snap.val())
}

export const getUserCb = (key, func) => {
  firebase.database().ref().child('users').child(key).once('value')
    .then((snap) => func(snap.val()))
}

export const getUsersCb = (keyArray, func) => {
  firebase.database().ref().child('users').once('value')
    .then((snap) => {
      if(snap.val() != null) {
        const users = []

        keyArray.forEach((key) => {
          users.push(snap.val()[key])
        })

        func(users)
      }
    })
}

export const watchUser = (key, func) => {
  firebase.database().ref().child('users/'+key).on('value', (snap) => {
    func(snap.val())
  })
}

export const removeWatchUser = (key) => {
  firebase.database().ref().child('users/'+key).off()
}

export const watchMatches = (key, func) => {
  firebase.database().ref().child('relationships/'+key).child('matches').on('value', (snap) => {
    func(snap.val())
  })
}

export const checkMatches = (key, func) => {
  firebase.database().ref().child('relationships/'+key).child('matches').once('value', (snap) => {
    if(snap.val() != undefined)
      func(snap.val())
    else
      func(null)})
}

export const removeMatchesWatcher = (key) => {
  firebase.database().ref().child('relationships/'+key).child('matches').off()
}