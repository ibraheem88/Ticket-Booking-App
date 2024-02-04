import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, Keyboard } from 'react-native';
import Colors from '../constants/Colors';
import Icons from '../constants/Icons';
import Fonts from '../constants/Fonts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { WatchStackParamList } from '../helpers/types';

interface SearchHeaderCompProps {
    searchText: string,
    setSearchText: React.Dispatch<React.SetStateAction<string>>
}

const SearchIcon = Icons.search_dark
const Cross = Icons.cross_dark

const SearchHeaderComp = (props: SearchHeaderCompProps) => {
    const { searchText, setSearchText } = props
    const navigation = useNavigation<StackNavigationProp<WatchStackParamList>>()
    const insets = useSafeAreaInsets()
    return (
        <>
            <StatusBar backgroundColor={"#fff"} barStyle={'dark-content'} />
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <SearchIcon />
                    <TextInput
                        value={searchText}
                        onChangeText={(t) => setSearchText(t)}
                        placeholder='TV shows, movies and more'
                        placeholderTextColor={'rgba(32,44,67,0.3)'}
                        style={styles.input}
                    />
                    <TouchableOpacity onPress={() => { setSearchText(''); Keyboard.dismiss(); navigation.goBack() }}>
                        <Cross />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default SearchHeaderComp;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
        padding: 20
    },
    input: {
        flex: 1,
        fontSize: 14,
        fontFamily: Fonts.base,
        alignItems: 'center',
        color: Colors.primaryColor
    },
    inputContainer: {
        flex: 1,
        paddingVertical: 7,
        paddingHorizontal: 7,
        backgroundColor: '#F2F2F6',
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row'
    },
    label: {
        fontSize: 16,
        fontFamily: Fonts.medium,
        color: Colors.primaryColor
    }
});