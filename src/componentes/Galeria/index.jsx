import React, { useState } from "react";
import Tags from "../Tags";
import styles from "./Galeria.module.scss";
import fotos from "./fotos.json";
import Cards from "./Cards";


export default function Galeria() {
  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map((valor) => valor.tag))] //new Set para fazer com que a tag seja única

  const filtraFotos = (tag) =>{
    const novasFotos = fotos.filter((foto) =>{
      return foto.tag === tag;
    })
    setItens(novasFotos)
  }


  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags 
        filtraFotos = {filtraFotos} 
        tags={tags} 
        setItens = {setItens}
      />
      <Cards
        itens={itens} 
        styles={styles} 
      />
    </section>
  );
}
