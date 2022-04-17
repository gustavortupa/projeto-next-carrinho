import { GetStaticPaths, GetStaticProps } from 'next'
import {useRouter} from 'next/router'

interface Item {
    id: string,
    produto: string
}

interface ItemArray {
    itens: Item[]
}

export default function Carrinho({itens}: ItemArray){
    const router = useRouter()
    if(router.isFallback) {
        return <p> Loading ... </p>
    }
    return (
        <>
            <h1> Items {router.query.id}</h1>
            <ul>
                {
                    itens.map(item => (
                        <li key={item.id}> {item.produto} </li>
                    ))
                }
            </ul>
        </>
    )
}


export const getStaticProps: GetStaticProps<ItemArray> = async(context) => {
  
    const {id} = context.params
  
    const response = await fetch(`http://localhost:3333/itens?carrinhoId=${id}`)
    
    const itens = await response.json()

    return {
        props: {
            itens
        },
        revalidate: 5
    }
}


export const getStaticPaths:GetStaticPaths = async() => {

    return {
        paths: [], 
        fallback: true 
    }
}