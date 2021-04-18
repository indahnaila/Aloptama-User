import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const TabRiwayat = ({text}) => {
    return (
        <TouchableOpacity style={styles.conten}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default TabRiwayat

const styles = StyleSheet.create({
    conten: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        backgroundColor: '#018A83',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 24,
        fontSize: 14
    }
})
