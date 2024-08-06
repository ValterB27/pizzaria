function enviarPedido() {
    const tamanho = document.getElementById('tamanho').value;
    const sabor = document.getElementById('sabor').value;
    const bebidas = document.getElementById ("bebidas").value;
    const quantidadepizza = document.getElementById("quantidade-pizza").value
    const quantidadebebida = document.getElementById("quantidade-bebida").value
    const endereço = document.getElementById("endereço").value
    const numeroPizzaria = "5531999465620"; // Substitua pelo número da pizzaria

    const mensagem = `Olá, gostaria de pedir uma pizza 
        •${tamanho} 
    
    sabor 
        •${sabor} 
        
    quantidade de pizza 
        •${quantidadepizza}
    
    bebida
        •${bebidas} 
        
    quantidade de bebidas
        •${quantidadebebida}
    
    meu endereço é 
        •${endereço}.`;

    const urlWhatsApp = `https://wa.me/${numeroPizzaria}?text=${encodeURIComponent(mensagem)}`;

    window.open(urlWhatsApp, '_blank');
}
