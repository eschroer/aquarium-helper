import React, {useState} from 'react';
import { Text, View, StyleSheet, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { AQUARIUMS } from '../shared/aquariums';
import Maintenance from './MaintenanceRecordComponent';


export default function TankInfo({route, navigation, }) {
    const [aquariumData, manageAquariumData] = useState(AQUARIUMS)
    
    const aqData = [
        {date: "2021-08-01", changePercent: 10 },
        {date: "2021-08-08", changePercent: 25 } 
    ]
   


    const id = route.params.aquariumId
    const newAquarium = route.params.newAquarium
      

    const aquarium = AQUARIUMS.filter(aquarium => aquarium.id === id)[0];
        
    if (aquarium)
    return(
        <SafeAreaView>
            <ScrollView style={styles.card}>
            <Card style={styles.card, {borderRadius: 80, overflow: 'hidden'}}>
                <Text style={styles.title}>
                    {aquarium.name}
                </Text>
                <Text style={{textAlign: 'center', marginBottom: 10, fontWeight: "300"}}>
                    {aquarium.size}
                </Text>
                <Text style={{textTransform: 'capitalize', textAlign: 'center'}}>
                    Fish: {aquarium.fish}
                </Text>
                <Text style={styles.title}>Current Water Parameters</Text>
                <View style={{padding: 20, borderColor: 'black', borderWidth: 2, borderRadius: 10}}> 
                    <Text>Temperature: {aquarium.temperature}</Text>
                    <Text>pH: {aquarium.pH}</Text>
                    <Text>Nitrate: {aquarium.nitrate} ppm</Text>
                    <Text>Nitrite: {aquarium.nitrite} ppm</Text>
                    <Text>Ammonia: {aquarium.ammonia} ppm</Text>
                </View>
                <Button style={{marginTop: 10}} title="Update Water Parameters" />
            </Card>
            <Card>
                <Text style={styles.title}>Maintenance</Text>
              
                <Button title="Add Maintenance Record" 
                        onPress={() => navigation.navigate('Maintenance')}/>

            </Card>
            </ScrollView>
        </SafeAreaView>
    )
    else 
    return(
    <View>
        <Card>
            <Text>{newAquarium.name}</Text>
            <Text>{newAquarium.size}</Text>
           
        </Card>
    </View>
    )
}
const styles = StyleSheet.create({
    card: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: .75,
    
    }, 
      title: {
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: "center",
        margin: 20,
        fontSize: 18
        },
   values: {
        fontSize: 18,
        margin: 10
    }

})