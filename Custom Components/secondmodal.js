import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList} from 'react-native';
import Modal from 'react-native-modalbox';
import { ScrollView } from 'react-native-gesture-handler';
import getDirections from 'react-native-google-maps-directions'



var screen = Dimensions.get('window')

class AnswerCard extends React.PureComponent {
    render(){
        return(
            <TouchableOpacity>
        <View style={styles.answer}>
    <Text style={{fontSize:20, fontWeight:'bold', color:"white", marginBottom:10}}>{this.props.name}</Text>
        </View>    
        </TouchableOpacity>

        );
    }
}


export default class NewModal extends Component{
    constructor(props){
        super(props);
    }
    showAddModal = () => {
        this.refs.qModal.open()
    }
    
    _handleGetDirections = () => {
        const data = {
           source: {
            latitude: -33.8356372,
            longitude: 18.6947617
          },
          destination: {
            latitude: -33.8600024,
            longitude: 18.697459
          },
          params: [
            {
              key: "travelmode",
              value: "driving"        // may be "walking", "bicycling" or "transit" as well
            },
            {
              key: "dir_action",
              value: "navigate"       // this instantly initializes navigation using the given travel mode
            }
          ],
          
        }
     
        getDirections(data)
      }
    

    render(){
        return (
            <Modal
                ref = {"qModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: 35, 
                    shadowRadius:10, 
                    width: screen.width - 20, 
                    height: 400
                }}
                position='center'
                backdrop={true}
                onClosed={() =>{
                    
                }}
                >
                <View style={{flex:1, backgroundColor:"ffffff", borderRadius:35, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={this._handleGetDirections} style={{ flex: 0.5}}>    
                <View>
                  <Text>MAP</Text>
                </View>
                </TouchableOpacity>
                    <View style={{ flex: 0.4, backgroundColor:"fffff", borderRadius:30}} >
                    <ScrollView>
                    
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
                        renderItem={({item})=><AnswerCard name = {item.name}/>}
                        horizontal = {true}
                    />
                    
                    </ScrollView>
                    </View>
                    <TouchableOpacity style={{...styles.joinButton, flex:0.2}} onPress={() => {this.refs.qModal.close()}}>
                    <View >
                        <Text style={{fontSize:20, color: 'white', fontWeight: 'bold'}}>Leave Walk</Text>
                    </View>
                    </TouchableOpacity>

                </View>

            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    answer: {
        backgroundColor: "#424242",
        height: 100,
        width: screen.width - 60,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 35,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {width:3, height:3},
        shadowColor: 'black',
        shadowOpacity: 0.4, 
        borderWidth: 1,
        borderColor: 'white'
    },
    question: {
        backgroundColor: "white",
        height: 100,
        width: screen.width - 60,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 35,
        marginBottom: 10,
        alignItems: 'center',
        shadowOffset: {width:3, height:3},
        shadowColor: 'black',
        shadowOpacity: 0
    },
    joinButton:{
        backgroundColor: "#263238",
        height: 60,
        width: screen.width - 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35
    }
})