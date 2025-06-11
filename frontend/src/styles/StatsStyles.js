import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
    statBox: { backgroundColor: '#222', borderRadius: 16, padding: 50, flex: 1, marginHorizontal: 4, alignItems: 'center' },
    statNumber: { color: 'white', fontSize: 28, fontWeight: 'bold' },
    statLabel: { color: 'white', fontSize: 12, textAlign: 'center', marginTop: 4 },
});