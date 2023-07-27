import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from "react-native";
import styles from "./style";

interface Props {
  searchUpdate: Function;
}

const PokemonSearch = ({ searchUpdate }: Props) => {
  function handleChange(event: NativeSyntheticEvent<TextInputChangeEventData>) {
    searchUpdate(event.target.toString);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => handleChange(e)}
      />
    </View>
  );
};

export default PokemonSearch;
