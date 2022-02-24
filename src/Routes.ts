import {Router, Request, Response} from 'express';
import CursoController from './controller/cursoController';
const Route= Router ();
import ProfessorContrller from './controller/professorController';
import AlunoController from './controller/alunoController';
import alunoCursoController from './controller/alunoCursoController';
import servicoController from './controller/servicoController';
const ProfessorC = new ProfessorContrller();
const CursoC = new CursoController();
const AlunoC = new AlunoController();
const aluno_curso= new alunoCursoController();
const ServicoC= new servicoController();


Route.post('/criarProfessor', ProfessorC.criarProfessor )
Route.get('/listarProfessor', ProfessorC.listarProfessor)
Route.post('/criarCurso',CursoC.criarCurso)
Route.get('/listarCurso', CursoC.listarCurso )
Route.get('/listarAluno', AlunoC.listarAluno)
Route.post('/criarAluno',AlunoC.criarAluno)
Route.post('/alunoCurso', aluno_curso.inscrever);
Route.post('/criarServico', ServicoC.criarServico)
Route.get('/listarServico', ServicoC.listarServico)


//Rotas Aluno
Route.get('/AlunoPainel', AlunoC.alunoPainel)
Route.get('/', (req:Request, resp:Response)=>{
    resp.render('index')
})


export default Route;