import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

class PickerList extends Component {
  state = {
    alat: '',
  };

  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.text}>Alat</Text>
        <Text style={{fontSize: 16}}>:</Text>
        <View style={styles.bisa}>
          <DropDownPicker
            items={[
              {label: 'AWS', value: 'AWS'},
              {label: 'AAWS', value: 'AAWS'},
              {label: 'AWOS', value: 'AWOS'},
              {label: 'Ceilometer', value: 'Ceilometer'},
              {label: 'Radar', value: 'Radar'},
              {label: 'Seiscomp3', value: 'Seiscomp3'},
            ]}
            defaultValue={this.state.alat}
            placeholder="(select an item)"
            placeholderStyle={{color: 'gray'}}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#E8E8E8', fontSize: 16}}
            itemStyle={{justifyContent: 'flex-start'}}
            dropDownStyle={{
              backgroundColor: '#E8E8E8',
              fontSize: 14,
              border: 'none',
            }}
            onChangeItem={item => this.setState({alat: item.value})}
          />
          <View
            style={{borderBottomWidth: 1, marginLeft: 8, marginBottom: 18}}
          />
        </View>
      </View>
    );
  }
}

export default PickerList;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    marginRight: 10,
    width: 50,
  },
  bisa: {
    flex: 1,
  },
});
