import {toTypedRxJsonSchema} from 'rxdb';

export const teacherSchemaLiteral = {
  title: 'teacher schema',
  description: 'Teacher metadata for local-first schedule sync',
  version: 0,
  keyCompression: true,
  type: 'object',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', maxLength: 100},
    name: {type: 'string'},
    deviceId: {type: 'string'},
    updatedAt: {type: 'number'}
  },
  required: ['id', 'name', 'updatedAt']
} as const;

export const periodSchemaLiteral = {
  title: 'period schema',
  description: 'Teacher schedule periods',
  version: 0,
  keyCompression: true,
  type: 'object',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', maxLength: 100},
    teacherId: {type: 'string'},
    dayOfWeek: {type: 'number', minimum: 1, maximum: 7},
    startTime: {type: 'string'},
    endTime: {type: 'string'},
    className: {type: 'string'},
    room: {type: 'string'},
    updatedAt: {type: 'number'}
  },
  required: ['id', 'teacherId', 'dayOfWeek', 'startTime', 'endTime', 'className', 'room', 'updatedAt']
} as const;

export const substitutionSchemaLiteral = {
  title: 'substitution schema',
  description: 'Substitution assignments from Admin dashboard',
  version: 0,
  keyCompression: true,
  type: 'object',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', maxLength: 100},
    periodId: {type: 'string'},
    originalTeacherId: {type: 'string'},
    substituteTeacherId: {type: 'string'},
    reason: {type: 'string'},
    assignedBy: {type: 'string'},
    signedByAdmin: {type: 'string'},
    timestamp: {type: 'number'}
  },
  required: ['id', 'periodId', 'originalTeacherId', 'substituteTeacherId', 'assignedBy', 'signedByAdmin', 'timestamp']
} as const;

export const teacherSchema = toTypedRxJsonSchema(teacherSchemaLiteral);
export const periodSchema = toTypedRxJsonSchema(periodSchemaLiteral);
export const substitutionSchema = toTypedRxJsonSchema(substitutionSchemaLiteral);
