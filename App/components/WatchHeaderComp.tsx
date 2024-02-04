import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import Icons from '../constants/Icons';
import Fonts from '../constants/Fonts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { WatchStackParamList } from '../helpers/types';

interface WatchHeaderCompProps { }

const SearchIcon = Icons.search_dark

const WatchHeaderComp = (props: WatchHeaderCompProps) => {
    const navigation = useNavigation<StackNavigationProp<WatchStackParamList>>()
    const insets = useSafeAreaInsets()
    return (
        <>
            <StatusBar backgroundColor={"#fff"} barStyle={'dark-content'} />
            <View style={styles.container}>
                <Text style={styles.label}>Watch</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                    <SearchIcon />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default WatchHeaderComp;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
        alignItems: 'center',
        padding: 20
    },
    label: {
        fontSize: 16,
        fontFamily: Fonts.medium,
        color: Colors.primaryColor
    }
});
