import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const { height, width } = Dimensions.get("window");
const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:'white'}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:'white'}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:'white'}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Register")}
        onDone={() => navigation.navigate("Register")}
        pages={[
          {
            
          backgroundColor: 'black',
           image: <Image source={require('../assets/UI2.jpg')} resizeMode='cover'style={{height:300,width:width}}></Image>,
                       title: 'School Time',
            subtitle: 'True happiness is in giving away!',
          },
          {
            backgroundColor: 'black',
            image: <Image source={require('../assets/UI3.png')} resizeMode='cover'style={{height:300,width:width}}></Image>,
            title: 'Give your books.. uniform..',
            subtitle: 'All of them in good state? Give away, it helps!  ',
          },
          {
            backgroundColor: 'black',
            image: <Image source={require('../assets/5.png')} resizeMode='cover'style={{height:300,width:width}}></Image>,
            title: 'Who is ready to give away?',
            subtitle: "Come on lets create a post!",
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});





// import Swiper from 'react-native-swiper'
// import React, { Component } from 'react'
// import { AppRegistry, StyleSheet, Text, View,TouchableOpacity } from 'react-native'


// const styles = StyleSheet.create({
//   wrapper: {},
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB'
//   },
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#97CAE5'
//   },
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#92BBD9'
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
// })
 
// export default function OnboardingScreen({navigation}) {
 


    
//     return (
//       <Swiper style={styles.wrapper} showsButtons={true}>
//         <View style={styles.slide1}>
//           <Text style={styles.text}>Hello Swiper</Text>
//         </View>
//         <View style={styles.slide2}>
//           <Text style={styles.text}>Beautiful</Text>
//         </View>
//         <View style={styles.slide3}>
//           <Text style={styles.text}>And simple</Text>
//           <TouchableOpacity style={{alignContent:'center'}} onPress={() =>
//          navigation.navigate('Register')}>
//             <Text style={{fontSize:30,margin:70}}>LoginScreen</Text>
//           </TouchableOpacity>
//         </View>
        
//       </Swiper>
      
//     )
  
// }