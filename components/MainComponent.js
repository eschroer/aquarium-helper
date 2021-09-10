import React, {useEffect, useState } from "react";
import { View, Text, FlatList, Modal, StyleSheet } from 'react-native';
import { Tile, FAB, Input, Button } from 'react-native-elements'
import { AQUARIUMS } from "../shared/aquariums";
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';



function Main() {
    const [aquariums, manageAquariums] = useState(AQUARIUMS)
    const [modalVisible, setModalVisible] = useState(false)
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredSize, setEnteredSize] = useState('')
    
    const navigation = useNavigation();
    let newAquariums = {
        name: enteredTitle,
        id: aquariums.length,
        size: enteredSize
    }
    
    // useEffect(() => {
    //     getData();
    //   }, []);
    
    //   useEffect(() => {
    //     setData();
    //   }, [aquariums]);

    //   const setData = async (aquariums) => {
    //     try {
    //       await AsyncStorage.setItem("aquariums", JSON.stringify(aquariums));
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    //   const getData = async () => {
    //     try {
    //       const value = await AsyncStorage.getItem("aquariums") 
    //         if (value != null) {
    //           let parsedValue = JSON.parse(value);
    //           manageAquariums(aquariums.push(parsedValue));
    //         }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    const titleChangeHandler = (enteredTitle) => {
        setEnteredTitle(enteredTitle)
    }

    const subtitleChangeHandler = (enteredSize) => {
        setEnteredSize(enteredSize)
    }

    function addAquarium() {
   
        manageAquariums(prevAquariums => {
            return newAquariums = [...prevAquariums, newAquariums]
        })
         setEnteredTitle('');
         setEnteredSize('');
        return newAquariums;
    }
      
       
    const renderAquarium = ({item}) => {
         
        
        return(
            <View>
                <Tile
                    title={item.name}
                    caption={item.size}
                    featured
                    imageSrc= {{uri: item.image}}
                    onPress={() => navigation.navigate('TankInfo', {aquariumId: item.id, newAquarium: item})}
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
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }} 
            >
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>Add Aquarium</Text>
                </View> 
                <Input
                    placeholder="Name"
                    onChangeText={titleChangeHandler}
                    value={enteredTitle} 
                />
                <Input
                    placeholder="Tank Size"
                    onChangeText={subtitleChangeHandler}
                    value={enteredSize} 
                />
                <Button
                    onPress={() => {
                        addAquarium()
                        setModalVisible(!modalVisible)
                    }}
                    title="Submit"
                />
                <Button
                    onPress={() => {
                        setModalVisible(!modalVisible)
                    }}
                    title="Cancel"
                />
            </Modal>

            <FAB
            title="+"
            placement="right"
            color="#045de9"
            onPress={()=> setModalVisible(!modalVisible)}
            />
       
        </View>
    
       

    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        margin: 20,
        backgroundColor: '#045de9'
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#045de9',
        textAlign: 'center',
        color: '#fff',
        marginTop: 20,
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }

})

export default Main; 
