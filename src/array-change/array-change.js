function getArrayChanges(originalArray, updatedArray) {
  const addedElements = updatedArray.filter((element) => !originalArray.includes(element));
  const removedElements = originalArray.filter((element) => !updatedArray.includes(element));
  return {
    "Added Elements": addedElements,
    "Removed Elements": removedElements,
  };
}

export default getArrayChanges;