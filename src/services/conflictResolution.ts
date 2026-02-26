import {Period, ScheduleUpdateMessage, Substitution, Teacher} from '../types/schema';

export type LocalScheduleState = {
  teachers: Teacher[];
  periods: Period[];
  substitutions: Substitution[];
  lastTimestamp: number;
};

export function shouldApplyRemoteUpdate(
  localState: LocalScheduleState,
  incoming: ScheduleUpdateMessage,
  hasValidAdminSignature: boolean
): boolean {
  if (!hasValidAdminSignature) {
    return false;
  }

  return incoming.timestamp > localState.lastTimestamp;
}

export function mergeScheduleUpdate(localState: LocalScheduleState, incoming: ScheduleUpdateMessage): LocalScheduleState {
  return {
    teachers: incoming.payload.teachers,
    periods: incoming.payload.periods,
    substitutions: incoming.payload.substitutions,
    lastTimestamp: incoming.timestamp
  };
}
