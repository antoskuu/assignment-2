import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    const load = async () => {
      const n = await AsyncStorage.getItem('settings_name');
      const c = await AsyncStorage.getItem('settings_city');
      if (n) setName(n);
      if (c) setCity(c);
    };
    load();
  }, []);

  const save = async () => {
    await AsyncStorage.setItem('settings_name', name || '');
    await AsyncStorage.setItem('settings_city', city || '');
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff7c8ff'}} contentContainerStyle={{padding: 16}}>
      <Text style={{fontSize: 24, fontWeight: '600', marginBottom: 16}}>Settings</Text>
      <View style={{marginBottom: 12}}>
        <Text style={{marginBottom: 6}}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter name"
          style={{backgroundColor: 'white', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: '#ddd'}}
        />
      </View>
      <View style={{marginBottom: 20}}>
        <Text style={{marginBottom: 6}}>City</Text>
        <TextInput
          value={city}
          onChangeText={setCity}
          placeholder="Enter city"
          style={{backgroundColor: 'white', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: '#ddd'}}
        />
      </View>
      <TouchableOpacity onPress={save} style={{backgroundColor: '#000', paddingVertical: 12, borderRadius: 8, alignItems: 'center'}}>
        <Text style={{color: 'white', fontWeight: '600'}}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Settings;
