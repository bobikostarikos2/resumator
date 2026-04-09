export const up = (db) => {
  db.createObjectStore('resumes', { keyPath: 'id' });
};

export const version = 1;