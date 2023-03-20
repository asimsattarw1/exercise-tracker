const ActivityModel = require('../models/activityModel');

const { activityModel } = ActivityModel;

const responseModel = ({ status, message, data }) => {
    return { status: status ?? false, message: message ?? '', data: data ?? {} }
}

const addActivity = async (req, res) => {
    const { name, activity, description, duration, date } = req.body;

    try {
        const result = await activityModel.create({
            name: name,
            activity: activity,
            description: description,
            duration: duration,
            date: date
        });
        // await result.save();

        res.status(201).json(responseModel({ status: true, data: result, message: "Data added successfully" }));
    } catch (error) {
        res.status(500).json(responseModel({ message: 'something went wrong' }));
    }
}

const getActivity = async (req, res) => {
    try {
        const result = await activityModel.find();
        res.status(201).json(responseModel({ status: true, data: result, message: "Data retrieved successfully" }));
    } catch (error) {
        res.status(500).json(responseModel({ message: 'something went wrong' }));
    }
}

const deleteActivity = async (req, res) => {
    const { id } = req.body;
    try {
        const result = await activityModel.findByIdAndDelete({ _id: id });
        res.status(201).json(responseModel({ status: true, data: result, message: "Data deleted successfully" }));
    } catch (error) {
        res.status(500).json(responseModel({ message: 'something went wrong' }));
    }
}

module.exports = { addActivity, getActivity, deleteActivity }