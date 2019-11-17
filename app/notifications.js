import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../Custom Components/customcard'
import NewModal from '../Custom Components/secondmodal';

export default class NotificationRender extends Component {
    constructor(props) {
        super(props);
        this._onPressShowAnswer = this._onPressShowAnswer.bind(this)
      }
      _onPressShowAnswer(){
        this.refs.addModal.showAddModal()
      }
    render(){
        
        return(
            <View style={{flex:1, justifyContent:'center', backgroundColor:"#0d47a1"}}>
            <View style={{flex:0.4, backgroundColor:"#1e88e5",  shadowOffset: {width:5, height:5},shadowColor: 'black', shadowOpacity: 0.4, shadowRadius:20, borderBottomRightRadius:25,borderBottomLeftRadius:25,}}>
                <Text style={{fontSize:40, fontWeight: 'bold', color: 'white', marginLeft: 20, marginTop: 40}}> Current Walk </Text>
                <FlatList
                        data={[{question: 'What is a good food place?', name: "Tejvir Jogani", id:"SBASBAJAS", nAnswers: 20}, ]}
                        keyExtractor= {(item, index) => index.toString()}
                        renderItem={({item})=><Card question={item.question} name={item.name} answers={item.nAnswers} functioncall={this._onPressShowAnswer}/>}
                    />
                </View>
            <View style={{ flex:0.6, borderTopEndRadius:0}}>
                  <Text style={{fontSize: 40, fontWeight: 'bold', marginTop: 10, marginLeft: 20, marginBottom: 10, color: 'white'}}>Scheduled Walks</Text>
                    <FlatList
                        data={[{question: 'What is a good food place?', name: "Tejvir Jogani", id:"SBASBAJAS", nAnswers: 20}, 
                        {question: 'Why is the hunger killing me?', name: "Reina Wang", id:"SBASBAJAS", nAnswers: 12},
                        {question: 'What is the best place to kill someone in this city', name: "Saurav Banka", id:"SBASBAJAS", nAnswers: 20},
                        {question: 'Who is the best tutor here?', name: "Miles Driver", id:"SBASBAJAS", nAnswers: 14},
                        {question: 'What is a good food place?', name: "Tejvir Jogani", id:"SBASBAJAS", nAnswers: 2}, 
                        {question: 'Why is the hunger killing me?', name: "Reina Wang", id:"SBASBAJAS", nAnswers: 10},
                        {question: 'What is the best place to kill someone in this city', name: "Saurav Banka",id:"SBASBAJAS", nAnswers: 11},
                        {question: 'Who is the best tutor here?', name: "Miles Driver", id:"SBASBAJAS", nAnswers: 19}]}
                        keyExtractor= {(item, index) => index.toString()}
                        renderItem={({item})=><Card question={item.question} name={item.name} answers={item.nAnswers} functioncall={this._onPressShowAnswer}/>}
                    />
                  
                  <NewModal ref={"addModal"} parentFlatList={this}>
                    
                    </NewModal>
                   
           
                </View>
                </View>
        );
    }
}