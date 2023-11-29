import {Router} from 'express';
import Project from '../models/Project.js';

const router=Router();

router.get('/', function (req, res){
    res.json({'hola':'hola'})
})

router.get ('/projects', async function (req, res){
    try {
        const result=await Project.find()
        res.status(200).json(result)
    } catch (error) {
       console.log(error)
        res.status(500).json(error)
    }
})
router.get ('/projects/:id', async function (req, res){
    
    try {
        const {id}= req.params
        let result= await Project.findById(id)
        res.status(200).json(result)
    } catch (error) {
       console.log(error)
        res.status(500).json(error)
    }
})


router.post('/add', async function (req, res){
    const project= new Project({
        name: req.body.name,
        description: req.body.description,
        img: req.body.img,
    });
    try {
        const guardar= await project.save();
        res.status(200).json(guardar)
    } catch (error) {
        res.status(500).json('errorr!')
    }
})

router.delete('/delete/:id', async function (req, res) {
    try {
        const {id}= req.params
        let result= await Project.findByIdAndDelete(id)
        res.status(200).json(result)
    } catch (error) {
       console.log(error)
        res.status(500).json(error)
    }
})
router.put('/update/:id', async function (req, res) {
    
        const {name}= req.body;
        const {description}= req.body;
        const {img}= req.body;
        const {id}= req.params

        let result= await Project.findByIdAndUpdate(id, {name, description, img})
        res.status(200).send({
            success: true,
            message:'kahkah',
            result,
        })
    
})



export default router;