import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MediaLibraryScreenProps { }

const MediaLibraryScreen = (props: MediaLibraryScreenProps) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#000' }}>Media Library Screen</Text>
        </View>
    );
};

export default MediaLibraryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
