import {useState} from 'react'
import dynamic from 'next/dynamic'

export default function Calculo2(){

    // componente carregado
    const Modal = dynamic( () => import ('../components/Modal')
        .then(mod => mod.Modal),
        {
            loading: () => <p> Loading ...</p>,
            ssr: false // não vou criar a página deste componente 
        }
    )
    
    // iniciamos o estado modalVisible como falso
    const [modalVisible, setModalVisible] = useState(false)

    // função para tornar modalVisible true
    function handleModalVisible(){
        setModalVisible(true)
    }

    return (
        <div>
            <h1> Cálculo </h1>
            <button onClick={handleModalVisible}> Sum </button>
            {/* Lazy Load Component */}
            {
                modalVisible && <Modal />
            }
        </div>
    )
}