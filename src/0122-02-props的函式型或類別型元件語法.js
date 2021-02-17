import HelloWorldFunc from './components/HelloWorldFunc'
import HelloWorldClass from './components/HelloWorldClass'

function App() {
  return (
    <>
      {/* 利用props屬性傳資料給子女元件 */}
      <HelloWorldFunc text="歡迎回來" name="凱莉" />
      <HelloWorldClass text="歡迎回來" name="凱莉" />
    </>
  )
}

export default App
