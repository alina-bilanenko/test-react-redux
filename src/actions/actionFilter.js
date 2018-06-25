export const FILTER = 'FILTER'

export const filter = ({ gender, hair_color, mass }) => ({
  type: FILTER,
  gender,
  hair_color,
  mass
})
