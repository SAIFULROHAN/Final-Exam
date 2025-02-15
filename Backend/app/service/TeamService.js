import TeamModel from '../model/TeamModel.js';

// Create Team
export const CreateTeamService = async (req, res) => {

    const { name, role,image } = req.body;
    try {
        const newTeam = new TeamModel({ name, role, image });
        await newTeam.save();
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Team

export const getTeamService = async (req,res)=>{
    try {
        const teams = await TeamModel.find();
        res.json(teams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Team Update

export const updateTeamService = async (req,res)=>{
    const { id } = req.params;
    const { name, role, description, image } = req.body;
    try {
        const team = await TeamModel.findByIdAndUpdate(
            id,
            { name, role, description, image, updatedAt: Date.now() },
            { new: true }
        );
        res.json(team);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Team

export const deleteTeamService = async (req,res)=>{
    const { id } = req.params;
    try {
        await TeamModel.findByIdAndDelete(id);
        res.json({ message: 'Team deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};