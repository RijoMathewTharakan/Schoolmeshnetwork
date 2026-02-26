import {LocalScheduleState, mergeScheduleUpdate, shouldApplyRemoteUpdate} from '../../services/conflictResolution';
import {ScheduleUpdateMessage} from '../../types/schema';

export type Transport = {
  publish: (message: ScheduleUpdateMessage) => Promise<void>;
};

export class ScheduleSyncService {
  constructor(private readonly transport: Transport) {}

  async broadcastAdminUpdate(update: ScheduleUpdateMessage): Promise<void> {
    await this.transport.publish(update);
  }

  async onIncomingUpdate(
    localState: LocalScheduleState,
    message: ScheduleUpdateMessage,
    hasValidAdminSignature: boolean
  ): Promise<LocalScheduleState> {
    if (!shouldApplyRemoteUpdate(localState, message, hasValidAdminSignature)) {
      return localState;
    }

    const nextState = mergeScheduleUpdate(localState, message);
    await this.transport.publish(message);
    return nextState;
  }
}
