function Cliente(parmNome) {
    this.nomeCliente = parmNome;
}

function Conta(nomeCliente, agencia, conta) {
    Cliente.call(this, nomeCliente);

    this.agencia = agencia;
    this.conta = conta;
    let _valorSaldo = 0;

    // Consulta de valores na conta //
    this.getSaldo = function() {
        return _valorSaldo;
    }

    // Deposito de valores na conta //
    this.setDeposito = function(valorDeposito) {
        if (typeof valorDeposito === 'number') {
            _valorSaldo += valorDeposito;
        } else {
            console.log(`Valor do deposito não é numerico ${valorDeposito}`);
        }
    }

    // Saque de valores na conta //
    this.setSaque = function(valorSaque) {
        if (typeof valorSaque === 'number') {
            _valorSaldo -= valorSaque;
        } else {
            console.log(`Valor do saque não é numerico ${valorSaque}`);
        }
    }
}

const cliente01 = new Conta('Bruno Silva', 0001, 123456);
console.log(cliente01);

console.log(`Saldo do cliente ${cliente01.nomeCliente} é: R$ ${cliente01.getSaldo()}`);

// Deposita valor //
cliente01.setDeposito(3500);
console.log(`Saldo do cliente ${cliente01.nomeCliente} após deposito é: R$ ${cliente01.getSaldo()}`);

// Saque de valor //
cliente01.setSaque(50);
console.log(`Saldo do cliente ${cliente01.nomeCliente} após saque é: R$ ${cliente01.getSaldo()}`);