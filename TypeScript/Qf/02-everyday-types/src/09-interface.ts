interface Pt {
  x: number
  y: number
}

function getTheCoord(pt: Pt) {}
getTheCoord({
  x: 100,
  y: 600,
})

// 扩展接口
interface Animal {
  name: string
}
interface Bear extends Animal {
  honey: boolean
}
const bear: Bear = {
  name: 'Winnie',
  honey: true,
}

console.log(bear.name)
console.log(bear.honey)

type Vegetable = {
  name: string
}
type Cabbage = Vegetable & {
  cheap: boolean
}
const cabbage: Cabbage = {
  name: 'Zeh',
  cheap: false,
}

// 向现有类型添加字段
interface MyWindow {
  count: number
}
interface MyWindow {
  name: string
}
const w: MyWindow = {
  count: 7,
  name: 'Ts',
}
