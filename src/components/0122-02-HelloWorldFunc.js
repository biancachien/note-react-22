// 透過props傳入參數得到父母元件傳來的屬性值
function HelloWorldFunc(props) {
  // 函式型元件的解構賦值
  const { name, text } = props

  return (
    <h1>
      {name}, {text}
    </h1>
  )
}

export default HelloWorldFunc
