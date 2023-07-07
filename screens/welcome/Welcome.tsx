import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button/Button';

const WelcomeScreen: React.FC = () => {
  const handleLoginPress = () => {
    // Lógica para manejar el evento de inicio de sesión
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

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1E1E1E',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    maxHeight: '50%',
    backgroundColor: '#FFFFFF',
    padding: '5%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },
  titleContainer: {
    alignSelf: 'flex-start',
    marginBottom: '5%',
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
    marginBottom: '5%',
    fontFamily: 'Kodchasan-Medium',
  },
  titleHome: {
    color: '#FFFFFF',
    fontSize: 64,
    fontFamily: 'Kodchasan-Medium',
  },
});

export default WelcomeScreen;
