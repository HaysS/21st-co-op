import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity, 
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');

export default class Profile extends Component {
  render() {
    const profile = this.props.navigation.state.params.profile
    const fbImageUrl = `https://graph.facebook.com/${profile.id}/picture?height=${height}`

    return(
      <View style={{flex: 1}}>
        <View style={styles.container}>  
          <Image 
            resizeMode='cover'
            source={{uri: fbImageUrl}}
            style={{width:width, height:height/2}} />
          <Text style={styles.name}>{profile.name}</Text>
        </View>
      </View>
    )
  }
}
        

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height:height,
    width:width,
    backgroundColor:'white',
    },
  text: {
    color: '#2B2B2B',
    fontSize: 48,
    textAlign: 'center'
  },
  name: {
    color: '#2B2B2B',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 2,
    textAlign: 'center'
  },
  work: {
    fontSize:15,
    marginBottom: 10,
    color:'#A4A4A4',
    textAlign: 'center'
  },
  bio: {
    fontSize:12,
    color:'black',
    textAlign: 'center'
  },
});