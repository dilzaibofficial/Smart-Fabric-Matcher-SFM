import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Keyboard } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.profileContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.welcomeText}>
                        Profile, {'\n'}
                        <Text style={styles.userName}>Samuel Joe</Text>
                    </Text>
                </View>
            </View>

            {/* Profile Picture */}
            <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.profileImage} />
            <Text style={styles.title}>Samuel Joe</Text>

            {/* User Details */}
            <View style={styles.detailContainer}>
                <FontAwesome name="user" size={20} color="black" style={styles.icon} />
                <Text style={styles.detailText}>Name: Samuel Joe</Text>
            </View>
            <View style={styles.detailContainer}>
                <FontAwesome name="envelope" size={20} color="black" style={styles.icon} />
                <Text style={styles.detailText}>Email: samueljoe@example.com</Text>
            </View>
            <View style={styles.detailContainer}>
                <FontAwesome name="lock" size={20} color="black" style={styles.icon} />
                <Text style={styles.detailText}>Password: ********</Text>
            </View>

            {/* Change Password Section */}
            <Text style={styles.sectionTitle}>Change Password</Text>
            <TextInput style={styles.input} placeholder="Current Password" secureTextEntry />
            <TextInput style={styles.input} placeholder="New Password" secureTextEntry />
            <TouchableOpacity 
                style={styles.changePasswordButton} 
                onPress={() => {
                    Keyboard.dismiss(); // Dismiss the keyboard
                    console.log('Change Password button clicked');
                }}
            >
                <Text style={styles.changePasswordButtonText}>Change Password</Text>
            </TouchableOpacity>

            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 16, backgroundColor: '#fff' },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 25,
        paddingVertical: 20,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: { width: 100, height: 100, borderRadius: 50, alignSelf: 'center', marginBottom: 20 },
    welcomeText: { marginLeft: 15, fontSize: 14, color: '#444' },
    userName: { fontWeight: 'bold', fontSize: 16 },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    detailContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    icon: { marginRight: 10 },
    detailText: { fontSize: 16, color: '#333' },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 20 },
    input: { width: '100%', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginBottom: 16 },
    changePasswordButton: { backgroundColor: '#0093F2', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
    changePasswordButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    logoutButton: { backgroundColor: '#222', padding: 15, borderRadius: 8, alignItems: 'center' },
    logoutButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});