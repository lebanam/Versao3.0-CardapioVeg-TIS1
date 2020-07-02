$(document).ready(function($){

    montarReceitas();
});

function montarReceitas(){

    let conteudo = "";

    for (let i=0; i<2; i++)
    {
       conteudo+= `<div class="row">`

        for (let j=0; j<4; j++)
        {
            let ingredientes = "";
            
            for (let k=0; k<receitas[j].ingredientes.length; k++)
            {
                ingredientes += `${receitas[j].ingredientes[k]}<br>`
            }

           conteudo+= `<div class="col-12 col-sm-12 col-md-6 col-lg-3">

                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${receitas[j].titulo}</h5>
                                <p class="card-text"> 
                                    ${ingredientes}                                   
                                </p>
                                <a href="#" class="btn btn-outline-success" data-toggle="modal"
                                    data-target="#modal1"><b>Leia mais</b></a>
                                    
                            </div>
                        </div>
                    </div>`
        }

       conteudo+=`</div>`
    }

    $('#receitas-json').html(conteudo);


}




