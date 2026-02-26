import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {validateAdminAccess} from '../auth/adminAuth';

export function AdminDashboardScreen(): React.JSX.Element {
  const [password, setPassword] = useState('');
  const [allowed, setAllowed] = useState(false);

  if (!allowed) {
    return (
      <View>
        <Text style={{fontSize: 18, fontWeight: '600'}}>Admin Dashboard</Text>
        <TextInput secureTextEntry value={password} onChangeText={setPassword} placeholder="Enter admin password" />
        <Button title="Unlock" onPress={() => setAllowed(validateAdminAccess(password))} />
      </View>
    );
  }

  return (
    <View>
      <Text style={{fontSize: 18, fontWeight: '600'}}>Admin Dashboard</Text>
      <Text>Assign substitutions and broadcast ScheduleUpdate to peers.</Text>
    </View>
  );
}
