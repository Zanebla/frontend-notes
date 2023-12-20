function printCoord(pt: { x: number; y: number }) {
  console.log('x is ' + pt.x)
  console.log('y is ' + pt.y)
}

printCoord({
  x: 7,
  y: 8,
})

function printName(obj: { first: string; last?: string }) {
  // if (obj.last !== undefined) {
  //   console.log(obj.last.toLowerCase())
  // }
  console.log(obj.last?.toLowerCase())
}

printName({
  first: 'Zhao',
})

printName({
  first: 'Zhao',
  last: 'Zane',
})
