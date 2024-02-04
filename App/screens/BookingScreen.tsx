import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import BookingHeaderComp from '../components/BookingHeaderComp';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import HallInfoComp from '../components/HallInfoComp';
import { StackScreenProps } from '@react-navigation/stack';
import { WatchStackParamList } from '../helpers/types';
import moment from 'moment';

type BookingScreenProps = StackScreenProps<WatchStackParamList, 'BookingScreen'>

const BookingScreen = ({ navigation, route }: BookingScreenProps) => {

    const dates = ['5 Mar', '6 Mar', '7 Mar', '8 Mar']
    const halls = [{ name: 'Cinetech + hall 1', time: '12:30', price: 50, bonus: 2500 }, { name: 'Cinetech + hall 2', time: '13:30', price: 75, bonus: 3000 }]
    const [selected, setSelected] = React.useState(0)
    const [selectedHall, setSelectedHall] = React.useState(0)
    const { release_date, name } = route.params

    return (
        <View style={styles.container}>
            <BookingHeaderComp name={name} headline={`In Theaters ${moment(release_date, 'YYYY-MM-DD').format('MMMM DD, YYYY')}`} />
            <Text style={styles.heading}>Date</Text>
            <FlatList
                horizontal
                data={dates}
                style={{ flexGrow: 0, marginBottom: 40 }}
                contentContainerStyle={{ paddingHorizontal: 20, gap: 7 }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={[styles.dateItem, selected === index && { backgroundColor: '#61C3F2' }]} onPress={() => setSelected(index)}>
                        <Text style={[styles.date, selected === index && { color: '#fff' }]}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
            <FlatList
                horizontal
                data={halls}
                style={{ flexGrow: 0 }}
                contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}
                renderItem={({ item, index }) => (
                    <HallInfoComp item={item} selectedHall={selectedHall} setSelectedHall={setSelectedHall} index={index} />
                )}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BookingConfirmationScreen', { hall: halls[selectedHall], name: name, release_date: release_date })}>
                <Text style={styles.buttonText}>Select Seats</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BookingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    heading: {
        paddingTop: 80,
        marginLeft: 20,
        marginBottom: 10,
        fontFamily: Fonts.medium,
        color: Colors.primaryColor,
        fontSize: 16
    },
    button: {
        backgroundColor: '#61C3F2',
        borderRadius: 10,
        position: 'absolute',
        alignItems: 'center',
        paddingVertical: 20,
        right: 20,
        left: 20,
        bottom: 20
    },
    buttonText: {
        color: '#fff',
        fontFamily: Fonts.semiBold,
        fontSize: 14
    }
});
