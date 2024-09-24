import React, { useState } from 'react'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const LoadingButton = () => {
    const [loading, setLoading] = useState("");

    const btnClick = (e) => {
        setLoading(e.currentTarget.name);
        // here we will write API calls.
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }
    return (
        <>
            <Button name='Search' style={{ marginRight: "10px" }} color='default' variant='solid' size='large' icon={<SearchOutlined />}
                onClick={btnClick} loading={loading === "Search"}>Search</Button>

            <Button name="Download" style={{ marginRight: "10px" }} color='default' variant='solid' size='large' icon={<SearchOutlined />}
                onClick={btnClick} loading={loading === "Download"}>Download</Button>
        </>
    )
}

export default LoadingButton