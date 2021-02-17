//搭配CountFunc.js和 CountClass.js檔
//CountFunc.js可以不用打副檔案.js

import CountFunc from './components/0121-06-CountFunc'
import CountClass from './components/0121-06-CountClass'

function App() {
  return (
    <>
      <h2>函式型元件</h2>
      {/* 將上面的CountFunc顯示出來 */}
      <CountFunc />
      <h2>類別型元件</h2>
      {/* 將上面的CountClass顯示出來 */}
      <CountClass />
    </>
  )
}

export default App
