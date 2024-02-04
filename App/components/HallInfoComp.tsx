import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import Icons from '../constants/Icons';

interface HallInfoCompProps {
    selectedHall: number,
    setSelectedHall: React.Dispatch<React.SetStateAction<number>>,
    index: number,
    item: any
}

const Seats = Icons.seats

const HallInfoComp = (props: HallInfoCompProps) => {
    const { selectedHall, setSelectedHall, index, item } = props
    return (
        <TouchableOpacity onPress={() => setSelectedHall(index)} activeOpacity={0.2} key={index}>
            <View style={styles.header}>
                <Text style={styles.time}>{item.time}</Text>
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={[styles.hall, selectedHall === index && { borderColor: '#61C3F2' }]}>
                <Image source={require('../assets/images/screen-arc-small.png')} />
                <Image source={require('../assets/images/seats.png')} />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>From</Text>
                <Text style={styles.footerValue}>{item.price}$</Text>
                <Text style={styles.footerText}>or</Text>
                <Text style={styles.footerValue}>{item.bonus}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default React.memo(HallInfoComp);

const styles = StyleSheet.create({
    container: {

    },
    hall: {
        padding: 20,
        borderRadius: 10,
        borderColor: 'rgba(32,44,67,0.10)',
        borderWidth: 1
    },
    footerText: {
        color: '#8F8F8F',
        fontFamily: Fonts.medium,
        fontSize: 12
    },
    footerValue: {
        color: Colors.primaryColor,
        fontFamily: Fonts.bold,
        fontSize: 12
    },
    name: {
        fontSize: 12,
        color: Colors.primaryColor,
        fontFamily: Fonts.base
    },
    time: {
        fontSize: 12,
        color: Colors.primaryColor,
        fontFamily: Fonts.medium
    },
    footer: {
        flexDirection: 'row',
        gap: 5,
        marginTop: 5,
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 5,
        alignItems: 'center'
    },
    dateItem: {
        minWidth: 67,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(166,166,166,0.1)',
        borderRadius: 10
    },
    date: {
        color: Colors.primaryColor,
        fontFamily: Fonts.semiBold,
        fontSize: 12
    },
});
