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