import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    sectionTitle: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginVertical: 8, 
        textAlign: 'left', 
        color: '#000' 
    },
    recentContainer: { 
        flexDirection: 'row' 
    },
    recentBox: {
        width: 195,
        height: 200,
        borderRadius: 12,
        marginRight: 12,
        overflow: 'hidden',
        position: 'relative', // Ensure overlay is positioned correctly
    },
    recentImage: {
        width: '100%',
        height: '100%', // Make image cover the entire card
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        padding: 10,
        zIndex: 1, // Ensure overlay is above the image
    },
    dateText: { 
        fontSize: 14, 
        fontWeight: 'bold', 
        color: 'black',
        fontWeight:'bold' // Ensure text is visible on the image
    },
    timeText: { 
        fontSize: 12, 
        color: 'black', 
        marginTop: 2 ,
        fontWeight:'bold'
    },
    heartIcon: { 
        position: 'absolute', 
        bottom: 10, 
        right: 10, 
        color: 'black',
        fontWeight:'bold' // Ensure icon is visible on the image
    },
});