import React, { Component } from 'react';
import {View, FlatList, Item, Text, Alert} from 'react-native'
import {Input, Button, Tile, Card } from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';


class Maintenance extends Component{

    constructor(props) {
        super(props);

        this.state = {
            maintenanceList: [{id: 0, maintenanceType: "Water change", date: "09/15/2021"}, 
                        {id: 1, maintenanceType: "Filter cleaning", date: "09/05/2021"}],
            maintenanceType: '',
            date: new Date(),
            showCalendar: false,
            id: Math.random()
            }

    }

    
   addItem = () => {
        const newMaintenance = this.state.maintenanceType
        const newDate = this.state.date
        const newId = this.state.id
        const newData = [{newId, newMaintenance, newDate}]
                
        this.setState(prevState => ({
            maintenanceList: [...prevState.maintenanceList, ...newData]}))
           
            return this.state.maintenanceList
       
    
    }
   
    renderList = ({item}) => {
        return(
         <View>   
        <Text>{item.maintenanceType || item.newMaintenance}</Text>
        <Text style={{marginBottom: 10}}>{item.date || item.newDate.toLocaleDateString('en-EN')}</Text> 
        </View>
    )};

render() {

    return(
     <View>
     <View>
         <Input placeholder="Type of Maintenance"
                    onChangeText={value => this.setState({maintenanceType: value})}
                    value={this.state.maintenanceType}/>
         <Text style={{marginLeft: 10, fontSize: 18}}>Date:</Text>
         <Button
                style={{margin: 10}}
                onPress={() =>
                        this.setState({showCalendar: !this.state.showCalendar})
                        }
                title={this.state.date.toLocaleDateString('en-US')}
                color='#5637DD'
                accessibilityLabel='Tap me to select a maintenance log date'
        />
         {this.state.showCalendar && (
                    <DateTimePicker
                        value={this.state.date}
                        mode={'date'}
                        display='default'
                        onChange={(event, selectedDate) => {
                            selectedDate && this.setState({date: selectedDate, showCalendar: false});
                        }}
                        
                    />
                )}
        <Button title="Add Maintenance"
                onPress={this.addItem}
                style={{margin: 10}}
                />
     </View>
     <View>
        <Card>
        <FlatList
            data={this.state.maintenanceList}
            renderItem={this.renderList}
            keyExtractor={item => this.state.id}
            extraData={this.state}
        />
        </Card> 
        </View>
     </View>
 )
}
}

export default Maintenance;
