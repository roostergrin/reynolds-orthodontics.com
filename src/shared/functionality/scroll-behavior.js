const scrollBehavior = (to, from) => {
  if (to.hash) {
    return {
      selector: to.hash,
      offset: { x: 0, y: 0 }
    }
  } else {
    return {
      x: 0,
      y: 0
    }
  }
}

export default scrollBehavior
