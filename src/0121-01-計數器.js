//useState使用狀態
import { useState } from 'react'

function App() {
  //解構賦值
  //total-得到狀態
  //setTotal-設定狀態
  //經由useState這個hook的使用狀態之初始值為0
  const [total, setTotal] = useState(0)

  return (
    // 模仿html的h1和點擊事件
    // 過程--setTtotal點擊後total+1，再回傳給total變成+1的數字
    // 只有setTotal可以改變total(total在react為常數)
    <h1
      onClick={() => {
        setTotal(total + 1)
      }}
    >
      {total}
    </h1>
  )
}

export default App
