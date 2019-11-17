import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import Card from '../Custom Components/customcard.js'
import { FlatList } from 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddModal from '../Custom Components/viewquestion';
import Page from './profilepage'
import NotificationRender from './notifications'






class CardClass extends Component {
    constructor(props) {
      super(props);
      this._onPressShowAnswer = this._onPressShowAnswer.bind(this)

      this.state ={
 
        status:true
   
      }
    }

    _onPressShowAnswer(){
      this.refs.addModal.showAddModal()
    }

    render(){
        return (
            <View style={{justifyContent: 'center', flex:1,  backgroundColor:"#0d47a1"}}>
                <View style={{justifyContent: 'center', alignItems: 'center',flex:0.3, backgroundColor:"#1e88e5",  shadowOffset: {width:5, height:5},shadowColor: 'black', shadowOpacity: 0.4, shadowRadius:20, borderBottomRightRadius:25,borderBottomLeftRadius:25,}}>
                  <Text style={{ fontSize: 20, color: 'white',fontWeight: 'bold'}}>Tejvir Jogani</Text>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginBottom: 15, marginTop: 15}}>
                        <Ionicons name="md-checkmark-circle" size={32} color="white" /> Berkeley, California</Text>
                        <TouchableOpacity>
                        <View>
                          {
                          this.state.status ?
                          <View style={{justifyContent: 'center', alignItems: 'center'}}>
                          <Text style={{opacity:0.7, marginTop: 15, color: 'white'}}> Click here to verify yourself before you can go on walks </Text> 
                          <TextInput placeholder="Enter Email" style={{marginTop: 10}}></TextInput></View> : <Ionicons name = "ios-checkbox" size={32}/>
                          }
                        </View>  
                        
                        </TouchableOpacity>
                      
                </View>
                <View style={{zIndex:-1, flex:0.7, borderTopEndRadius:0}}>
                  <Text style={{fontSize: 40, fontWeight: 'bold', marginTop: 10, marginLeft: 20, marginBottom: 10, color: 'white'}}>Nearby Walks</Text>
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
                  
                    <AddModal ref={"addModal"} parentFlatList={this}>
                    
                    </AddModal>
           
                </View>
                
            </View>
        );
    }
        
}

class CreateWalk extends Component{
    render(){
        return <Page/>
    }
}

class ScheduleWalk extends Component{
    render(){
        return <NotificationRender/>
    }
}


const TabNavigator = createBottomTabNavigator({
    Feed: CardClass,
    ScheduleWalk: ScheduleWalk,
    CreateWalk: CreateWalk,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Feed') {
          iconName = 'ios-globe';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below. 
        
        } else if (routeName === 'ScheduleWalk') {
            iconName = `ios-pin`;
          } else if (routeName === 'CreateWalk') {
            iconName = `ios-add-circle`;
          }

          

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
      tabBarOptions: {
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'white',
          padding:10, 
          shadowOffset: {width:4,height:4}, shadowColor:'black',
          shadowOpacity: 0.4,
          shadowRadius: 10
        },
      }
    }),}
  
  );
  
export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  buttonCreate: {
      marginTop: 15,
      backgroundColor:'#263238', 
      borderRadius: 20, 
      height: 60,
      width: 300,
      justifyContent: 'center', 
      alignItems: 'center',
      shadowOffset: {width:3, height:3},
      shadowColor: 'black',
      shadowOpacity: 0.4
  }
})

