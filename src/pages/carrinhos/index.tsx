import {GetStaticProps} from 'next'
interface Carrinho { 
    id: string;
    data: string;
    valor: string;

}
  
interface Carrinhos { 
    carrinhos: Carrinho[]
}

export default function Carrinhos({carrinhos}: Carrinhos){
    return (
        <div>
            <h1> Carrinhos </h1>
                <ul>
                {carrinhos.map( carrinho => (
                    <li key={carrinho.id}> Data = {carrinho.data} | Valor = {carrinho.valor} </li>
                ))}
            </ul>
    </div>
    )
}

export const getStaticProps: GetStaticProps<Carrinhos> = async() => {
  const response = await fetch('http://localhost:3333/carrinhos')
  const carrinhos = await response.json()
  return {
    props: {
      carrinhos 
    },
    revalidate: 5000
  }
}