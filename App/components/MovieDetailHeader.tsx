import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Icons from '../constants/Icons';
import Fonts from '../constants/Fonts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { WatchStackParamList } from '../helpers/types';
import { useNavigation } from '@react-navigation/native';

interface MovieDetailHeaderProps { }

const Back = Icons.arrow_left_light

const MovieDetailHeader = (props: MovieDetailHeaderProps) => {

    const insets = useSafeAreaInsets()
    const navigation = useNavigation<StackNavigationProp<WatchStackParamList>>()

    return (
        <>
            <StatusBar backgroundColor={'rgba(0,0,0,0)'} translucent barStyle={'light-content'} />
            <View style={[styles.container, { marginTop: insets.top }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Back />
                </TouchableOpacity>
                <Text style={styles.label}>Watch</Text>
            </View>
        </>
    );
};

export default React.memo(MovieDetailHeader);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center'
    },
    label: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 2,
        fontFamily: Fonts.medium,
        color: '#fff'
    }
});
