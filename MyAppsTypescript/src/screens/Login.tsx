import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ButtonLogin} from '../Component/Button';
import {InputText} from '../Component/inputText';

import {useSelector, useDispatch} from 'react-redux';
import {ApplicationState, onLogin} from '../redux';
// import { useNavigation } from '../utils';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  // const {navigate} = useNavigation();

  const {user, error} = useSelector(
    (state: ApplicationState) => state.userReducer,
  );
  const {token} = user;

  useEffect(() => {
    if (token !== undefined) {
      // navigate('Home');
    }
  }, [user]);

  const onTapLogin = () => {
    dispatch(onLogin(email, password));
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}></View>
      <View style={styles.body}>
        <View style={styles.loginView}>
          <InputText placeholder="Email" onTextChange={setEmail} />
          <InputText
            placeholder="Passoword"
            onTextChange={setPassword}
            isSecure={true}
          />
          <ButtonLogin title="Login" onTap={onTapLogin} />
          {token !== undefined && (
            <Text style={{marginLeft: 20, marginRight: 20}}>
              {JSON.stringify(user)}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
  },
  loginView: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    height: 200,
  },
  footer: {
    flex: 1,
  },
});
