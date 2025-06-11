import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ navigation }) {
    return (
        <View style={styles.header}>
            <View style={styles.profileContainer}>
                <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.profileImage} />
                <Text style={styles.welcomeText}>
                    Welcome, {'\n'}
                    <Text style={styles.userName}>Samuel Joe</Text>
                </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Ionicons name="settings-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 8,
    },
    welcomeText: {
        fontSize: 14,
        color: '#444',
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});