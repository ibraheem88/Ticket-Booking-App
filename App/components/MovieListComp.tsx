import * as React from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../constants/Fonts';
import { BaseImage } from '../network/base';
import { Movie } from '../state/models/Movie';

interface MovieListCompProps {
    item: Movie
}

const MovieListComp = (props: MovieListCompProps) => {
    const { item } = props
    return (
        <ImageBackground style={styles.container}
            source={{ uri: BaseImage + item.poster_path }}
            imageStyle={{ borderRadius: 10 }}>
            <LinearGradient useAngle angle={180} colors={['rgba(245, 245, 247, 0.00)', '#000']} style={styles.linearGradient}
                locations={[0, 7]}>
                <Text style={styles.label}>{item.original_title}</Text>
            </LinearGradient>
        </ImageBackground>
    );
};

export default MovieListComp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent: 'flex-end',
        height: 180
    },
    linearGradient: {
        height: 70,
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    label: {
        color: '#fff',
        fontFamily: Fonts.medium,
        fontSize: 18,
        marginLeft: 20
    }
});
