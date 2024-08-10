import { useState } from 'react';
import './Index.less'
function HellowReact() {
  const [num, setCount] = useState(0)

  function add() {
    setCount(num+1)
  }
  function reduct(){
    setCount(num-1)
  }
  return (
    <div className='main'>
      这是我的第一个组件
      <div className='main_text'>{num}</div>
      <button className='main_btn' onClick={add}>加</button>
      <button  className='main_btn' onClick={reduct}>减</button>
    </div>
  )
}

export default HellowReact
