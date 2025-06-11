import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    profileContainer: { flexDirection: 'row', alignItems: 'center' },
    profileImage: { width: 50, height: 50, borderRadius: 25, marginRight: 8 },
    welcomeText: { fontSize: 14, color: '#444' },
    userName: { fontWeight: 'bold', fontSize: 16 },
});