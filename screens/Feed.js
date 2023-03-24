import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Feed = () => {
  return (
    <View>
      <Text>Feed</Text>
    </View>
  )
}

export default Feed

const styles = StyleSheet.create({})





















// import React, { useEffect, useState,useLayoutEffect } from "react";
// import { View, Text, Dimensions, FlatList, ImageBackground,Image } from "react-native";
// //import { FlashList } from "@shopify/flash-list";
// import { db, collection, addDoc, setDoc, doc, auth, getDocs ,onSnapshot} from "../firebase"


// export default function Feed() {
//   const[data,setData]=useState([]);
//   const { height, width } = Dimensions.get("window");

//   useEffect(() => {
//     getData();
//   }, [data]);

//   const getData = async () => {
//     const querySnapshot = await getDocs(collection(db, 'posts'));
//     const journal = [];
//     querySnapshot.forEach((doc) => {
//       journal.push({
//         ...doc.data(),
//         post: doc.data().post,
//         postImg: doc.data().postImg,
//         id: doc.id,

//       });
//       console.log(doc.id, " => ", doc.data());
     

//     });
//     setData(journal);
//   };




//   return (
//     // <ImageBackground source={require("../assets/home.jpeg")}>
//       <View style={{ flex: 1, width: width, height: height, alignContent: 'center' }}>
//         {
//           data ?

//             <FlatList

//               data={data}
//               renderItem={({ item }) =>
//                 <View style={{alignSelf:'center',justifyContent:'center',alignContent:'center'}}>
//                   <Text style={{ fontSize: 15 }}>{item.post}</Text>
//                   <Image source={{ uri: item.postImg }}style={{height:100,width:100}}></Image>
//                 </View>}
//               keyExtractor={item => item.id}
//             //  estimatedItemSize={200}
//             />
//             : alert('No records at the moment')
//         }
//       </View>
//     // </ImageBackground>
//   );

// };






