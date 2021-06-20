function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const textHasAnyOfArray = (text, array, exact=false) => {
  for(const t of array) {
    if(exact) {
      if(text === t) return true
    }
    else if(text.indexOf(t) !== -1) return true
  }
  return false
}