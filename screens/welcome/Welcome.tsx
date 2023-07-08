import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import Button from '../../components/Button/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {Welcome: undefined; Login: undefined};

type WelcomeScreenProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

const WelcomeScreen: React.FC<WelcomeScreenProp> = ({navigation}) => {
  // Ahora puedes usar navigation.navigate sin error
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/home.png')}
        style={styles.backgroundImage}
      />
      <Text style={styles.titleHome}>Pegi</Text>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Bienvenido</Text>
        </View>
        <Text style={styles.text}>
          Asombroso cómo este sistema de desarrollo te permite gestionar tu
          academia online desde la comodidad de tu hogar.
        </Text>
        <Button text="Inicio de sesión" onPress={handleLoginPress} />
      </View>
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
    borderWidth: 0,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: '5%',
    paddingHorizontal: '10%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    width: '100%',
    paddingBottom: '10%',
    maxHeight: '50%',
  },
  titleContainer: {
    alignSelf: 'flex-start',
    marginBottom: '3%',
  },
  title: {
    color: '#1E1E1E',
    fontSize: 36,
    textAlign: 'left',
    fontFamily: 'Kodchasan-Medium',
  },
  text: {
    color: '#1E1E1E',
    lineHeight: 20,
    fontSize: 14,
    textAlign: 'left',
    marginBottom: '10%',
    fontFamily: 'Kodchasan-Medium',
  },
  titleHome: {
    color: '#FFFFFF',
    fontSize: 54,
    fontFamily: 'Kodchasan-Medium',
    position: 'absolute',
    top: windowHeight * 0.28,
  },
});

export default WelcomeScreen;
