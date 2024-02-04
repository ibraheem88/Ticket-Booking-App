import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Fonts from '../constants/Fonts';
import { BaseImage } from '../network/base';
import { Movie } from '../state/models/Movie';
import Icons from '../constants/Icons';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { WatchStackParamList } from '../helpers/types';

interface SearchListCompProps {
    item: Movie,
    index: number
}

const Options = Icons.ellipsis_horizontal

const SearchListComp = (props: SearchListCompProps) => {

    const { item, index } = props
    const navigation = useNavigation<StackNavigationProp<WatchStackParamList>>()

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('MovieDetailScreen', { id: item.id })}>
            <View style={styles.leftSection}>
                <Image source={{ uri: BaseImage + item.poster_path }}
                    style={styles.poster} />
                <View style={styles.info}>
                    <Text style={styles.label}>{item.original_title}</Text>
                    <Text style={styles.genre}>Fantasy</Text>
                </View>
            </View>
            <View style={{ flex: 1, width: '5%' }}>
                <Options />
            </View>
        </TouchableOpacity>
    );
};

export default SearchListComp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftSection: {
        flexDirection: 'row',
        //height: 100,
        width: '94%',
        alignItems: 'center'
    },
    info: {
        flexShrink: 1,
        marginHorizontal: 20
    },
    genre: {
        color: '#DBDBDF',
        fontFamily: Fonts.medium,
        fontSize: 12,
    },
    poster: {
        width: 130,
        height: 130,
        borderRadius: 10
    },
    label: {
        color: Colors.primaryColor,
        flexWrap: 'wrap',
        fontFamily: Fonts.medium,
        fontSize: 16
    }
});