import react from "react";
import {View, Text, StyleSheet} from 'react-native';

const Line = ({label = "", content = "-"}) =>{
    return(
        <View style={styles.line}>
            <Text style={[
                styles.cell, 
                styles.label,
                label.length > 8 ? styles.longLabel: null
            ]}>{ label}</Text>
            <Text style={[styles.cell, styles.content]}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderColor: '#C5C5C5',
    },
    cell: {
        fontSize: 18,
        paddingLeft: 5,
    },
    content: {
        flex: 4,
    },
    label: {
        fontWeight: 'bold',
        flex: 1,
    },
    longLabel:{
        fontSize:10,
    }
})
export default Line;