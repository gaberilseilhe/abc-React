import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // Convertendo altura para metros
    if (w > 0 && h > 0) {
      const bmiValue = (w / (h * h)).toFixed(2);
      setBmi(bmiValue);
      setCategory(getBMICategory(bmiValue));
    } else {
      setBmi(null);
      setCategory('');
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Abaixo do peso';
    if (bmi >= 18.5 && bmi < 24.9) return 'Peso normal';
    if (bmi >= 25 && bmi < 29.9) return 'Sobrepeso';
    return 'Obesidade';
  };

  return (

    
      <View style={styles.Viewprincipal}>
        <Text style={styles.title}>Calculadora de IMC</Text>
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
        <TextInput
          style={styles.input}
          placeholder="Altura (cm)"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
        <View>
          <TouchableOpacity style={styles.botao}
          onPress={calculateBMI}
          >
            <Text style={styles.texto}>Calcular</Text>
          </TouchableOpacity>
        </View>
        {bmi && (
          <View style={styles.result}>
            <Text style={styles.resultText}>Seu IMC: {bmi}</Text>
            <Text style={styles.resultText}>{category}</Text>
          </View>
        )}
    </View>


  );
}

const styles = StyleSheet.create({
  Viewprincipal: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:30,
    marginHorizontal:30,
    backgroundColor: '#A9A9A9',
    margin: 1,
    borderWidth: 1,
    borderRadius: 20,
    height: 275,
    marginTop:260,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    fontWeight: 'bold',
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    margin:5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#DCDCDC',
    shadowRadius: 7,
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  v1: {

    backgroundColor: 'gray'
  },
  botao: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:8
  },
  texto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});