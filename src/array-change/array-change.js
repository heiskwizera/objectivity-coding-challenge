function ArrayChange(originalArray, updatedArray) {
  const addedElements = updatedArray.filter((item) => !originalArray.includes(item));
  const removedElements = originalArray.filter((item) => !updatedArray.includes(item));
  return {
    "Added Elements": addedElements,
    "Removed Elements": removedElements,
  };
}

export default ArrayChange;