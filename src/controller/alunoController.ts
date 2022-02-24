import knex from '../database/conection';
import { Response, Request } from "express";

class AlunoController{
    async criarAluno(req:Request, resp: Response){
        const {name, whatsaap, nomeuser, senha, email}= req.body;
        const image= (req.file) ? req.file.filename : 'user.png';
        const ids = await knex('aluno').insert({image, name, email, whatsaap, nomeuser, senha})
        const aluno = await knex('aluno').where('id', ids[0])
        resp.json(aluno)
    }    
   async listarAluno(req:Request, resp:Response) {
       const alunos= await knex('aluno').select('*')
       resp.json(alunos)
   }
  async cursosAlunos(req:Request, resp:Response){
    const cursos = await knex('aluno-curso').where('')
  }
  async alunoPainel(req:Request, resp:Response){
    resp.render('./aluno/alunoPainel.ejs')
  }
  
}

export default AlunoController;


//image, name, email, whatsaap, nomeuser senha

