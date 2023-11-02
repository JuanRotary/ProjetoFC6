const gabarito = ['B', 'C', 'E', 'D', 'A','B', 'C', 'E', 'D', 'A','B', 'C', 'E', 'D', 'A','B', 'C', 'E', 'D', 'A','B', 'C', 'E', 'D', 'A','B', 'C', 'E', 'D', 'A','B', 'C', 'E', 'D', 'A','B', 'C', 'E', 'D', 'A','B', 'C', 'E', 'D', 'A','B', 'C', 'E', 'D', 'A'];


function gerarRespostasAleatorias() {
    const alternativas = ['A', 'B', 'C', 'D', 'E'];
    const respostas = [];
    for (let i = 0; i < gabarito.length; i++) {
      const respostaAleatoria = alternativas[Math.floor(Math.random() * alternativas.length)];
      respostas.push(respostaAleatoria);
    }
    return respostas;
  }

const aluno1 = gerarRespostasAleatorias();
const aluno2 = gerarRespostasAleatorias();
const aluno3 = gerarRespostasAleatorias();
const aluno4 = gerarRespostasAleatorias();
const aluno5 = gerarRespostasAleatorias();


  
function CalcularAcertos(gabarito,RespostasAlunos){
    var acertos = 0;

    for (let i = 0; i < gabarito.length; i++) {
        if (gabarito[i]===RespostasAlunos[i])

        acertos++;
        
    }
    return acertos;
}

function CalcularErros(gabarito,RespostasAlunos){
    var erros = 50;

    for (let i = 0; i < gabarito.length; i++) {
        if (gabarito[i]===RespostasAlunos[i])

        erros--;
        
    }
    return erros;
}

const AcertosAluno1=CalcularAcertos(gabarito,aluno1);
const AcertosAluno2=CalcularAcertos(gabarito,aluno2);
const AcertosAluno3=CalcularAcertos(gabarito,aluno3);
const AcertosAluno4=CalcularAcertos(gabarito,aluno4);
const AcertosAluno5=CalcularAcertos(gabarito,aluno5);

const ErrosAluno1=CalcularErros(gabarito,aluno1);
const ErrosAluno2=CalcularErros(gabarito,aluno2);
const ErrosAluno3=CalcularErros(gabarito,aluno3);
const ErrosAluno4=CalcularErros(gabarito,aluno4);
const ErrosAluno5=CalcularErros(gabarito,aluno5);


document.getElementById('r1').innerHTML = AcertosAluno1;
document.getElementById('r2').innerHTML = AcertosAluno2;
document.getElementById('r3').innerHTML = AcertosAluno3;
document.getElementById('r4').innerHTML = AcertosAluno4;
document.getElementById('r5').innerHTML = AcertosAluno5;

document.getElementById('e1').innerHTML = ErrosAluno1;
document.getElementById('e2').innerHTML = ErrosAluno2;
document.getElementById('e3').innerHTML = ErrosAluno3;
document.getElementById('e4').innerHTML = ErrosAluno4;
document.getElementById('e5').innerHTML = ErrosAluno5;

document.getElementById('nt1').innerHTML = Math.trunc(AcertosAluno1*0.2);
document.getElementById('nt2').innerHTML = Math.trunc(AcertosAluno2*0.2);
document.getElementById('nt3').innerHTML = Math.trunc(AcertosAluno3*0.2);
document.getElementById('nt4').innerHTML = Math.trunc(AcertosAluno4*0.2);
document.getElementById('nt5').innerHTML = Math.trunc(AcertosAluno5*0.2);
