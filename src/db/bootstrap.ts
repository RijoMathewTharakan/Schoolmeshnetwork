import {createRxDatabase, RxDatabase} from 'rxdb';
import {getRxStorageSQLiteTrial} from 'rxdb/plugins/storage-sqlite';
import {periodSchemaLiteral, substitutionSchemaLiteral, teacherSchemaLiteral} from './schema';

let dbPromise: Promise<RxDatabase> | null = null;

export async function bootstrapDatabase(): Promise<RxDatabase> {
  if (!dbPromise) {
    dbPromise = createRxDatabase({
      name: 'schoolmesh.db',
      storage: getRxStorageSQLiteTrial({
        databaseName: 'schoolmesh'
      }),
      multiInstance: true
    }).then(async db => {
      await db.addCollections({
        teachers: {schema: teacherSchemaLiteral},
        periods: {schema: periodSchemaLiteral},
        substitutions: {schema: substitutionSchemaLiteral}
      });
      return db;
    });
  }

  return dbPromise;
}
