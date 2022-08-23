import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useAssets} from 'expo-asset';
import {onAuthStateChanged} from 'firebase/auth'

function App() {
  const [curruser, setCurrUser] = useState(null);
  const [loading,setLoading] = useEffect(true);

  useEffect(() =>{
    const unsubscribe= onAuthStateChanged(auth,user =>{
      setLoading(false)
      if (user){
        setCurrUser(user)
      }
    });
    return ()=> unsubscribe();
  },[]);

  if (loading) {
    return <text>Loading...</text>
  }

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(curruser)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Main(){
  const [assets] = useAssets(
    require("./assets/icon-square.png"),
    require("./assets/chatbg.png"),
    require("./assets/user-icon.png"),
    require("./assets/welcome-img.png"),
  )
  if(!assets){
    return <text>Loading...</text>
  }
  return <App/>;
}

export default Main;