import {Router} from 'express';
import project from './models/Project.js';
import Project from '../models/Project.js';

const router=Router();

router.get('/', function (req, res){
    res.json({'hola':'hola'})
})

router.post('/registro', async function (req, res){
    const project= new Project({
        name: req.body.name,
        age: req.body.age
    });
    try {
        const guardar= await project.save();
        res.status(200).json(guardar)
    } catch (error) {
        res.status(500).json('errorr!')
    }
})



export default router;