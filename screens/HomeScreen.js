import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '21st St. MFs',
    headerLeft: null,
    gesturesEnabled: false,
  };

  openPaymentUrl() {
    Linking.openURL('https://collegehouses.org/members/bill-pay/').catch(err => console.error('An error occurred', err));
  }

  openCalendarUrl() {
    Linking.openURL('https://collegehouses.org/calendar/').catch(err => console.error('An error occurred', err));
  }

  openMentalHealthResources() {
    this.props.navigation.navigate('MentalHealthResources')
  }

  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={() => {this.openPaymentUrl()}} >
          <View style={styles.match}>
            <Text style={styles.name}>Pay Rent via Paypal</Text>
          </View>
        </TouchableOpacity>
       <TouchableOpacity onPress={() => {this.openCalendarUrl()}} >
          <View style={styles.match}>
            <Text style={styles.name}>College Houses Calendar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.openMentalHealthResources()}} >
          <View style={styles.match}>
            <Text style={styles.name}>Mental Health Resources</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  name: {
    color: '#2B2B2B',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 2,
    textAlign: 'center'
  },
  match: {
    justifyContent: 'center', 
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor:'white',
  },
});
