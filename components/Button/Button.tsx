import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  PixelRatio,
} from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
  buttonColor?: string;
  buttonSize?: 'small' | 'medium';
  textColor?: string;
  customButtonStyle?: StyleProp<ViewStyle>;
  customTextStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  buttonColor = 'black',
  buttonSize = 'medium',
  textColor = 'white',
  customButtonStyle,
  customTextStyle,
}) => {
  const getButtonSizeStyle = () => {
    switch (buttonSize) {
      case 'small':
        return styles.buttonSmall;
      default:
        return styles.buttonMedium;
    }
  };

  const getFontSize = () => {
    const fontScale = PixelRatio.getFontScale();
    const baseFontSize = buttonSize === 'small' ? 12 : 16;

    return baseFontSize * fontScale;
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonSizeStyle(),
        {backgroundColor: buttonColor},
        customButtonStyle,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonText,
          {color: textColor, fontSize: getFontSize()},
          customTextStyle,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonSmall: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  buttonMedium: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});

export default Button;
