import { View, Text, StyleSheet } from "react-native";

//Diferente do JavaScrypt, aqui precisamos tipar nossas variaveis conforme abaixo:
type HeaderProps = {
    title: string;
    subtitle?: string; //Com o "?" fico com "undefined" ou "String";
}

//Criando um componente de cabeçalho; 
//Apís as "Props" devo informar a referencia da tipagem com ":" após as chaves;
const Header = ({ title, subtitle }: HeaderProps) => {
    return (
        <View style={style.headerContainer}>
            <Text style={style.textTitle}>{title}</Text>
            <Text>{subtitle}</Text>
        </View>
    );
}

export default Header;

const style = StyleSheet.create({
    headerContainer: {
        padding: 48,
        backgroundColor: '#025b58',
        paddingBottom: 16,
    },
    textTitle: {
        fontSize: 24,
        color: '#fff',
    }
})