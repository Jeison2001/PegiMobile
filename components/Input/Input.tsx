import React, {useState} from 'react';
import {TextInput, Text, StyleSheet, View} from 'react-native';

interface InputProps {
  height?: number;
  backgroundColor?: string;
  textColor?: string;
  minLength?: number;
  maxLength?: number;
  inputType?: 'text' | 'number' | 'email' | 'pdf';
  placeholder?: string;
  placeholderColor?: string;
  marginTop?: number;
  marginBottom?: number;
}

const Input: React.FC<InputProps> = ({
  height = 40,
  backgroundColor = 'white',
  textColor = 'black',
  minLength,
  maxLength,
  inputType = 'text',
  placeholder,
  placeholderColor,
  marginTop = 0,
  marginBottom = 0,
}) => {
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleTextChange = (newText: string) => {
    setText(newText);
    setErrorMessage(null);
  };

  const validateTextInput = () => {
    if (minLength && text.length < minLength) {
      return `Debe tener al menos ${minLength} caracteres`;
    } else if (maxLength && text.length > maxLength) {
      return `No puede exceder ${maxLength} caracteres`;
    } else if (inputType === 'number' && !/^\d+$/.test(text)) {
      return 'Solo se permiten números';
    } else if (
      inputType === 'email' &&
      !/\b[A-Za-z0-9._%+-]+@unicesar.edu.co\b/.test(text)
    ) {
      return 'Ingrese un correo válido de la UNICESAR';
    } else if (inputType === 'pdf' && !text.toLowerCase().endsWith('.pdf')) {
      return 'El archivo debe tener extensión PDF';
    }
    return null;
  };

  const handleBlur = () => {
    const error = validateTextInput();
    setErrorMessage(error);
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <View
      style={[
        styles.container,
        {marginTop: marginTop, marginBottom: marginBottom},
      ]}>
      <View style={styles.inputContainer}>
        {isFocused || text.length > 0 ? (
          <Text style={styles.placeholderText}>{placeholder}</Text>
        ) : null}
        <TextInput
          style={[
            styles.input,
            {
              height,
              backgroundColor,
              color: textColor,
            },
          ]}
          onChangeText={handleTextChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={text}
          autoCapitalize="none"
          placeholder={placeholder}
          placeholderTextColor={
            placeholderColor != null ? placeholderColor : 'black'
          }
        />
      </View>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderColor: 'transparent',
    fontFamily: 'Montserrat-Medium',
  },
  placeholderText: {
    left: 20,
    fontSize: 16,
    color: 'gray',
  },
  error: {
    left: 10,
    color: 'red',
    fontSize: 12,
    margin: 0,
  },
});

export default Input;
