import React from 'react'
import open from './open.png'
import favorito from './favorito.png'

export default function Card({ item, itens, styles }) {
    return (
        <li key={item.id} className={styles.galeria__card}>
            <img
                className={styles.galeria__imagem}
                src={item.imagem}
                alt={item.titulo}
            />
            <p className={styles.galeria__descricao}>{item.titulo}</p>
            <div>
                <p>{item.creditos}</p>
                <span>
                    <img src={favorito} alt="Ícone coração de curtir" />
                    <img src={open} alt="Ícone de abrir modal" />
                </span>
            </div>
        </li>)
}
