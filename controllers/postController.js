const postModel = require('../models/postModel');

const getPosts = async (req, res) => {
    let data = await postModel.find();
    res.send(data);
}

const savePosts = async (req, res) => {
    const { name, text } = req.body;
    var insert_obj = new postModel({ name: `${name}`, text: `${text}` })
    await insert_obj.save();

    let data = await postModel.find();
    res.send(JSON.stringify(data));
}

const deletePosts = async (req, res) => {
    const { id } = req.body;
    await postModel.deleteMany({ _id: id });

    let data = await postModel.find();
    res.send(JSON.stringify(data));
}

const editPosts = async (req, res) => {
    const { id, name, text } = req.body;
    await postModel.findOneAndUpdate({ _id: id }, { $set: { name: name, text: text } });

    let data = await postModel.find();
    res.send(JSON.stringify(data));
}

module.exports = { getPosts, savePosts, deletePosts, editPosts }