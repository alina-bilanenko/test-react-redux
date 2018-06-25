export const filter = (state = { gender: 'all', hair_color: ['all'], mass: 'all' }, action) => {
  switch (action.type) {
    case 'FILTER':
      return {
        gender: action.gender,
        hair_color: action.hair_color,
        mass: action.mass
      }

    default:
      return state
  }
}
