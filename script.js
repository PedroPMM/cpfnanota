// script.js

// Função para gerar CPF aleatório válido
function gerarCpf() {
    // Gera os 9 primeiros números aleatórios
    let n = '';
    for (let i = 0; i < 9; i++) {
        n += Math.floor(Math.random() * 10);
    }

    // Função para calcular os dígitos verificadores
    function calcularDigitos(cpfBase) {
        // Calculando o primeiro dígito
        let soma1 = 0;
        let peso1 = 10;
        for (let i = 0; i < 9; i++) {
            soma1 += parseInt(cpfBase[i]) * peso1--;
        }
        let digito1 = (soma1 * 10) % 11;
        if (digito1 === 10 || digito1 === 11) digito1 = 0;

        // Calculando o segundo dígito
        let soma2 = 0;
        let peso2 = 11;
        for (let i = 0; i < 9; i++) {
            soma2 += parseInt(cpfBase[i]) * peso2--;
        }
        soma2 += digito1 * 2;
        let digito2 = (soma2 * 10) % 11;
        if (digito2 === 10 || digito2 === 11) digito2 = 0;

        return cpfBase + digito1 + digito2;
    }

    // Calcula o CPF completo com os dois dígitos
    return calcularDigitos(n);
}

// Exibe o CPF gerado
document.getElementById('generate').addEventListener('click', () => {
    const cpf = gerarCpf();
    document.getElementById('cpf').innerText = formatarCpf(cpf);
});

// Função para formatar o CPF para o formato XXX.XXX.XXX-XX
function formatarCpf(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}