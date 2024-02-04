import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Fonts from '../constants/Fonts';

interface GenreItemCompProps {
    name: string
}

const GenreItemComp = (props: GenreItemCompProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.name}</Text>
        </View>
    );
};

export default React.memo(GenreItemComp);

const styles = StyleSheet.create({
    container: {
        minWidth: 70,
        alignItems: 'center',
        backgroundColor: '#15D2BC',
        borderRadius: 26,
        padding: 10
    },
    label: {
        fontSize: 12,
        fontFamily: Fonts.semiBold,
        color: '#fff'
    }
});
