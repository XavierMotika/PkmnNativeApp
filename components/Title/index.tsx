import { Image, Text, View } from "react-native"
import styles from "./style";

const icon = {uri : "https://i.seadn.io/gae/s0NlgbbIA3BDju59DtGLhipY5tc0U0KM_IkajGm_9sFBBmOkOqxtTZPwGgZ-fcVU6oxUGa6wfwdMeiinto2OR5hJAw?auto=format&w=1000"}

const Title = () => {
    return (
        <View style={styles.container}>
            <Image source={icon} style={styles.icon}/>
            <Text style={styles.text}> NOT PokemonGO </Text>
            <Image source={icon} style={styles.icon}/>
        </View>
        

    )
}

export default Title;