import TODOS from "./TODOS.js";
import assert from "assert";


describe('Pruebas de TODOS',()=>{
    it('Si instancia la clase TODOS, debe estar vacia',()=>{
        const todos = new TODOS();
        assert.strictEqual(todos.list().length,0)   
    })
    it('Debe agregarse un TODO correctamente',()=>{
        const todos = new TODOS();
        todos.add('task1')
        assert.strictEqual(todos.list().length,1)   
    })
    it('Al crear un TODO, debe crearse sin completarse',()=>{
        const todos = new TODOS();
        todos.add('task1')
        assert.strictEqual(todos.list().length,1)
        assert.deepStrictEqual(todos.list(),[{title:"task",completed:false}])   
    })
})
describe('Errores en TODOS',()=>{
    it('Debe arrojar un error si no tengo tareas al querer completar',()=>{
        const todos = new TODOS();
        const expected = new Error('no task')
        assert.throws(()=>{
            todos.completeTODO('FALLA')
        },expected) 
    })
})