import React, {useState} from 'react';
import {StyleSheet, Modal, View, Text} from 'react-native';
import {Input, Button, Card} from 'react-native-elements';

function WaterParams({route, navigation, }) {

    const [modalVisible, setModalVisible] = useState(false)
    const [enteredTemp, setenteredTemp] = useState('')
    const [enteredpH, setenteredpH] = useState('')
    const [enteredNitrates, setenteredNitrates] = useState('')
    const [enteredNitrites, setenteredNitrites] = useState('')
    const [enteredAmmonia, setenteredAmmonia] = useState('')
    const [enteredWaterParams, setenteredWaterParams] = useState('')


    const {waterParams} = route.params

   const waterParamsChangeHandler = (enteredWaterParams) => {
       setenteredWaterParams(enteredWaterParams)
   }

    const tempChangeHandler = (enteredTemp) => {
        setenteredTemp(enteredTemp)
    }
    const pHChangeHandler = (enteredpH) => {
        setenteredpH(enteredpH)
    }
    const nitrateChangeHandler = (enteredNitrates) => {
        setenteredNitrates(enteredNitrates)
    }
    const nitriteChangeHandler = (enteredNitrites) => {
        setenteredNitrites(enteredNitrites)
    }
    const ammoniaChangeHandler = (enteredAmmonia) => {
        setenteredAmmonia(enteredAmmonia)
    }



    if (waterParams)
    return(
        <View>
        <Card>
        <Text style={styles.title}>Current Water Parameters</Text>
                <View style={{padding: 20, borderColor: 'black', borderWidth: 2, borderRadius: 10}}> 
                    <Text>Temperature: {(enteredTemp) ? enteredTemp + " degrees" : waterParams.temperature} </Text>
                    <Text>pH: {(enteredpH) ? enteredpH : waterParams.pH} </Text>
                    <Text>Nitrate: {(enteredNitrates) ? enteredNitrates : waterParams.nitrate} ppm</Text>
                    <Text>Nitrite: {(enteredNitrites) ? enteredNitrites : waterParams.nitrite} ppm</Text>
                    <Text>Ammonia: {(enteredAmmonia) ? enteredAmmonia : waterParams.ammonia} ppm</Text>
                </View>
                <Button
                    style={styles.button}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                    }}
                    title="Update Water Parameters"
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
                    <Text style={styles.modalTitle}>Add Water Parameters</Text>
                </View> 
                <Input
                    placeholder="Temperature"
                    onChangeText={tempChangeHandler}
                    value={enteredTemp} 
                />
                <Input
                    placeholder="pH"
                    onChangeText={pHChangeHandler}
                    value={enteredpH}
                />
                <Input
                    placeholder="Nitrates"
                    onChangeText={nitrateChangeHandler}
                    value={enteredNitrates} 
                />
                <Input
                    placeholder='Nitrites'
                    onChangeText={nitriteChangeHandler}
                    value={enteredNitrites} 
                />
                <Input 
                    placeholder="Ammonia"
                    onChangeText={ammoniaChangeHandler}
                    value={enteredAmmonia} 
                />
                <Button
                    style={styles.button}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                    }}
                    title="Submit"
                />
                <Button
                    style={styles.button}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                    }}
                    title="Cancel"
                />
            </Modal>
      </Card>

        
            </View>
    )

    if (enteredWaterParams) 
     return (

        <Card>
        <Text style={styles.title}>Current Water Parameters</Text>
                <View style={{padding: 20, borderColor: 'black', borderWidth: 2, borderRadius: 10}}> 
                    <Text>Temperature: {(enteredTemp) ? enteredTemp + " degrees" : "Enter value"} </Text>
                    <Text>pH: {(enteredpH) ? enteredpH : "Enter value"} </Text>
                    <Text>Nitrate: {(enteredNitrates) ? enteredNitrates : "Enter value"} ppm</Text>
                    <Text>Nitrite: {(enteredNitrites) ? enteredNitrites : "Enter value"} ppm</Text>
                    <Text>Ammonia: {(enteredAmmonia) ? enteredAmmonia : "Enter value"} ppm</Text>
                </View>
                <Button
                    style={styles.button}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                    }}
                    title="Update Water Parameters"
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
                    <Text style={styles.modalTitle}>Add Water Parameters</Text>
                </View> 
                <Input
                    placeholder="Temperature"
                    onChangeText={tempChangeHandler}
                    value={enteredTemp} 
                />
                <Input
                    placeholder="pH"
                    onChangeText={pHChangeHandler}
                    value={enteredpH}
                />
                <Input
                    placeholder="Nitrates"
                    onChangeText={nitrateChangeHandler}
                    value={enteredNitrates} 
                />
                <Input
                    placeholder='Nitrites'
                    onChangeText={nitriteChangeHandler}
                    value={enteredNitrites} 
                />
                <Input 
                    placeholder="Ammonia"
                    onChangeText={ammoniaChangeHandler}
                    value={enteredAmmonia} 
                />
                <Button
                    style={styles.button}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                    }}
                    title="Submit"
                />
                <Button
                    style={styles.button}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                    }}
                    title="Cancel"
                />
            </Modal>
        </Card>

        )
    

 else 
 return(
     <View>
         <Text style={{alignSelf: 'center', marginTop: 10}}>No water parameters added yet!</Text>
         <Button
                    style={styles.button}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                    }}
                    title="Update Water Parameters"
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
                    <Text style={styles.modalTitle}>Add Water Parameters</Text>
                </View> 
                <Input
                    placeholder="Temperature"
                    onChangeText={tempChangeHandler}
                    value={enteredTemp} 
                />
                <Input
                    placeholder="pH"
                    onChangeText={pHChangeHandler}
                    value={enteredpH}
                />
                <Input
                    placeholder="Nitrates"
                    onChangeText={nitrateChangeHandler}
                    value={enteredNitrates} 
                />
                <Input
                    placeholder='Nitrites'
                    onChangeText={nitriteChangeHandler}
                    value={enteredNitrites} 
                />
                <Input 
                    placeholder="Ammonia"
                    onChangeText={ammoniaChangeHandler}
                    value={enteredAmmonia} 
                />
                <Button
                    style={styles.button}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                        waterParamsChangeHandler(enteredTemp)
                        console.log(enteredWaterParams)
                        
                    }}
                    title="Submit"
                />
                <Button
                    style={styles.button}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                        }}
                    title="Cancel"
                />
            </Modal>
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
    },
    button: {
        margin: 10
    },
    title: {
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: "center",
        margin: 20,
        fontSize: 18
        },
})

export default WaterParams;