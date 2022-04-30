import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
    title: string 
    onTap: Function  
}

export const ButtonLogin: React.FC<ButtonProps> = ({title, onTap}) => {
  return (
    <TouchableOpacity
      style={styles.btnLogin} 
      onPress={() => onTap()}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnLogin: {
    height: 50,
    backgroundColor: '#295FED',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
  },
});
