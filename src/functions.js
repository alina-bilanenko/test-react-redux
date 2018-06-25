export function addFilter (selectPeople, newFilter) {
  if (!newFilter) return selectPeople
  return selectPeople.filter(item => {
    let inFilter = { gender: false, mass: false, hair_color: false }
    if (item.gender === newFilter.gender ||
        newFilter.gender === 'all') {
      inFilter.gender = true
    }

    if (checkMass(item.mass, newFilter.mass)) {
      inFilter.mass = true
    }

    const arrHairColor = item.hair_color.split(', ')
    arrHairColor.forEach(elem => {
      if (newFilter.hair_color.indexOf(elem) !== -1 ||
          newFilter.hair_color.indexOf('all') !== -1) {
        inFilter.hair_color = true
      }
    })
    return inFilter.gender && inFilter.mass && inFilter.hair_color
  }
  )
}

function checkMass (item, range) {
  const value = parseInt(item, 10)
  const valueFilter = range === 'all' ? 'all' : parseInt(range, 10)
  switch (valueFilter) {
    case 0:
      return value < 50
    case 50:
      return (value >= 50 && value < 100)
    case 100:
      return (value >= 100 && value < 150)
    case 150:
      return value >= 150
    case 'all':
      return true

    default:
      return false
  }
}

export function stopEvent (e) {
  e.stopPropagation()
}

export function sortString (a, b, fieldSort, doubleSort) {
  let c = a[fieldSort].toLowerCase()
  let d = b[fieldSort].toLowerCase()
  if (c < d) {
    return doubleSort ? -1 : 1
  } else if (c > d) {
    return doubleSort ? 1 : -1
  }
  return 0
}

export function sortNumber (a, b, fieldSort, doubleSort) {
  let c = parseInt(a[fieldSort], 10)
  let d = parseInt(b[fieldSort], 10)
  if (isNaN(c) && isNaN(d)) {
    return 0
  } else if (isNaN(c)) {
    return doubleSort ? 1 : -1
  } else if (isNaN(d)) {
    return doubleSort ? -1 : 1
  } else {
    return doubleSort ? c - d : d - c
  }
}
