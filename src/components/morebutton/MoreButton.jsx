import React from 'react'
import { Button } from './MoreButton.style'

function MoreButton() {

    return (
        <Button>
            <img src={process.env.PUBLIC_URL + `/images/more.png`} alt="더보기버튼" width="25px"/>
        </Button>
    )
}

export default MoreButton
