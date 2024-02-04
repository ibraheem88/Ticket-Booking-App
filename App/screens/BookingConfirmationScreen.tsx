import * as React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BookingHeaderComp from '../components/BookingHeaderComp';
import Fonts from '../constants/Fonts';
import Icons from '../constants/Icons';
import Colors from '../constants/Colors';
import { DummyHall } from '../constants/DummyHall';
import BookingConfirmationBottomComp from '../components/BookingConfirmationBottomComp';
import { WatchStackParamList } from '../helpers/types';
import { StackScreenProps } from '@react-navigation/stack';
import moment from 'moment';

type BookingConfirmationScreenProps = StackScreenProps<WatchStackParamList, 'BookingConfirmationScreen'>


const BookingConfirmationScreen = ({ route }: BookingConfirmationScreenProps) => {

    const { hall, name, release_date } = route.params
    const [selected, setSelcted] = React.useState({ row: 0, col: 6 })
    const seat_unavailable = require('../assets/images/seat-unavailable.png')
    const seat_vip = require('../assets/images/seat-vip.png')
    const seat_regular = require('../assets/images/seat-regular.png')
    const seat_selected = require('../assets/images/seat-selected.png')

    return (
        <View style={styles.container}>
            <BookingHeaderComp name={name} headline={`${moment(release_date, 'YYYY-MM-DD').format('MMMM DD, YYYY')} | ${hall?.time} ${hall?.name}`} />
            <View style={styles.screenContainer}>
                <Image source={require('../assets/images/screen-arc.png')}
                    style={styles.image} />
                <FlatList
                    data={DummyHall}
                    renderItem={({ item, index }) => (
                        <>
                            <View style={{
                                flexDirection: 'row', marginTop: 10, gap: 5,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} key={index}>
                                <Text style={styles.row}>{index + 1}</Text>
                                {item.map((col, indexCol) => (
                                    <TouchableOpacity onPress={() => setSelcted({ row: index, col: indexCol })} key={indexCol}>
                                        {col !== 0 && (
                                            <Image source={col == 1 ? seat_unavailable : (selected.row === index && selected.col === indexCol) ? seat_selected : col == 2 ? seat_regular : col == 3 ? seat_vip : null}
                                                style={styles.icon} />
                                        )}
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </>
                    )}
                />
            </View>
            <BookingConfirmationBottomComp selected={selected} price={hall?.price} />
        </View>
    );
};

export default BookingConfirmationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        width: 6.98,
        height: 6.63,
        resizeMode: 'contain'
    },
    image: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    row: {
        position: 'absolute',
        left: 10,
        fontSize: 5.38,
        color: Colors.primaryColor,
        fontFamily: Fonts.bold
    },
    screenContainer: {
        marginTop: 50
    }
});