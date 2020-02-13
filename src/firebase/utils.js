export const mapDocumentsToArray = documents =>
  documents.map(doc => ({ id: doc.id, ...doc.data() }));
