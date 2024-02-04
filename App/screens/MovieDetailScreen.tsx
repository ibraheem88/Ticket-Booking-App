import * as React from 'react';
import moment from 'moment';
import 'moment-duration-format';
import { Text, View, StyleSheet, ScrollView, Image, ImageBackground, ImageBackgroundBase, TouchableOpacity } from 'react-native';
import { MovieDetail, getDataAuth } from '../network/apis';
import { StackScreenProps } from '@react-navigation/stack';
import { WatchStackParamList } from '../helpers/types';
import { MovieDetail as Movie } from '../state/models/MovieDetail';
import { BaseImage } from '../network/base';
import MovieDetailHeader from '../components/MovieDetailHeader';
import Fonts from '../constants/Fonts';
import LinearGradient from 'react-native-linear-gradient';
import Icons from '../constants/Icons';
import Colors from '../constants/Colors';
import { FlatList } from 'react-native-gesture-handler';
import GenreItemComp from '../components/GenreItemComp';

type MovieDetailScreenProps = StackScreenProps<WatchStackParamList, 'MovieDetailScreen'>

const Play = Icons.play_light

const MovieDetailScreen = ({ route, navigation }: MovieDetailScreenProps) => {

    const { id } = route.params
    const [movie, setMovie] = React.useState<Movie>()

    const getMovieDetail = () => {
        const Params = `/${id}?language=en-US`
        getDataAuth(MovieDetail + Params, (res) => {
            if (res.id) {
                setMovie(res)
            }
        }, (err) => {
            console.log(err)
        })
    }

    React.useEffect(() => {
        getMovieDetail()
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <ImageBackground source={{ uri: BaseImage + movie?.poster_path }}
                style={styles.imageBackground}>
                <MovieDetailHeader />
                <LinearGradient style={styles.linearGradient}
                    useAngle angle={180} locations={[0.5, 1]}
                    colors={['rgba(245, 245, 247, 0.00)', '#000']}>
                    <Text style={styles.label}>In Theaters {moment(movie?.release_date, 'YYYY-MM-DD').format('MMMM DD, YYYY')}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => movie?.id && navigation.navigate("BookingScreen", { name: movie?.original_title, release_date: movie?.release_date })}>
                        <Text style={styles.buttonText}>Get Tickets</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTrailer} onPress={() => movie?.id && navigation.navigate('TrailerScreen', { id: movie?.id })}>
                        <Play />
                        <Text style={styles.buttonText}>Watch Trailer</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </ImageBackground>
            <View style={styles.detail}>
                <Text style={styles.heading}>Genres</Text>
                <FlatList
                    data={movie?.genres}
                    horizontal
                    style={{ flexGrow: 0 }}
                    contentContainerStyle={{ gap: 7 }}
                    renderItem={({ item }) => (
                        <GenreItemComp name={item.name} />
                    )}
                />
                <View style={styles.seperator} />
                <Text style={styles.heading}>Overview</Text>
                <Text style={styles.overview}>{movie?.overview}</Text>
            </View>
        </ScrollView>
    );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingBottom: 40
    },
    seperator: {
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.11)',
        marginVertical: 20
    },
    detail: {
        backgroundColor: '#fff',
        paddingHorizontal: 50,
        paddingTop: 40
    },
    overview: {
        fontFamily: Fonts.base,
        color: '#8F8F8F',
        fontSize: 12,
    },
    heading: {
        fontFamily: Fonts.medium,
        color: Colors.primaryColor,
        fontSize: 16,
        marginBottom: 20
    },
    button: {
        width: '70%',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 20,
        marginBottom: 10,
        backgroundColor: '#61C3F2'
    },
    buttonTrailer: {
        width: '70%',
        borderRadius: 10,
        alignItems: 'center',
        gap: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 20,
        borderColor: '#61C3F2',
        borderWidth: 1
    },
    buttonText: {
        fontFamily: Fonts.semiBold,
        color: '#fff',
        fontSize: 14
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 40
    },
    label: {
        fontFamily: Fonts.medium,
        color: '#fff',
        marginBottom: 20,
        fontSize: 16
    },
    imageBackground: {
        resizeMode: 'cover',
        width: '100%',
        height: 500
    }
});
