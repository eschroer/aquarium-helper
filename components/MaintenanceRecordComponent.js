import React, { Component } from 'react';
import {View, FlatList, Item, Text} from 'react-native'
import {Input, Button, Tile, Card } from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';

let maintenanceList = [{id: 0, maintenanceType: "Water change", date: "09/15/2021"}, 
                        {id: 1, maintenanceType: "Filter cleaning", date: "09/05/2021"}]

class Maintenance extends Component{

    constructor(props) {
        super(props);

        this.state = {
            maintenanceType: '',
            date: new Date(),
            showCalendar: false,
            id: Math.random()
            }
    }

   
    renderList = ({item}) => {
        return(
         <View>   
        <Text>{item.maintenanceType}</Text>
        <Text style={{marginBottom: 10}}>{item.date}</Text> 
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
                onPress={this.renderList}
                style={{margin: 10}}
                />
     </View>
     <View>
        <Card>
        <FlatList
            data={maintenanceList}
            renderItem={this.renderList}
            keyExtractor={item => item.id}
        />
        </Card> 
        </View>
     </View>
 )
}
}

export default Maintenance;
