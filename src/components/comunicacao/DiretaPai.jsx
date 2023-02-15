import React from "react";

import DiretaFilho from "./DiretaFilho";
export default props => {
    return (
        <>
            <DiretaFilho nome="Maria julha" idade={0.1} nerd={true} />
            <DiretaFilho nome="Pedro" idade={0} nerd={false} />
        </>
    )
}