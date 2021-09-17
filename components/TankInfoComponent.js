import React, {useState} from 'react';
import { Text, View, StyleSheet, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { AQUARIUMS } from '../shared/aquariums';
import WaterParams from './WaterParamsComponent';



export default function TankInfo({route, navigation, }) {
    const [aquariumData, manageAquariumData] = useState(AQUARIUMS)
    
    const id = route.params.aquariumId
    const newAquarium = route.params.newAquarium
      

    const aquarium = AQUARIUMS.filter(aquarium => aquarium.id === id)[0];
  

        
    if (aquarium)
    return(
        <SafeAreaView>
            <ScrollView>
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
                
                <Button style={{marginTop: 10}} 
                        title="Check Water Parameters" 
                        onPress={() => navigation.navigate('WaterParams', {waterParams: aquarium})} />
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
            <Text style={styles.title}>{newAquarium.name}</Text>
            <Text>{newAquarium.size}</Text>
            <Button style={{marginTop: 10}} 
                        title="Check Water Parameters" 
                        onPress={() => navigation.navigate('WaterParams', {waterParams: aquarium})} />
           
        </Card>
        <Card>
            <Text style={styles.title}>Maintenance</Text>
            <Button title="Add Maintenance Record" 
                    onPress={() => navigation.navigate('Maintenance')}/>

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