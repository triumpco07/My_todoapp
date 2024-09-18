const TodoModel = require('../Models/TodoModles')


module.exports.getTodo = async(req, res) => {
    const Todo = await TodoModel.find()
    res.send(Todo)
}

module.exports.saveTodo = async(req,res) => {
    const { Text } = req.body

    TodoModel
    .create({Text})
    .then((data)=> {
        console.log("Added Successfully...");
        console.log(data);
        res.send(data);
        
        
        
    })

    module.exports.updateTodo = async(req,res) => {
        const {_id,Text} = req.body

        TodoModel
        .findByIdAndUpdate(_id, {Text})
        .then(() => res.send("Updated Successfully..."))
        .catch((err) => console.log(err)
        )
    }

    module.exports.deleteTodo = async(req,res) => {
        const {_id} = req.body

        TodoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted Successfully..."))
        .catch((err) => console.log(err)
        )
    }

}