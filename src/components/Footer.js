import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/FooterStyles';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <Ionicons name="share-social-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="logo-instagram" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="refresh" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}