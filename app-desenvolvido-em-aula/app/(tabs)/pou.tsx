//tab criada para dar exemplo de como funciona o routeamento de tab e de stack

import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

const Pou = () => {
    return (
        <View style={style.container}>
            <Text style={style.textos}>
                Exemplo
            </Text>
            <Button title="Go Back" onPress={() => { router.back() }} />
        </View>
    );
}

export default Pou;

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    textos: {
        fontSize: 20,
        color: "red",
    }
})

