import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/RecentSearchesStyles';

export default function RecentSearches() {
    return (
        <View>
            <Text style={styles.sectionTitle}>Recent Searches</Text> {/* Add heading */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentContainer}>
                <View style={[styles.recentBox, { backgroundColor: '#B9F227' }]}>
                    <Image source={require('../assets/image1.png')} style={styles.recentImage} />
                    <View style={styles.overlay}>
                        <Text style={styles.dateText}>15 Sep</Text>
                        <Text style={styles.timeText}>11:45 pm</Text>
                        <FontAwesome name="heart-o" size={16} color="black" style={styles.heartIcon} />
                    </View>
                </View>
                <View style={[styles.recentBox, { backgroundColor: '#0093F2' }]}>
                    <Image source={require('../assets/image2.png')} style={styles.recentImage} />
                    <View style={styles.overlay}>
                        <Text style={styles.dateText}>02 Sep</Text>
                        <Text style={styles.timeText}>8:45 pm</Text>
                        <FontAwesome name="heart-o" size={16} color="black" style={styles.heartIcon} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}