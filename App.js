import { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import * as DocumentPicker from 'expo-document-picker';

export default function App() {

  const [selectedDocument, setSelectedDocument] = useState({});

  const getAddress = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        multiple: false,
        type: [
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'text/comma-separated-values',
          'text/csv'
        ]
      });
      if (result.type === 'success') {
        setSelectedDocument(result)
      }
      console.log(result);
      // Object {
        //CSV
      //   "mimeType": "text/comma-separated-values",
      //xlsx
      // "mimeType": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      //   "name": "RDT_20230411_0938231034377197161664754.jpg",
      //   "size": 814571,
      //   "type": "success",
      //   "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fspreadsheet-address-2c033473-0ae5-405e-b194-6a835d1ac9ec/DocumentPicker/7313749b-04d9-45d3-a8d4-c7a8654aac20.jpg",
      // }
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
