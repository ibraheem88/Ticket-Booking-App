import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Fonts from '../constants/Fonts';
import { DiscoverMovies, getDataAuth } from '../network/apis';
import { BaseImage } from '../network/base';
import { Genre } from '../state/models/Genre';

interface GenreListCompProps {
    item: Genre,
    index: number
}

const GenreListComp = (props: GenreListCompProps) => {
    const { item, index } = props
    const [path, setPath] = React.useState()

    const getCategoryPoster = () => {
        const Params = `&with_genres=${item.id}`
        getDataAuth(DiscoverMovies + Params, (res) => {
            if (res.results[0]?.poster_path)
                setPath(res.results[0]?.poster_path)
        }, (err) => {
            console.log(err)
        })
    }

    React.useEffect(() => {
        getCategoryPoster()
    })

    return (
        <ImageBackground style={[styles.container, index % 2 == 0 && { marginLeft: 0 }]}
            source={path ? { uri: BaseImage + path } : require('../assets/images/genre.jpg')}
            imageStyle={{ borderRadius: 10 }}>
            <View style={styles.overlay} />
            <Text style={styles.label}>{item.name}</Text>
        </ImageBackground>
    );
};

export default GenreListComp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'flex-end',
        height: 100
    },
    overlay: {
        position: 'absolute',
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.3)',
        bottom: 0,
        top: 0,
        right: 0,
        left: 0
    },
    label: {
        color: '#fff',
        fontFamily: Fonts.medium,
        fontSize: 18,
        marginLeft: 20
    }
});