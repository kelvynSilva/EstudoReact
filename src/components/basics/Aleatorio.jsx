import React from "react";

export default (min) => {
    var minn = Math.ceil(min.valor1);
    var maxx = Math.floor(min.valor2);
    var result = Math.floor(Math.random() * (maxx - minn + 1) + minn)
    return (
        <div>
            <h2>{result}</h2>
        </div>
    )
}