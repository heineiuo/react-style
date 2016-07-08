const factory = (s={}) => {
  return (state) => {
    return Object.assign({}, s.default, s[state]||{})
  }
}

export default factory