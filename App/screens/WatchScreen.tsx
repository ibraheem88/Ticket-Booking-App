import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import WatchHeaderComp from '../components/WatchHeaderComp';
import MovieListComp from '../components/MovieListComp';
import { GetUpcomingMovies, getDataAuth } from '../network/apis';
import { Movie } from '../state/models/Movie';

interface WatchScreenProps { }

const WatchScreen = (props: WatchScreenProps) => {

    const [movies, setMovies] = React.useState<Movie[]>([])

    const getUpcomingMovies = () => {
        const Params = '&page=1'
        getDataAuth(GetUpcomingMovies + Params, (res) => {
            if (res?.results) {
                setMovies(res.results)
            }
        }, (err) => {
            console.log(err)
        })
    }

    React.useEffect(() => {
        getUpcomingMovies()
    }, [])

    return (
        <View style={styles.container}>
            <WatchHeaderComp />
            <FlatList
                data={movies}
                contentContainerStyle={{ paddingVertical: 20 }}
                renderItem={({ item }) => (
                    <MovieListComp item={item} />
                )}
            />
        </View>
    );
};

export default WatchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
