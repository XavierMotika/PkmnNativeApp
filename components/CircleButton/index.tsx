import { View, Pressable, GestureResponderEvent, Text} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import styles from './style';

interface Props {
  onPress : null
  buttonLabel : string
}
const CircleButton = ({ onPress, buttonLabel } : Props) => {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <Text>{buttonLabel}</Text>
      </Pressable>
    </View>
  );
}

export default  CircleButton;