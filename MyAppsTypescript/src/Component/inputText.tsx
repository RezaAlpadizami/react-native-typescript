import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

interface InputTextProps {
  placeholder: string;
  isSecure?: boolean;
  onTextChange: Function;
}

export const InputText: React.FC<InputTextProps> = ({
  placeholder,
  isSecure = false,
  onTextChange,
}) => {
  const [isPassword, setIsPassword] = useState(false);

  useEffect(() => {
    setIsPassword(isSecure);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.inputText}
        autoCapitalize='none'
        secureTextEntry={isPassword}
        onChangeText={text => onTextChange(text)}
      />
      {isSecure && (
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => setIsPassword(!isPassword)}>
          <Image
            source={
              isPassword
                ? require('../Assets/Icon/icons8-hide-24.png')
                : require('../Assets/Icon/icons8-eye-24.png')
            }
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#CBCBCB',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    paddingLeft: 20,
    paddingRight: 10,
  },

  inputText: {
    flex: 1,
    height: 50,
    fontSize: 20,
    color: '#000',
  },
});
