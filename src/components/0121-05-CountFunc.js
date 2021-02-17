import { useState } from 'react'

//函式型計數器
function CountFunc() {
  //解構賦值
  //total-得到狀態
  //setTotal-設定狀態
  //經由useState這個hook的使用狀態之初始值為0
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}

export default CountFunc
