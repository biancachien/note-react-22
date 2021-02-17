import React, { useState } from 'react'

function SelectBox() {
  //useState('')使用狀態為'字串'
  const [text, setText] = useState('')

  //e為表單元素，會促發事件
  const handleChange = (e) => {
    // 先計算最後的更新值，建立一個新的值的變數(or常數)
    //使下列的setText(newText)和console.log(newText)能同時呈現
    const newText = e.target.value

    // **後執行(非同步)** 用途-給react設定狀態用(呈現畫面用)(例如購物車顯示數量)
    //設定狀態
    setText(newText)

    // **先執行** 用途-作其它事用(例如購物車檢查有沒有庫存)
    //讀出狀態
    console.log(newText)
  }

  return (
    <>
      <>
        {/* 下拉選單 */}
        <select onChange={handleChange} value={text}>
          <option value="JavaScript" key={1}>
            JavaScript
          </option>
          <option value="Angular2" key={2}>
            Angular2
          </option>
          <option value="React" key={3}>
            React
          </option>
        </select>
        <h1>{text}</h1>
      </>
    </>
  )
}

export default SelectBox
