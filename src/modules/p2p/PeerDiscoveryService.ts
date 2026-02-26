import BleManager from 'react-native-ble-manager';
import Zeroconf from 'react-native-zeroconf';

export type PeerInfo = {
  id: string;
  host?: string;
  port?: number;
  via: 'wifi' | 'bluetooth';
};

export class PeerDiscoveryService {
  private readonly zeroconf = new Zeroconf();

  async start(): Promise<void> {
    this.zeroconf.scan('schoolmesh', 'tcp', 'local.');
    await BleManager.start({showAlert: false});
    await BleManager.scan([], 5, true);
  }

  stop(): void {
    this.zeroconf.stop();
    BleManager.stopScan();
  }
}
