import palette from './palette'

export default function generateRandomColor() {
  const colors = [
    'red',
    'pink',
    'purple',
    'deepPurple',
    'indigo',
    'blue',
    'lightBlue',
    'cyan',
    'teal',
    'green',
    'lightGreen',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deepOrange',
    'brown',
    'grey',
    'blueGrey',
  ]

  // 0 부터 12까지 랜덤 숫자
  const random = Math.floor(Math.random() * 18)

  return palette[colors[random]][600]
}
