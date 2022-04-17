export default function Calculo1(){

    async function handleSum(){
        // importação dinâmica
        const calc = (await import('../libs/calc')).default
        alert(calc.sum(6, 9))
    }
 
    return (
        <div>
            <h1> Cálculo </h1>
            <button onClick={handleSum}> Sum </button>
        </div>
    )
}