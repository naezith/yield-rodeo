export const textHasAnyOfArray = (text, array, exact=false) => {
  for(const t of array) {
    if(exact) {
      if(text === t) return true
    }
    else if(text.indexOf(t) !== -1) return true
  }
  return false
}

export const arrayHasAnyOfArray = (assets, desired, exact=false) => {
  for(const d of desired) {
    if(exact) {
      if(assets.indexOf(d) !== -1) return true
    }
    else {
      for(const a of assets)
        if(a.indexOf(d) !== -1) return true
    }
  }
  return false
}

export const arrayHasAllOfArray = (assets, desired, exact=false) => {
  for(const a of assets) {
    if(exact) {
      if(desired.indexOf(a) === -1) return false
    }
    else {
      let exists = false
      for(const d of desired) {
        if(a.indexOf(d) !== -1) {
          exists = true
          break
        }
      }
      if(!exists) return false
    }
  }
  return true
}
