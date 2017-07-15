import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity, 
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');

export default class Profile extends Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <ScrollView style={styles.container}>  
          <Text style={styles.name}>Mental Health Resources</Text>
          <Text style={styles.bio}>{"\n"}IN CASE OF EMERGENCY, CONTACT 911 TO REQUEST POLICE, FIRE, OR EMS.
{"\n"}   
{"\n"}Adolescent Suicide Hotline
{"\n"}800-621-4000
{"\n"}
{"\n"}Suicide Prevention Lifeline 
{"\n"}1-800-273-TALK
{"\n"}
{"\n"}Suicide & Crisis Hotline 
{"\n"}1-800-999-9999
{"\n"}
{"\n"}Suicide Prevention - The Trevor HelpLine
{"\n"}(Specializing in gay and lesbian youth suicide prevention). 
{"\n"}1-800-850-8078
{"\n"}
{"\n"}Adolescent Crisis Intervention & Counseling Nineline 
{"\n"}1-800-999-9999
{"\n"}
{"\n"}AIDS National Hotline 
{"\n"}1-800-342-2437
{"\n"}
{"\n"}CHADD-Children & Adults with Attention Deficit/Hyperactivity Disorder 
{"\n"}1-800-233-4050
{"\n"}
{"\n"}Child Abuse Hotline
{"\n"}800-4-A-CHILD
{"\n"}
{"\n"}Cocaine Help Line 
{"\n"}1-800-COCAINE (1-800-262-2463)
{"\n"}
{"\n"}Domestic Violence Hotline
{"\n"}800-799-7233
{"\n"}
{"\n"}Domestic Violence Hotline/Child Abuse 
{"\n"}1-800-4-A-CHILD (800 422 4453)
{"\n"}
{"\n"}Drug & Alcohol Treatment Hotline
{"\n"}800-662-HELP
{"\n"}
{"\n"}Ecstasy Addiction 
{"\n"}1-800-468-6933
{"\n"}
{"\n"}Eating Disorders Center 
{"\n"}1-888-236-1188
{"\n"}
{"\n"}Family Violence Prevention Center 
{"\n"}1-800-313-1310
{"\n"}
{"\n"}Gay & Lesbian National Hotline 
{"\n"}1-888-THE-GLNH (1-888-843-4564)
{"\n"}
{"\n"}Gay & Lesbian Trevor Suicide Prevention
{"\n"}1-800-850-8078
{"\n"}
{"\n"}Healing Woman Foundation (Abuse) 
{"\n"}1-800-477-4111
{"\n"}
{"\n"}Help Finding a Therapist 
{"\n"}1-800-THERAPIST (1-800-843-7274)
{"\n"}
{"\n"}Incest Awareness Foundation 
{"\n"}1-888 -547-3222
{"\n"}Learning Disabilities - (National Center For) 
{"\n"}1-888-575-7373
{"\n"}
{"\n"}National Alliance on Mental Illness (NAMI) 
{"\n"}1-800-950-NAMI (6264)
{"\n"}
{"\n"}Post Abortion Trauma 
{"\n"}1-800-593-2273
{"\n"}
{"\n"}Project Inform HIV/AIDS Treatment Hotline
{"\n"}800-822-7422
{"\n"}
{"\n"}Rape (People Against Rape) 
{"\n"}1-800-877-7252
{"\n"}
{"\n"}Rape, Abuse, Incest, National Network (RAINN) 
{"\n"}1-800-656-HOPE (1-800-656-4673)
{"\n"}
{"\n"}Runaway Hotline
{"\n"}800-621-4000
{"\n"}
{"\n"}Self-Injury (Information only) 
{"\n"}(NOT a crisis line. Info and referrals only) 
{"\n"}1-800-DONT CUT (1-800-366-8288)
{"\n"}
{"\n"}Sexual Assault Hotline 
{"\n"}1-800-656-4673
{"\n"}
{"\n"}Sexual Abuse - Stop It Now! 
{"\n"}1-888-PREVENT
{"\n"}
{"\n"}STD Hotline 
{"\n"}1-800-227-8922
{"\n"}
{"\n"}Victim Center
{"\n"}1-800-FYI-CALL (1-800-394-2255)
{"\n"}
{"\n"}
</Text>
        </ScrollView>
      </View>
    )
  }
}
        

const styles = StyleSheet.create({
  container: {
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
    fontSize: 16,
    color:'black',
    textAlign: 'center'
  },
});