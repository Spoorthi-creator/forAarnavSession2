import {useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground,Dimensions,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import styles from "../styles";

// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {signInWithEmailAndPassword,auth,sendPasswordResetEmail,createUserWithEmailAndPassword} from "../firebase"
//import firebase from "firebase";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validationMessage, setValidationMessage] = useState('')
  const { height, width } = Dimensions.get("window");
  const formButtonScale = useSharedValue(1);
  const [rightIcon, setRightIcon] = useState('eye');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  let validateAndSet = (value,setValue) => {
   setValue(value)
}


  const forgotPassword=()=>{

  }
const formButtonAnimatedStyle = useAnimatedStyle(() => {
  return {
    transform: [{scale: formButtonScale.value}]
  }
})
function checkPassword(firstpassword,secondpassword) {
  if(firstpassword !== secondpassword){
    setValidationMessage('Password do not match') 
  }
  else setValidationMessage('')
}
  async function createAccount() {
    email === '' || password === '' 
    ? setValidationMessage('required filled missing')
    : ''
    
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    alert("Welcome to SchoolTime");
    navigation.navigate('Dashboard');
    setEmail=="";
    setName=="";
    setPassword=="";
    setConfirmPassword=="";
     
    }).catch ((error) =>{
      setValidationMessage(error.message);
      
    });
  }
  return (
    <View styles={{flex:1}} backgroundColor="black" height={height} width={width}>
     
    <Image source={require("../assets/4.png")} style={{height:100,width:100,alignSelf:'flex-start',margin:5}}></Image>
     
      <View style={{borderRadius:50,backgroundColor:'white',justifyContent:'center',height:height/1.4,margin:10,marginTop:10,shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,}}> 
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: '10%', marginTop: '5%', color: '#FFCC00' }}>LOGIN</Text>
      <Input
          placeholder='Name'
          placeholderTextColor={'black'}
          containerStyle={{marginTop: 10}}
          value={name}
          onChangeText={(text) => setName(text)}
         
          leftIcon={<Ionicons name="person-outline" size={16} color="black" />}
          
            />
        
        
        
        <Input
          placeholder='Email'
          placeholderTextColor={'black'}
          containerStyle={{marginTop: 10}}
          value={email}
          onChangeText={(text) => setEmail(text)}
         
          leftIcon={<MaterialCommunityIcons name="email-outline" size={16} color="black" />}
          
            />
        <Input
          placeholder='Password'
          containerStyle={{marginTop:10}}
          placeholderTextColor={'black'}
          value={password}
          onChangeText={(value) => validateAndSet(value, setPassword)}
          secureTextEntry
          
         // rightIcon={<Icon name={rightIcon} size={16} color="black" onPress={handlePasswordVisibility}/>}
          leftIcon={<Icon name='key' size={16} color="black"/>}
          
          

            />
        <Input
          placeholder='Confirm password'
          containerStyle={{marginTop:10}}
          placeholderTextColor={'black'}
          value={confirmPassword}
          onChangeText={(value) => validateAndSet(value,setConfirmPassword)}
         // secureTextEntry
         
          leftIcon={<Icon name='key' size={16} color="black"/>}
         
          onBlur={()=>checkPassword(password,confirmPassword)}
            />  
            {<Text style={styles.error}>{validationMessage}</Text>}
        {/* <Button title="Sign up" buttonStyle={{marginTop:10}} onPress={createAccount} /> */}
        <Pressable onPress={forgotPassword} style={{alignSelf:'center',margin:5}}>
            <Text style={{fontSize:14}}>Forgot Password?</Text>
        </Pressable>
        <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
            <Pressable onPress={createAccount}>
              <Text style={styles.buttonText}>
               LOGIN
              </Text>
            </Pressable>
            </Animated.View>
            </View>
     
      
    </View>
  );
}

