function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const textHasAnyOfArray = (text, array) => {
  for(const t of array)
    if(text.indexOf(t) !== -1) return true

  return false
}