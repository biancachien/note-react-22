import React from 'react'

//類別CountClass繼承自React.Component
class CountClass extends React.Component {
  constructor() {
    //super是呼叫React.component這個類別的建構式(constructor)
    super()
    //this.state宣告狀態
    this.state = {
      //狀態只有total，初始值為零
      total: 0,
    }
  }

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button
          onClick={() => {
            //this.setState為繼承React.component而來
            //setState裡只能放物件值
            this.setState({ total: this.state.total + 1 })
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({ total: this.state.total - 1 })
          }}
        >
          -1
        </button>
      </>
    )
  }
}

export default CountClass
