// 透過props傳入參數得到父母元件傳來的屬性值
function HelloWorldFunc(props) {
  // 解構賦值
  const { name, text } = props

  return (
    <h1>
      {name}, {text}
    </h1>
  )
}

// 預設屬性(沒給或給undefined時使用)
HelloWorldFunc.defaultProps = {
  name: '凱莉',
  text: '歡迎回來',
}

export default HelloWorldFunc
