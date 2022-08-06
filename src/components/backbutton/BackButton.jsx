import React from "react";
import { Button } from "./BackButton.style";
import { useNavigate } from "react-router-dom";

function BackButton() {

    const navigate = useNavigate()

    return (
        <Button onClick={() => navigate(-1)}>
            <img
                src={process.env.PUBLIC_URL + `/images/arrow-left.png`}
                alt='뒤로가기 버튼'
                width='25px'
            />
        </Button>
    );
}

export default BackButton;
