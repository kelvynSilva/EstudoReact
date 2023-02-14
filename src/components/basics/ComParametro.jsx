import React from "react";

export default function ComParamento(params) {

    return (
        <div>
            <h2>{params.titulo}</h2>
            <h3>{params.aluno}</h3>
            <p>{params.nota}</p>
        </div>
    );
}