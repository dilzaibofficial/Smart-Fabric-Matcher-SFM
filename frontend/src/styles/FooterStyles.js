// import { StyleSheet } from 'react-native';

// export default StyleSheet.create({
//     footer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         padding: 16,
//         borderTopWidth: 1,
//         borderColor: '#ddd',
//     },
// });

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    footer: {
        position: 'absolute', // Fix footer at the bottom
        bottom: 20, // Adjust footer position above device navigation buttons
        width: '100%', // Ensure footer spans the full width
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 16,
        borderTopWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        marginLeft:12 // Add background color to footer
    },
});