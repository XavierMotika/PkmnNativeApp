import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from "react-native";
import styles from "./style";

interface Props {
  searchUpdate: Function;
}

const PokemonSearch = ({ searchUpdate }: Props) => {
  function handleChange(text : string) {
    searchUpdate(text);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        onChangeText={(text)=>handleChange(text)}
      />
    </View>
  );
};

export default PokemonSearch;
