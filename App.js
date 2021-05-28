import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Alert ,TouchableWithoutFeedback , Keyboard, TouchableWithoutFeedbackBase} from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import Todotem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter((prevTodos) => prevTodos.key != key)
    })
  }
  const submitHandler = (text) =>{
    if(text.length > 3){
      setTodos((prevTodos)=>{
        return[
          {text:text , key: Math.random().toString()},
          ...prevTodos
        ];
      })
    }else{
      Alert.alert('OOPS!','Todos must be 3 chars long',[
        {text:'Understood' ,onPress:()=>console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
      console.log('dismissed keyboard')
      }}>
      <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
            <FlatList 
            data = {todos}
            renderItem ={({item}) =>(
              <Todotem item={item} pressHandler={pressHandler} />
            )}
            />
        </View>
      </View>
    </View> 
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //justifyContent:'center',
    //alignItems:'center'
  },
  content : {
    padding: 40,
    flex:1,
  },
  list : {
    marginTop: 20,
    flex:1,
  }
});
