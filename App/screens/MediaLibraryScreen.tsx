import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface MediaLibraryScreenProps { }

const MediaLibraryScreen = (props: MediaLibraryScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>MediaLibraryScreen</Text>
        </View>
    );
};

export default MediaLibraryScreen;

const styles = StyleSheet.create({
    container: {}
});
