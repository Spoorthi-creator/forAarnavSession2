import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreatePost = () => {
  return (
    <View>
      <Text>CreatePost</Text>
    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({})























// import React, { useState, useContext, useEffect } from 'react';
// import {
//     View,
//     Text,
//     Platform,
//     StyleSheet,
//     Alert,
//     ActivityIndicator,
//     TouchableOpacity,
//     Image,
// } from 'react-native';
// import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';
// import * as ImagePicker from 'expo-image-picker';
// import { auth, storage, db, addDoc,collection } from "../firebase";
// import { ref, getDownloadURL, uploadBytes } from "../firebase";


// import {
//     InputField,
//     InputWrapper,
//     AddImage,
//     SubmitBtn,
//     SubmitBtnText,
//     StatusWrapper,
// } from '../styles';


// const CreatePost = () => {


//     const [image, setImage] = useState(null);
//     const [uploading, setUploading] = useState(false);
//     const [transferred, setTransferred] = useState(0);
//     const [post, setPost] = useState(null);
//     const [isLoading, setLoading] = useState(false)
//     const [picture,setPicture]=useState(null)

//     const uploadImage = async (image) => {
//         const blob =
//             await new Promise((resolve, reject) => {
//                 const xhr = new XMLHttpRequest();
//                 xhr.onload = function () {
//                     resolve(xhr.response)
//                 };
//                 xhr.error = function () {
//                     reject(new TypeError("Network request failed"));
//                 };
//                 xhr.responseType = "blob";
//                 xhr.open("GET", image, true);
//                 xhr.send(null)
//             });
//         try {
//             const fileRef = ref(storage, 'school/image-' + Date.now());
//             const result = await uploadBytes(fileRef, blob);
//             blob.close();
//             getDownloadURL(fileRef).then((downloadURL)=>{
//                 setPicture(downloadURL)
//                 console.log("Download",downloadURL);
//                 return  getDownloadURL(fileRef);
//             })
           
//         } catch (error) {
//             alert(error)
//         }

//     }







//     const choosePhotoFromLibrary = async () => {
//         setLoading(true)
//         // No permissions request is necessary for launching the image library
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.All,
//             allowsEditing: true,
//             aspect: [4, 3],
//             quality: 1,
//         });

//         console.log(result);

//         if (!result.canceled) {


//             const uploadURL = await uploadImage(result.assets[0].uri);
//             setImage(uploadURL)
//             setInterval(() => {
//                 setLoading(false)
//             }, 2000);

//         }
//         else {
//             setImage(null);
//             setInterval(() => {
//                 setLoading(false)
//             }, 2000);
//         }
//     };

//     const submitPost = async () => {
//         if(picture && post)
//         {
//             console.log("Inside submit", picture)
//       //  const imageUrl = await uploadImage(image);
//         //console.log('Image Url: ', imageUrl);
//       //  console.log('Post: ', post);

//         await addDoc(collection(db, 'posts'), {

//             // userId: user.uid,
//             post: post,
//             postImg: picture,
//             postTime: Date.now(),
//             // likes: null,
//             // comments: null,
//         })
//             .then(() => {
//                 console.log('Post Added!');
//                 Alert.alert(
//                     'Post published!',
//                     'Your post has been published Successfully!',
//                 );
                
//                 setPost(null);
//             })
//             .catch((error) => {
//                 console.log('Something went wrong with added post to firestore.', error);
//             });
//         }
//     }



//     return (
//         <View style={styles.container}>

//             <InputWrapper>

//                 {/* {image != null ? <AddImage source={{uri: image}} /> : null} */}

//                 <InputField
//           placeholder="What's on your mind?"
//           multiline
//           numberOfLines={4}
//           value={post}
//           onChangeText={(content) => setPost(content)}
//         />
      
         
//                 {image && <Image source={{ uri: image }} style={{ width: 400, height: 200, alignSelf: 'center' }} />}


//             </InputWrapper>
//             <TouchableOpacity style={{ alignSelf: 'flex-end', height: 50, width: 50 }} onPress={choosePhotoFromLibrary}>
//                 <Text>Choose picture</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={()=>submitPost()} >
//             <Text>Post</Text>
//           </TouchableOpacity> 
//             {/* <ActionButton buttonColor="#2e64e5"> */}
//             {/* <ActionButton.Item
//           buttonColor="#9b59b6"
//           title="Take Photo"
//           onPress={takePhotoFromCamera}>
//           <Icon name="camera-outline" style={styles.actionButtonIcon} />
//         </ActionButton.Item> */}
//             {/* <ActionButton.Item
//           buttonColor="#3498db"
//           title="Choose Photo"
//           onPress={choosePhotoFromLibrary}>
//           <Icon name="md-images-outline" style={styles.actionButtonIcon} />
//         </ActionButton.Item> */}
//             {/* </ActionButton> */}
//         </View>
//     );
// };

// export default CreatePost;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     actionButtonIcon: {
//         fontSize: 20,
//         height: 22,
//         color: 'white',
//     },
// });
