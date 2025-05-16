let categorias=[]

function show_categorias(){
    return(
        <>
            <div>
                <h1>Lista de Categorias</h1>
                <br />
                <ul>
                    <li>{categorias.forEach((categoria)=>{})}</li>;
                </ul>
            </div>
        </>
        );
}

export default show_categorias;