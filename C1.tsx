import { Button, Text, TextInput, View } from 'react-native';

//<View><label htmlFor="i1">E-mail</label>;
//<input name=i1 type="email"></input></View>;
//
//<br />
//
//<View><label htmlFor="i2">Password</label>;
//<input name=i2 type="password"></input></View>;

//<button>Entrar</button>

/*export default function C1() {
    return (
        <View>
            <Text>
                <br /><br /><br /><br /><br /><br />
                <label htmlFor="i1">E-mail</label><br />
                <input name="i1" type="email" />
                <br /><br />
                <label htmlFor="i2">Password</label><br />
                <input name="i2" type="password" />
                <br /><br />
                <button>Entrar</button>
            </Text>
        </View>
    );
}*/

export function Cabecalho() {
    return (
        <View style={{ alignItems: "center", backgroundColor: 'red', marginBottom: 20, padding: 10 }}>
            <Text style={{ fontSize: 26, fontWeight: "bold" }}>
                Cabeçalho
            </Text>
        </View>
    )
}

export function Corpo() {
    return (
        <View style={{ alignItems: "center", backgroundColor: 'green', marginBottom: 20, padding: 15 }}>
            <Text>
                Corpo
            </Text>
        </View>
    )
}

export function Rodape() {
    return (
        <View style={{ alignItems: "center", backgroundColor: 'blue', marginBottom: 20, padding: 10 }}>
            <Text>Rodapé</Text>
        </View>
    )
}