// Classe base Funcionario
class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  // Método para apresentação
  seApresentar() {
    return `Nome: ${this.nome},   ${this.idade} anos.`;
  }

  // Método genérico para trabalho
  trabalhar() {
    return `Cargo: ${this.cargo}.`;
  }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  // Método específico para gerenciar
  gerenciar() {
    return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
  }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  // Método específico para programar
  programar() {
    return `${this.nome} está programando em ${this.linguagem}.`;
  }
}

// Função para exibir erros no DOM
function exibirErro(mensagem) {
  document.getElementById('erro').textContent = mensagem;
}

// Função para criar o funcionário com base no formulário
function criarFuncionario() {
  try {
    // Limpar mensagens de erro e resultado
    document.getElementById('erro').textContent = '';
    document.getElementById('resultado').textContent = '';

    // Capturar valores do formulário
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const cargo = document.getElementById('cargo').value;
    const departamento = document.getElementById('departamento').value;
    const linguagem = document.getElementById('linguagem').value;

    // Verificação de campos obrigatórios
    if (!nome || !idade || !cargo) {
      throw new Error('Todos os campos obrigatórios devem ser preenchidos.');
    }

    let funcionario;
    if (cargo.toLowerCase() === 'gerente') {
      if (!departamento) {
        throw new Error('O campo "Departamento" é obrigatório para Gerentes.');
      }
      funcionario = new Gerente(nome, idade, cargo, departamento);
      exibirResultado(funcionario.seApresentar(), funcionario.trabalhar(), funcionario.gerenciar());
    } else if (cargo.toLowerCase() === 'desenvolvedor') {
      if (!linguagem) {
        throw new Error('O campo "Linguagem de Programação" é obrigatório para Desenvolvedores.');
      }
      funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
      exibirResultado(funcionario.seApresentar(), funcionario.trabalhar(), funcionario.programar());
    } else {
      throw new Error('O cargo deve ser "Gerente" ou "Desenvolvedor".');
    }
  } catch (erro) {
    exibirErro(erro.message);
  }
}

// Função para exibir o resultado no DOM
function exibirResultado(...mensagens) {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '';
  mensagens.forEach(mensagem => {
    const p = document.createElement('p');
    p.textContent = mensagem;
    resultadoDiv.appendChild(p);
  });
}
