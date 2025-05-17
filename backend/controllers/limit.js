const LimitSchema= require("../models/LimitModel")
exports.addLimit = async (req, res) => {
    const {amount,userId}  = req.body

    const limit = LimitSchema({
        amount,
        userId
    })

    try {
        if(amount < 0){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await limit.save()
        res.status(200).json({message: 'limit Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(limit)
}

exports.getLimit = async (req, res) => {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ message: 'User ID is required!' });
    }
    try {
        const limit = await LimitSchema.findOne({ userId }).sort({ createdAt: -1 });
        if (!limit) {
            return res.status(404).json({ message: 'Limit not found!' });
        }
        res.status(200).json(limit);
    } catch (error) {
        console.error('Error fetching limit:', error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

