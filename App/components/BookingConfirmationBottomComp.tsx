import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from '../constants/Icons';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

interface BookingConfirmationBottomCompProps {
    selected: any,
    price: string
}

const SeatRegular = Icons.seat_regular_large
const SeatVIP = Icons.seat_vip_large
const SeatUnavailable = Icons.seat_unavailable_large
const SeatSelected = Icons.seat_selected_large
const Cross = Icons.cross_dark_small

const BookingConfirmationBottomComp = (props: BookingConfirmationBottomCompProps) => {
    return (
        <View style={styles.bottomSection}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 50 }}>
                <View style={styles.seatRow}>
                    <View style={styles.seatItem}>
                        <SeatSelected />
                        <Text style={styles.seatLabel}>Selected</Text>
                    </View>
                    <View style={styles.seatItem}>
                        <SeatVIP />
                        <Text style={styles.seatLabel}>Vip</Text>
                    </View>
                </View>
                <View style={styles.seatRow}>
                    <View style={styles.seatItem}>
                        <SeatUnavailable />
                        <Text style={styles.seatLabel}>Not Available</Text>
                    </View>
                    <View style={styles.seatItem}>
                        <SeatRegular />
                        <Text style={styles.seatLabel}>Regular</Text>
                    </View>
                </View>
            </View>
            <View style={styles.seatInfo}>
                <View style={styles.alignCenter}>
                    <Text style={styles.seatInfoTextBold}>{props?.selected?.col + 1}</Text>
                    <Text style={styles.seatInfoText}> / {props?.selected?.row + 1} row</Text>
                </View>
                <Cross />
            </View>
            <View style={[styles.alignCenter, { gap: 10 }]}>
                <View style={styles.priceContainer}>
                    <Text style={styles.seatInfoText}>Total Price</Text>
                    <Text style={styles.priceValue}>$ {props?.price}</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Proceed to Pay</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BookingConfirmationBottomComp;

const styles = StyleSheet.create({
    seatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 5,
    },
    priceContainer: {
        paddingVertical: 10,
        alignItems: 'center',
        width: '30%',
        borderRadius: 10,
        backgroundColor: 'rgba(166,166,166,0.11)'
    },
    priceValue: {
        color: Colors.primaryColor,
        fontFamily: Fonts.semiBold,
        fontSize: 16
    },
    alignCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    seatInfoText: {
        color: Colors.primaryColor,
        fontSize: 10,
        fontFamily: Fonts.base
    },
    seatInfoTextBold: {
        color: Colors.primaryColor,
        fontSize: 14,
        fontFamily: Fonts.medium
    },
    seatInfo: {
        backgroundColor: 'rgba(166,166,166,0.11)',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 20,
        padding: 10,
        gap: 5,
        alignSelf: 'flex-start',
    },
    seatRow: {
        //alignItems: 'center',
        //marginBottom: 10
    },
    seatLabel: {
        color: '#8F8F8F',
        fontSize: 12,
        fontFamily: Fonts.medium
    },
    bottomSection: {
        right: 0,
        left: 0,
        padding: 30,
        backgroundColor: '#fff',
        bottom: 0,
        position: 'absolute',
    },
    button: {
        backgroundColor: '#61C3F2',
        borderRadius: 10,
        width: '70%',
        alignItems: 'center',
        paddingVertical: 20,
    },
    buttonText: {
        color: '#fff',
        fontFamily: Fonts.semiBold,
        fontSize: 14
    }
});
