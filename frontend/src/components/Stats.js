import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/StatsStyles';

export default function Stats() {
    return (
        <View style={[styles.statsContainer, { zIndex: 1 }]}> {/* Added zIndex */}
            <View style={styles.statBox}>
                <Text style={styles.statNumber}>65</Text>
                <Text style={styles.statLabel}>Image{"\n"}searches</Text>
            </View>
            <View style={styles.statBox}>
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statLabel}>Category{"\n"}Explored</Text>
            </View>
        </View>
    );
}