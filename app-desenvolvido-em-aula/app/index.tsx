//Tela a inicial que deve aparecer

import { Link, router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

const Index = () => {
    return (
        <View style={style.container}>
            <Button title="Tela de Tabs" onPress={() => { router.navigate("/(tabs)") }}></Button>
            <Button title="Tela de Previsão do Tempo" onPress={() => { router.navigate("/(timePreveiw)") }}></Button>
        </View>
    );
}

export default Index;

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        flex: 1,
    },
})

