import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import CardClass from '../app/dashboard'
import { Ionicons } from '@expo/vector-icons';

export default class Card  extends React.PureComponent {

    render(){
        return (
                <TouchableOpacity style={styles.card} onPress={this.props.functioncall}>
                    <View style={{marginLeft: 20}}>
                    <Text style={{fontSize:20, fontWeight: 'bold', marginBottom: 10}}>From:
                    <Text style={{fontWeight: 1}}> Residence Hall Unit 2</Text>
                    </Text>
                    <Text style={{fontSize:20, fontWeight: 'bold', marginBottom: 10}}>To:
                    <Text style={{fontWeight: 1}}> Bancroft Clothing Co</Text>
                    </Text>
                    <Text style={{fontSize:20, fontWeight: 'bold', marginBottom: 10}}>Start Time:
                    <Text style={{fontWeight: 1}}> 12:45AM</Text>
                    </Text>
                    <Text style={{fontSize:20, fontWeight: 'bold', marginBottom: 10}}>Duration:
                    <Text style={{fontWeight: 1}}> 5 Minutes from You</Text>
                    </Text>
                    </View>
                </TouchableOpacity>
        );
    }
        
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        height: 180,
        marginHorizontal: 20,
        borderRadius: 35,
        justifyContent: 'center',
        marginVertical: 10,
        shadowOffset: {width:3, height:3},
        shadowColor: 'black',
        shadowOpacity: 0.4
    }
})