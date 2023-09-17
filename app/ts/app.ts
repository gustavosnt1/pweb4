let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const pessoa1 = new Pessoa("Gustavo", 20, new Date("2002-03-10"));
const pessoaFisica1 = new PessoaFisica("Clods", 19, new Date("1998-05-20"), "123.456.789-00");
const pessoaJuridica1 = new PessoaJuridica("LTDA", 3, new Date("2020-02-10"), "12.345.678/0001-90");

console.log("pessoa:");
console.log("nome:", pessoa1.nome);
console.log("idade:", pessoa1.idade);
console.log("data:", pessoa1.dataNascimento);

console.log("\npessoa fisica:");
console.log("nome:", pessoaFisica1.nome);
console.log("idade:", pessoaFisica1.idade);
console.log("datao:", pessoaFisica1.dataNascimento);
console.log("cpf:", pessoaFisica1.cpf);

console.log("\npessao juridica:");
console.log("nome:", pessoaJuridica1.nome);
console.log("idade:", pessoaJuridica1.idade);
console.log("data:", pessoaJuridica1.dataNascimento);
console.log("cnpj:", pessoaJuridica1.cnpj);
