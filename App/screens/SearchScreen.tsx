import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import GenreListComp from '../components/GenreListComp';
import SearchHeaderComp from '../components/SearchHeaderComp';
import { GetGenre, SearchMovies, getDataAuth } from '../network/apis';
import { Genre } from '../state/models/Genre';
import { Movie } from '../state/models/Movie';
import SearchListComp from '../components/SearchListComp';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

interface SearchScreenProps { }

const SearchScreen = (props: SearchScreenProps) => {

    const [genres, setGenres] = React.useState<Genre[]>([])
    const [searchText, setSearchText] = React.useState('')
    const [searchResults, setSearchResults] = React.useState<Movie[]>([])

    const getGenres = () => {
        getDataAuth(GetGenre, (res) => {
            if (res?.genres) {
                setGenres(res.genres)
            }
        }, (err) => {
            console.log(err, 'err')
        })
    }

    const searchMovies = (query: string) => {
        const Params = `?query=${query}&include_adult=false&language=en-US&page=1`
        getDataAuth(SearchMovies + Params, (res) => {
            //console.log(res)
            if (res?.results) {
                setSearchResults(res.results)
            }
        }, (err) => {
            console.log(err, 'err')
        })
    }

    React.useEffect(() => {
        if (searchText.length > 1) {
            searchMovies(searchText)
        }
    }, [searchText])

    React.useEffect(() => {
        getGenres()
    }, [])

    return (
        <View style={styles.container}>
            <SearchHeaderComp searchText={searchText} setSearchText={setSearchText} />
            {searchText.length === 0 ? <FlatList
                numColumns={2}
                data={genres}
                contentContainerStyle={styles.genreList}
                renderItem={({ item, index }) => (
                    <GenreListComp item={item} index={index} />
                )}
            /> :
                <FlatList
                    key={'#'}
                    ListHeaderComponent={() => (
                        <>
                            <Text style={styles.heading}>Top Results</Text>
                            <View style={styles.seperator} />
                        </>
                    )}
                    data={searchResults}
                    contentContainerStyle={styles.searchList}
                    renderItem={({ item, index }) => (
                        <SearchListComp item={item} index={index} />
                    )}
                />}
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    seperator: {
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.11)',
        marginTop: 5,
        marginBottom: 20
    },
    heading: {
        fontFamily: Fonts.medium,
        fontSize: 12,
        color: Colors.primaryColor
    },
    searchList: {
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    genreList: {
        paddingVertical: 40,
        paddingHorizontal: 20
    }
});
