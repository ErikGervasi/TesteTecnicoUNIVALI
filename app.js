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
        e.preventDefault(); // Impede o envio do formulário

        // Lê os valores do formulário
        var itemName = document.getElementById('itemName').value;
        var unidadeMedida = document.getElementById('unidadeMedida').value;
        var qtd = document.getElementById('qtd').value;
        var price = document.getElementById('price').value;
        var produtoPerecivel = document.querySelector('input[name="radio"]:checked').value;
        var dataValidade = document.getElementById('dataValidade').value;
        var dataFabricacao = document.getElementById('dataFabricacao').value;

        // Cria um objeto com os dados
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
        // Utilize JSON.stringify para converter o objeto em uma string para armazenamento
        localStorage.setItem('formData', JSON.stringify(formData));

        // Opcional: Feedback para o usuário ou redirecionamento
        alert('Dados salvos com sucesso!');
    });
});
