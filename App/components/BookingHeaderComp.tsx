import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../constants/Icons';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { WatchStackParamList } from '../helpers/types';

interface BookingHeaderCompProps {
    name: string,
    headline: string
}

const Back = Icons.arrow_left

const BookingHeaderComp = (props: BookingHeaderCompProps) => {
    const navigation = useNavigation<StackNavigationProp<WatchStackParamList>>()
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Back />
            </TouchableOpacity>
            <View style={styles.headerInfo}>
                <Text style={styles.heading}>{props.name.slice(-15)}{props.name.length > 15 && '...'}</Text>
                <Text style={styles.release}>{props.headline}</Text>
            </View>
        </SafeAreaView>
    );
};

export default BookingHeaderComp;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderColor: '#EFEFEF',
        borderBottomWidth: 1
    },
    backButton: {
        position: 'absolute',
        left: 20
    },
    headerInfo: {
        alignSelf: 'center'
    },
    release: {
        color: '#61C3F2',
        fontSize: 12,
        fontFamily: Fonts.medium
    },
    heading: {
        fontFamily: Fonts.medium,
        fontSize: 16,
        color: Colors.primaryColor
    }
});
