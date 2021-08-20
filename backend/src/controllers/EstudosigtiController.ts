import { Request, Response } from 'express';

interface Aluno {
  matricula: number,
  nome: string,
  dataNascimento?: string // é um valor opcional
}

function cadastraAluno(aluno: Aluno): Aluno {
  return aluno
}

export default {
  store(req: Request, res: Response) {
    const cadastrado = cadastraAluno({ matricula: 123, nome: 'Roberto' })

    // ao passar uma variável com um atributo a mais do tipo que é recebido na função
    // essa função irá dizer que não existe esse atributo novo ao tentar dentro da função
    // mas, o atributo estará lá.
    // isso é pq na interface não diz que ele existe.
    const aluno2 = { matricula: 124, nome: 'Roberto 2', idade: 12 }
    const cadastro2 = cadastraAluno(aluno2)
    
    res.json({cadastrado, cadastro2})
  },

  store2(req: Request, res: Response) {

  }
}