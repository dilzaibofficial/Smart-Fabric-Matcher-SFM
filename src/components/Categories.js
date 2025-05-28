import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import styles from '../styles/CategoriesStyles';

export default function Categories() {
    return (
        <View>
            <Text style={styles.sectionTitle}>Categories</Text> {/* Add heading */}
            <View style={styles.categoriesContainer}>
                {/* Fabric Type */}
                <TouchableOpacity style={styles.categoryCircle}>
                    <MaterialCommunityIcons name="tshirt-crew-outline" size={50} color="black" />
                    <Text style={styles.categoryText}>Fabric Type</Text>
                </TouchableOpacity>

                {/* Fabric Texture */}
                <TouchableOpacity style={styles.categoryCircle}>
                    <MaterialCommunityIcons name="texture-box" size={50} color="black" />
                    <Text style={styles.categoryText}>Fabric Texture</Text>
                </TouchableOpacity>

                {/* Fabric Pattern */}
                <TouchableOpacity style={styles.categoryCircle}>
                    <MaterialCommunityIcons name="pattern" size={50} color="black" />
                    <Text style={styles.categoryText}>Fabric Pattern</Text>
                </TouchableOpacity>

                {/* Fabric Color */}
                <TouchableOpacity style={styles.categoryCircle}>
                    <Ionicons name="color-palette-outline" size={50} color="black" />
                    <Text style={styles.categoryText}>Fabric Color</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}