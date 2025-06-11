import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Sidebar({ onClose, navigation }) {
    return (
        <View style={styles.sidebar}>
            {/* App Name and Logo */}
            <View style={styles.header}>
                <FontAwesome name="circle" size={40} color="black" style={styles.logoIcon} />
                <Text style={styles.appName}>SMF</Text>
            </View>

            {/* Profile */}
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Profile</Text>
            </TouchableOpacity>

            {/* Gallery */}
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Gallery</Text>
            </TouchableOpacity>

            {/* Logout */}
            <TouchableOpacity style={styles.menuItem} onPress={() => {
                onClose();
                navigation.navigate('Login');
            }}>
                <Text style={styles.menuText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    sidebar: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: '50%', // Sidebar width set to half screen
        height: '100%', // Full height of the screen
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        padding: 20,
        zIndex: 100, // Ensure sidebar is above all other components
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    logoIcon: {
        marginRight: 10,
    },
    appName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    menuItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    menuText: {
        fontSize: 16,
        color: '#333',
    },
});