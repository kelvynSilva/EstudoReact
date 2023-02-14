import './TabelaProdutos.css'
import React from "react";
import produtos from '../../data/produtos';

export default () => {
    const produtoLi = produtos.map((produto, index) => {
        return (
            <tr key={produto.id} className={index % 2 == 0 ? 'Par' : ''}>
                <th >{produto.id}</th>
                <th >{produto.nome}</th>
                <th >{produto.valor.toFixed(2).replace('.', ',')}</th>
            </tr>
        )
    });

    return (
        <div className='TabelaProduto'>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>VAlOR</th>
                    </tr>
                </thead>
                <tbody>
                    {produtoLi}
                </tbody>
            </table>
        </div>
    )
}
