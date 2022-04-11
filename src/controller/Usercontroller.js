const User =  require('../models/User')

module.exports = {
    async inicio(req,res){
        res.header('x-access-token', 'felps')
        res.send('ola')
    },
    async create(req,res){
        try{
            const {name, email} = req.body
            const user = await User.findOne({where: {email}})
            if(user){
                res.status(401).json({message: "ja existe um usuario com esse email"})
            }else{
                const user = await User.create({name, email})
                res.status(200).json({user})
            }
        }catch(err){
            res.status(400).json({err})
        }
    },
    async update(req, res){
        try{
            const {id} = req.params
            const {name, email} = req.body
            const user = await User.findOne({where:{id}})
            if(!user){
                res.status(401).json({message: 'nunhum usuario encontrado'})
            }else{
                const user = await User.update({name, email},{where:{id}})
                res.status(200).json({user})
            }
        }catch(err){
            res.status(401).json({err})
        }
    },
    async list(req,res){
        try{    
            const users = await User.findAll()
            if(!users){
                res.sta(401).json({message: 'nenhum usuario cadastrado'})
            }
            res.status(200).json({users})
        }catch(err){
            res.status(401).json({err})
        }
    },
    async delete(req,res){
        const {id} = req.params
        const user = await User.findOne({where: {id}})
        if(!user){
            res.status(401).json({message: 'usuario nao encontrado'})
        }else{
            await User.destroy({where: {id}})
            res.status(200).json({ok: 'true'})
        }

    }
}