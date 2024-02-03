import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface MoreScreenProps { }

const MoreScreen = (props: MoreScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>MoreScreen</Text>
        </View>
    );
};

export default MoreScreen;

const styles = StyleSheet.create({
    container: {}
});
