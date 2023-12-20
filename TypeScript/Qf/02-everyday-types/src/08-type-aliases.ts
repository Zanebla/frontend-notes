type Point = {
  x: number
  y: number
}

function getCoord(pt: Point) {}

getCoord({
  x: 100,
  y: 200,
})

type Id = number | string
function getId(id: Id) {}

getId(12)
getId('hi')

type UserInputSanitizedString = string
function sanitizedInput(str: string): UserInputSanitizedString {
  return str.slice(0, 2)
}
