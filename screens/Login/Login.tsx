import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import {useNavigation} from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleForgotPasswordPress = () => {
    //navigation.navigate('ForgotPassword');
  };

  const handleLoginPress = () => {
    // Lógica para manejar el evento de inicio de sesión
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/login.png')}
        style={styles.backgroundImage}
      />
      <Text style={styles.goBack} onPress={() => navigation.goBack()}>
        &lt;
      </Text>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Ingresar</Text>
        <Text style={styles.subtitle}>Ingrese sus datos para continuar</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.formContainer}>
          <Input
            height={58}
            backgroundColor="#D9D9D9"
            textColor="#414144"
            minLength={5}
            maxLength={10}
            inputType="text"
            placeholder="Usuario"
            placeholderColor="#414144"
            marginTop={30}
          />
          <Input
            height={58}
            backgroundColor="#D9D9D9"
            textColor="#414144"
            minLength={5}
            maxLength={10}
            inputType="text"
            placeholder="Contraseña"
            placeholderColor="#414144"
            marginTop={30}
          />
        </View>
        <Text style={styles.forgotPassword} onPress={handleForgotPasswordPress}>
          ¿Olvidaste la contraseña?
        </Text>
        <Button
          text="Ingresar"
          customButtonStyle={styles.button}
          onPress={handleLoginPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: '5%',
    paddingHorizontal: '15%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    width: '100%',
    paddingBottom: '10%',
    maxHeight: '80%',
  },
  goBack: {
    paddingTop: 20,
    paddingLeft: 20,
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Kodchasan-SemiBold',
    marginBottom: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontFamily: 'Kodchasan-SemiBold',
    marginBottom: '1%',
  },
  subtitle: {
    lineHeight: 20,
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    marginBottom: '12%',
  },
  formContainer: {
    width: '100%',
  },
  containerHeader: {
    paddingHorizontal: '10%',
  },
  forgotPassword: {
    display: 'flex',
    color: 'black',
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    marginTop: 3,
    alignSelf: 'flex-end',
    marginBottom: '20%',
  },
  button: {
    width: '100%',
  },
});

export default LoginScreen;
