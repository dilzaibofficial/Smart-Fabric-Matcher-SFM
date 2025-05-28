import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        // Navigate to Login screen after 2 seconds
        const timer = setTimeout(() => {
            navigation.navigate('Login');
        }, 2000);

        return () => clearTimeout(timer); // Cleanup timer
    }, [navigation]);

    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoContainer}>
                <View style={styles.circle}>
                    <Text style={styles.logoText}>F</Text>
                </View>
                <Text style={styles.appName}>FSM</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    logoContainer: { alignItems: 'center' },
    circle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: { color: 'white', fontSize: 32, fontWeight: 'bold' },
    appName: { fontSize: 32, fontWeight: 'bold', marginTop: 16 },
});