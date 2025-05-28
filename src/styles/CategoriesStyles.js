import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    sectionTitle: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginVertical: 8, 
        textAlign: 'left', // Center align the heading
        color: '#000' 
    },
    categoriesContainer: { 
        flexDirection: 'row', // Ensure all icons are in a single row
        justifyContent: 'space-between', // Distribute icons evenly
        alignItems: 'center', // Align icons vertically in the center
        marginBottom: 16, 
        paddingHorizontal: 10, // Add padding for better spacing
    },
    categoryCircle: { 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: 80, // Fixed width for each category
    },
    categoryText: { 
        fontSize: 14, 
        marginTop: 8, 
        textAlign: 'center' 
    },
});