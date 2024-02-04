import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface MoreScreenProps { }

const MoreScreen = (props: MoreScreenProps) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#000' }}>More Screen</Text>
        </View>
    );
};

export default MoreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
