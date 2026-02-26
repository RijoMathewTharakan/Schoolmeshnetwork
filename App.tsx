import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {bootstrapDatabase} from './src/db/bootstrap';
import {AdminDashboardScreen} from './src/screens/AdminDashboardScreen';
import {TodayScheduleScreen} from './src/screens/TodayScheduleScreen';

export default function App(): React.JSX.Element {
  const [view, setView] = useState<'teacher' | 'admin'>('teacher');

  useEffect(() => {
    void bootstrapDatabase();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, padding: 16}}>
      <View style={{flexDirection: 'row', gap: 8, marginBottom: 16}}>
        <TouchableOpacity onPress={() => setView('teacher')}>
          <Text>Today&apos;s Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setView('admin')}>
          <Text>Admin Dashboard</Text>
        </TouchableOpacity>
      </View>
      {view === 'teacher' ? <TodayScheduleScreen teacherId="teacher-001" /> : <AdminDashboardScreen />}
    </SafeAreaView>
  );
}
