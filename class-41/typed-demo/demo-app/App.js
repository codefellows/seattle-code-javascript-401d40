import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking } from 'react-native';

// expo requires that we install these via the command line
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';

export default function App() {

  const [contacts, setContacts] = useState([]);
  const [permissions, setPermissions] = useState(false);

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    setPermissions(true);
  }

  const showContacts = async () => {
    const contactList = await Contacts.getContactsAsync();
    console.log(contactList);
    setContacts(contactList.data);
  }

  const call = (contact) => {
    let phoneNumber = contact.phoneNumbers[0].number.replace(/[\(\)\-\s+]/g, '');
    let link = `tel:${phoneNumber}`;
    Linking.canOpenURL(link)
      .then(() => Linking.openURL(link));
  }

  useEffect(() => {
    // if (permissions) {
    //   showContacts();
    // } else {
    getPermissions();
    // }
  }, []);

  return (
    <View style={styles.container}>
      <Button
        onPress={showContacts}
        title="Press to see contacts"
      />
      <View>
        <Text>Contacts</Text>
        <FlatList
          data={contacts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Button title={item.name} onPress={() => call(item)} />}
        />
      </View>
      {/* <Text style={styles.text}>New Stuff!</Text>
      <Text style={styles.largerText}>More text</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // cocktail recipe, 
    paddingTop: 50,
    borderWidth: 5,
    borderColor: "red",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 2,
    backgroundColor: "pink",
  },
  largerText: {
    flex: 3,
    backgroundColor: 'blue'
  }
});
