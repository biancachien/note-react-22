import HelloWorldFunc from './components/HelloWorldFunc'
import HelloWorldClass from './components/HelloWorldClass'

function App() {
  return (
    <>
      {/* 利用props屬性傳資料給子女元件 */}
      <HelloWorldFunc name={undefined} />
      <HelloWorldClass />
    </>
  )
}

export default App
