import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { AQUARIUMS } from '../shared/aquariums';


export default function TankInfo({route, navigation, }) {
    const [aquariumData, manageAquariumData] = useState(AQUARIUMS)
    
    
    const id = route.params.aquariumId
    const newAquarium = route.params.newAquarium 

    console.log(newAquarium)

    const aquarium = AQUARIUMS.filter(aquarium => aquarium.id === id)[0];
    // const addedAquarium = newAquarium.filter(addedAquarium => addedAquarium.id === newAquarium.id)[0];
     
    // {console.log(addedAquarium)}
    
    if (aquarium)
    return(
        
        <View>
            <Card>
                <Text>{aquarium.name}</Text>
                <Text>{aquarium.size}</Text>
                <Text>Fish: {aquarium.fish}</Text>
                <Text>Water Parameters</Text>
                <Text>Temperature: {aquarium.temperature}</Text>
                <Text>pH: {aquarium.pH}</Text>
                <Text>Nitrate: {aquarium.nitrate}ppm</Text>
                <Text>Nitrite: {aquarium.nitrite}ppm</Text>
                <Text>Ammonia: {aquarium.ammonia}ppm</Text>
            </Card>
        </View>
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