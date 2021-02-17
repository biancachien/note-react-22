// 函式型元件透過props傳入參數(name、text)得到父母元件傳來的屬性值
//APP.js(父母元件)傳給HelloWorld.js(子女元件)--稱單向資料流、向下資料流
function HelloWorld(props) {
  return (
    <h1>
      {props.name}, {props.text}
    </h1>
  )
}

export default HelloWorld
