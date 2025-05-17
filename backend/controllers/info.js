const UserSchema = require("../models/User");

exports.getName = async (req, res) => {
    const { userId } = req.params; // Get userId from request parameters
    if (!userId) {
        return res.status(400).json({ message: 'User ID is required!' });
    }

    try {
        const _id=userId;
        const name = await UserSchema.find({ _id }) // Filter by userId
        console.log(name);
        res.status(200).json(name);
    } catch (error) {
        console.error('Error fetching name:', error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};