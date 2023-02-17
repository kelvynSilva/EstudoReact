import React from "react";

export default props => {
    return (
        <div>
            <div>
                <button onClick={(e) => {
                    props.quandoCLicar("kelvyn", 28, true);
                }}>
                    fonercer Informações
                </button>
            </div>
        </div>
    )
}