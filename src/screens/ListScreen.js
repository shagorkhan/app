import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () =>{
    const uni = [
        { name: "BUET" , key: '1' },
        { name: "IUT" , key: '2' },
        { name: "DU" , key: '3' },
        { name: "RUET" , key: '4' },
        { name: "KUET" , key: '5' },
        { name: "CUET" , key: '6' },
        { name: "SUST" , key: '7' },
        { name: "AUST" , key: '8' },
        { name: "BRAC" , key: '9' },
    ];


    return(
        <View style={styles.viewStyle}>
            <FlatList
            horizontal={true} 
            data = {uni}
            renderItem = {function ({item}){
                return(<Text style={styles.textStyle}>{item.name}</Text>);
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 30,
            color: 'blue',
            marginVertical: 30,
        },
        viewStyle: {
            backgroundColor: "#ffdddd",
            borderColor: 'red',
            borderWidth: 5,
        }
    }
);

export default ListScreen;