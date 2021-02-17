import HelloWorldFunc from './components/HelloWorldFunc'
import HelloWorldClass from './components/HelloWorldClass'

function App() {
  return (
    <>
      {/* 利用props屬性傳資料給子女元件 */}
      {/* {undefined}可以給函式物件陣列數字字串布林值 */}
      <HelloWorldFunc name={undefined} />
      <HelloWorldClass />
    </>
  )
}

export default App
