import React from 'react'
import Input from 'antd/es/input/Input'
import { UserOutlined } from '@ant-design/icons'
const Day2Exercise1 = () => {
  return (
      <div>
          <Input placeholder='name'
                 maxLength={5}
                 prefix={<UserOutlined/> }
          >
           
          </Input>
    </div>
  )
}

export default Day2Exercise1