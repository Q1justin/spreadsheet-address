import { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import * as DocumentPicker from 'expo-document-picker';

export default function App() {

  const [fileResponse, setFileResponse] = useState([]);

  const getAddress = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({});
      console.log(result);
      setFileResponse([]);
    }
    catch(e) {

    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        onPress={getAddress}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
