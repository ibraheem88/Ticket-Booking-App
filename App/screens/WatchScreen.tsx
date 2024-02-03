import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface WatchScreenProps { }

const WatchScreen = (props: WatchScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>WatchScreen</Text>
        </View>
    );
};

export default WatchScreen;

const styles = StyleSheet.create({
    container: {}
});
