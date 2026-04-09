import m1 from './001_create_resumes_store.js';

export const migrations = [m1].sort((a, b) => a.version - b.version);