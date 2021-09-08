import { NavigationHelpersContext } from "@react-navigation/core";
import React, {useState} from "react";
import { View, Text, FlatList } from 'react-native';
import { Tile } from 'react-native-elements'
import { AQUARIUMS } from "../shared/aquariums";
import { useNavigation } from '@react-navigation/native'

export default function Main() {
    const [aquariums, manageAquariums] = useState(AQUARIUMS)
    const navigation = useNavigation();
    
    const renderAquarium = ({item}) => {
        
        return(
            <View>
                <Tile
                    title={item.name}
                    caption={item.size}
                    featured
                    imageSrc= {{uri: item.image}}
                    onPress={() => navigation.navigate('TankInfo')}
                />
                
            </View>
        )
    }
    
    return(
        <View>
            <FlatList
                data={aquariums}
                renderItem={renderAquarium}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

