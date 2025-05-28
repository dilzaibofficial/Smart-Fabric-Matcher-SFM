import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Stats from '../components/Stats';
import Categories from '../components/Categories';
import RecentSearches from '../components/RecentSearches';
import Footer from '../components/Footer';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <Stats />
            <Categories />
            <RecentSearches />
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 50, paddingHorizontal: 16, backgroundColor: '#fff' },
});