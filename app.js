
document.addEventListener('DOMContentLoaded', function() {
    var simRadio = document.getElementById('sim');
    var dataValidadeContainer = document.getElementById('dataValidadeContainer');
    var dataValidadeInput = document.getElementById('dataValidade');

    // Mostra ou esconde o campo de data de validade com base na seleção do rádio
    simRadio.addEventListener('change', function() {
        dataValidadeInput.required = simRadio.checked;
        dataValidadeContainer.style.display = simRadio.checked ? 'block' : 'none';
    });

    var naoRadio = document.getElementById('nao');
    naoRadio.addEventListener('change', function() {
        dataValidadeInput.required = !naoRadio.checked;
        dataValidadeContainer.style.display = naoRadio.checked ? 'none' : 'block';
    });
});

// Atualiza a unidade de medida e a máscara do campo de quantidade utilizando inputmask e jquery
document.addEventListener('DOMContentLoaded', function() {
    var unidadeMedidaSelect = document.getElementById('unidadeMedida');
    var unidadeMedidaAddon = document.getElementById('unidadeMedidaAddon');
    var qtdInput = document.getElementById('qtd');

    
    unidadeMedidaSelect.addEventListener('change', function() {
        var unidadeMedida = unidadeMedidaSelect.value;
        var unidades = { 'KG': 'Kg', 'UN': 'Un', 'LT': 'Lt' };
        unidadeMedidaAddon.textContent = unidades[unidadeMedida] || '';

        switch (unidadeMedida) {
            case 'KG':
            case 'LT':
                $(qtdInput).inputmask('decimal', {
                    rightAlign: false,
                    radixPoint: ',',
                    digits: 3,
                    placeholder: '0',
                    autoGroup: false,
                    allowMinus: false,
                    allowPlus: false,
                });
                break;
            case 'UN':
                $(qtdInput).inputmask('integer', {
                    rightAlign: false,
                    allowMinus: false,
                    allowPlus: false,
                });
                break;
            default:
                $(qtdInput).inputmask('remove');
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('meuForm');

    // Salva os dados do formulário no localStorage
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var formData = {
            itemName: document.getElementById('itemName').value,
            qtd: document.getElementById('qtd').value,
            unidadeMedida: document.getElementById('unidadeMedida').value,
            price: document.getElementById('price').value,
            produtoPerecivel: document.querySelector('input[name="radio"]:checked').value,
            dataValidade: document.getElementById('dataValidade').value,
            dataFabricacao: document.getElementById('dataFabricacao').value
        };

        var existingData = JSON.parse(localStorage.getItem('formData')) || [];
        var existingItemIndex = existingData.findIndex(item => item.itemName === formData.itemName);

        if (existingItemIndex !== -1) {
            existingData[existingItemIndex] = formData;
        } else {
            existingData.push(formData);
        }

        localStorage.setItem('formData', JSON.stringify(existingData));

        alert('Dados salvos com sucesso!');
        
    });
});

// Extrai parâmetros da URL
function getQueryParam(param) {
    var search = window.location.search.substring(1);
    var params = search.split("&");
    for (var i = 0; i < params.length; i++) {
        var pair = params[i].split("=");
        if (pair[0] === param) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
}

document.addEventListener('DOMContentLoaded', function() {
    var editItemName = getQueryParam('edit');
    if (editItemName) {
        var existingData = JSON.parse(localStorage.getItem('formData'));
        if (existingData) {
            var itemToEdit = existingData.find(item => item.itemName === editItemName);
            if (itemToEdit) {
                console.log('Item a ser editado:', itemToEdit);

                // Marca o input de rádio correspondente ao valor do item
                var produtoPerecivelRadio = document.querySelector('input[name="radio"][value="' + itemToEdit.produtoPerecivel + '"]');
                if (produtoPerecivelRadio) {
                    produtoPerecivelRadio.checked = true;
                }
                for (var key in itemToEdit) {
                    var input = document.getElementById(key);
                    if (input && input.type !== 'radio') {
                        if (input.type === 'text' || input.type === 'select-one' || input.type === 'date') {
                            input.value = itemToEdit[key];
                        }
                    }
                }

                document.getElementById('dataValidadeContainer').style.display = itemToEdit.produtoPerecivel === 'sim' ? 'block' : 'none';
            }
        }
    }
});

// Adiciona uma linha à tabela com os dados do item
function adicionarLinhaTabela(item) {
    var tableBody = document.querySelector('#tabela tbody');
    var row = tableBody.insertRow();

     row.insertCell().textContent = item.itemName;
     row.insertCell().textContent = item.qtd; 
     row.insertCell().textContent = item.unidadeMedida; 
     row.insertCell().textContent = item.price;
     row.insertCell().textContent = item.produtoPerecivel;
     row.insertCell().textContent = formatarData(item.dataValidade); // Formatando a data de validade
     row.insertCell().textContent = formatarData(item.dataFabricacao); // Formatando a data de fabricação

    var cell = row.insertCell();
    var editarButton = document.createElement('button');
    editarButton.className = 'btnEdit';
    editarButton.innerHTML = '<i class="bi bi-pencil"></i>';
    editarButton.onclick = function() {
        window.location.href = "index.html?edit=" + encodeURIComponent(item.itemName);
    };

    var excluirButton = document.createElement('button');
    excluirButton.className = 'btnDelete';
    excluirButton.innerHTML = '<i class="bi bi-x-octagon"></i>';
    excluirButton.onclick = function() {
        if (confirm("Tem certeza que deseja excluir o item?")) {
            var existingData = JSON.parse(localStorage.getItem('formData'));
            var index = existingData.findIndex(element => element.itemName === item.itemName);
            if (index !== -1) {
                existingData.splice(index, 1);
                localStorage.setItem('formData', JSON.stringify(existingData));
                row.remove();

                Swal.fire({
                    title: 'Sucesso!',
                    text: 'O item foi REMOVIDO da lista!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  });
            }

        }
    };
    cell.appendChild(editarButton);
    cell.appendChild(excluirButton);
}
function formatarData(data) {
    var partesData = data.split('-');
    if (partesData.length === 3) {
        return partesData[2] + '/' + partesData[1] + '/' + partesData[0];
    } else {
        return data; // Retorna a data original se não estiver no formato esperado
    }
}

// Popula a tabela com os dados armazenados
function popularTabela() {
    var existingData = JSON.parse(localStorage.getItem('formData'));
    if (existingData) {
        existingData.forEach(adicionarLinhaTabela);
    }
}

document.addEventListener('DOMContentLoaded', popularTabela);

// Validação do formulário
function validation() {
    var nome = document.getElementById("itemName");
    if (nome.value.length >= 50) {
        alert("Tamanho máximo de 50 caracteres");
    }
}

// Redirecionamento para a lista de itens
function redirect() {
    window.location.href = "list.html";
}

document.getElementById('price').addEventListener('input', function(event) {
    var value = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
    var formattedValue = '';

    // Adiciona um zero à esquerda se o valor for vazio ou começar com um ponto decimal
    if (value === '' || value === '.') {
        formattedValue = 'R$ 0,00';
    } else {
        // Obtém a parte inteira e decimal do valor
        var integerPart = value.slice(0, -2);
        var decimalPart = value.slice(-2);

        // Formata a parte inteira com separadores de milhares
        formattedValue = 'R$ ' + integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + decimalPart;
    }

    // Atualiza o valor do campo
    event.target.value = formattedValue;
});


