import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email === 'admin@admin.com' && senha === '1234') {
      Alert.alert('Login successful');
    } else {
      Alert.alert('Login failed');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Simulação do logo */}
      <View style={styles.logo}>
        <View style={styles.cubeRow}>
          <View style={styles.cube} />
          <View style={styles.cube} />
          <View style={styles.cube} />
        </View>
        <View style={styles.cubeRow}>
          <View style={styles.cube} />
          <View style={[styles.cube, { backgroundColor: '#000' }]} />
          <View style={styles.cube} />
        </View>
        <View style={styles.circle} />
      </View>

      <Text style={styles.title}>Sistema de Login</Text>
      <Text style={styles.subtitle}>Bem vindo(a)! Digite seus dados abaixo.</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="********"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>Não tem uma conta? </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.credit}>Criado por Fulano</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    marginBottom: 16,
    alignItems: 'center',
  },
  cubeRow: {
    flexDirection: 'row',
  },
  cube: {
    width: 20,
    height: 20,
    backgroundColor: '#ccc',
    margin: 2,
  },
  circle: {
    width: 20,
    height: 20,
    backgroundColor: '#000',
    borderRadius: 10,
    marginTop: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 12,
  },
  subtitle: {
    color: '#888',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#3b5bdb',
    padding: 12,
    borderRadius: 6,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    color: '#3b5bdb',
    marginTop: 8,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  credit: {
    marginTop: 40,
    fontSize: 12,
    color: '#aaa',
  },
})
