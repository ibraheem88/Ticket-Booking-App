import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DashboardScreenProps { }

const DashboardScreen = (props: DashboardScreenProps) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#000' }}>DashboardScreen</Text>
        </View>
    );
};

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
