# SchoolMeshNetwork

Initial React Native project structure for a local-first school schedule sync app on Samsung tablets.

## Included foundation

- RxDB + SQLite bootstrap for offline collections:
  - `teachers`
  - `periods`
  - `substitutions`
- P2P discovery scaffolding:
  - `react-native-zeroconf` (local Wi-Fi discovery)
  - `react-native-ble-manager` (Bluetooth fallback)
- Conflict resolution helper:
  - Admin-signed update is required.
  - Newer timestamp overrides local schedule state.
  - Applied update is re-broadcast to visible peers.
- Basic screens:
  - `Today's Schedule` for teachers
  - `Admin Dashboard` protected by password gate

## Next steps

1. Wire native permissions for BLE/Wi-Fi discovery on Android tablet profiles.
2. Replace placeholder admin password with private-key signing + signature verification.
3. Bind RxDB query streams to screens for live schedule updates.
4. Add local transport adapters for Wi-Fi and BLE message propagation.
