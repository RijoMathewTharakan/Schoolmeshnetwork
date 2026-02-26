import React from 'react';
import {Text, View} from 'react-native';

type Props = {
  teacherId: string;
};

export function TodayScheduleScreen({teacherId}: Props): React.JSX.Element {
  return (
    <View>
      <Text style={{fontSize: 18, fontWeight: '600'}}>Today&apos;s Schedule</Text>
      <Text>Teacher: {teacherId}</Text>
      <Text>Periods and substitutions are loaded from local RxDB.</Text>
    </View>
  );
}
