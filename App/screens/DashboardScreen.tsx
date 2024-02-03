import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DashboardScreenProps { }

const DashboardScreen = (props: DashboardScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>DashboardScreen</Text>
        </View>
    );
};

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {}
});
