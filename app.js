//Data de validade obrigatória caso o perecivel for == sim
document.addEventListener('DOMContentLoaded', function() {
    var simRadio = document.getElementById('sim');
    var dataValidadeContainer = document.getElementById('dataValidadeContainer');
    var dataValidadeInput = document.getElementById('dataValidade');

    simRadio.addEventListener('change', function() {
        if (simRadio.checked) {
            dataValidadeInput.required = true;
            dataValidadeContainer.style.display = 'block';
        } else {
            dataValidadeInput.required = false;
            dataValidadeContainer.style.display = 'none';
        }
    });
    
    var naoRadio = document.getElementById('nao');
    naoRadio.addEventListener('change', function() {
        if (naoRadio.checked) {
            dataValidadeInput.required = false;
            dataValidadeContainer.style.display = 'none';
        }
    });
});

//Adicionar unidade de medida na quantidadr
document.addEventListener('DOMContentLoaded', function() {
    var unidadeMedidaSelect = document.getElementById('unidadeMedida');
    var quantidadeInput = document.getElementById('qtd');
    var unidadeMedidaAddon = document.getElementById('unidadeMedidaAddon');

    unidadeMedidaSelect.addEventListener('change', function() {
        var unidadeMedida = unidadeMedidaSelect.value;
        switch (unidadeMedida) {
            case 'KG':
                unidadeMedidaAddon.textContent = 'Kg';
                break;
            case 'UN':
                unidadeMedidaAddon.textContent = 'Un';
                break;
            case 'LT':
                unidadeMedidaAddon.textContent = 'Lt';
                break;
            default:
                unidadeMedidaAddon.textContent = '';
                break;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('meuForm'); 
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

        // Lê os valores do formulário
        var itemName = document.getElementById('itemName').value;
        var unidadeMedida = document.getElementById('unidadeMedida').value;
        var qtd = document.getElementById('qtd').value;
        var price = document.getElementById('price').value;
        var produtoPerecivel = document.querySelector('input[name="radio"]:checked').value;
        var dataValidade = document.getElementById('dataValidade').value;
        var dataFabricacao = document.getElementById('dataFabricacao').value;

        var formData = {
            itemName,
            unidadeMedida,
            qtd,
            price,
            produtoPerecivel,
            dataValidade,
            dataFabricacao
        };

        // Salva os dados no localStorage
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Dados salvos com sucesso!');
    });
});



//Validações
function validation(){
    var nome = document.getElementById("itemName");

    if (nome.value.length >= 50){
        alert("Tamanho máximo de 50 caracteres");
    }
}

//ver lista através do botão
function redirect() {
    window.location.href = "list.html";
}