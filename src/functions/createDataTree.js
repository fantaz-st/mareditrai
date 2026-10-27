const createDataTree = (dataset = []) => {
  const hashTable = Object.create(null);
  dataset.forEach((aData) => (hashTable[aData.databaseId] = { ...aData, childNodes: [] }));
  const dataTree = [];
  dataset.forEach((aData) => {
    const parent = aData.parentDatabaseId ? hashTable[aData.parentDatabaseId] : null;
    if (parent) parent.childNodes.push(hashTable[aData.databaseId]);
    else dataTree.push(hashTable[aData.databaseId]);
  });
  return dataTree;
};

export default createDataTree;
