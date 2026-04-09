import { openDB } from 'idb';
import { DB_VERSION } from './version';
import { migrations } from './migrations';

const DB_NAME = 'ResumeBuilder';
const STORE_NAME = 'resumes';

let db = null;

const initDB = async () => {
  if(db) return db;
  db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db, oldVersion){
      migrations.forEach(migration => {
        if(oldVersion < migration.version){
          migration.up(db);
        }
      })
    }
  });
  return db;
}

export const createResume = async () => {
  const db = await initDB();
  try {
    await db.add(STORE_NAME, resume);
    return { success: true, id: resume.id };
  } catch (error) {
    return { success: false, error: 'Резюме с таким id уже существует' };
  }
}

export const getAllResumes = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};