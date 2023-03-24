import React, { Component,useEffect } from "react";
import {
    View,
    ActivityIndicator
} from "react-native";
import { auth,getAuth,onAuthStateChanged } from "../firebase";


export default function LoadingScreen({navigation}) {
useEffect(() => {
checkIfLoggedIn()
}, [])

    checkIfLoggedIn = () => {
        onAuthStateChanged(auth, (user) => {

            if (user) {
               navigation.navigate('Dashboard')
            } else {
              navigation.navigate('OnboardingScreen')
            }
        })
    }


        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                
            </View>
        )
    
}
