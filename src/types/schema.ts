export type Teacher = {
  id: string;
  name: string;
  deviceId?: string;
  updatedAt: number;
};

export type Period = {
  id: string;
  teacherId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  className: string;
  room: string;
  updatedAt: number;
};

export type Substitution = {
  id: string;
  periodId: string;
  originalTeacherId: string;
  substituteTeacherId: string;
  reason?: string;
  assignedBy: string;
  signedByAdmin: string;
  timestamp: number;
};

export type ScheduleUpdateMessage = {
  id: string;
  kind: 'ScheduleUpdate';
  timestamp: number;
  adminSignature: string;
  payload: {
    substitutions: Substitution[];
    periods: Period[];
    teachers: Teacher[];
  };
};
