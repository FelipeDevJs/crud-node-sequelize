const Comment =  require('../models/Comment')

module.exports = {
    async create(req,res){
        try{
            const {comment, idUser} = req.body
            const comments = await Comment.create({comment, idUser})
            res.status(200).json({comments})
        }catch(erro){
            res.status(401).json({message: "erro ao comentar ", erro})
        }
    },
    async update(req, res){
        try{
            const {id} = req.params
            const {comment } = req.body
            const comments = await Comment.findOne({where:{id}})
            if(!comments){
                res.status(401).json({message: 'nunhum usuario encontrado'})
            }else{
                const comment = await Comment.update({name, email},{where:{id}})
                res.status(200).json({comment})
            }
        }catch(err){
            res.status(401).json({err})
        }
    },
    async list(req,res){
        try{    
            const comments = await Comment.findAll()
            if(!comments){
                res.sta(401).json({message: 'nenhum usuario cadastrado'})
            }
            res.status(200).json({comments})
        }catch(err){
            res.status(401).json({err})
        }
    },
    async delete(req,res){
        const {id} = req.params
        const comment = await Comment.findOne({where: {id}})
        if(!comment){
            res.status(401).json({message: 'usuario nao encontrado'})
        }else{
            await Comment.destroy({where: {id}})
            res.status(200).json({ok: 'true'})
        }
    },
    async usercomment(req, res){
        const {id} = req.params
        // const id = n
        const comments = await Comment.findAll({
            where: {idUser: id}
        })
        res.send(comments)
    }
}