import ServiceModel from '../model/ServiceModel.js';


// Create Service

export const CreatServiceService = async (req,res)=>{
    const { name, description, image } = req.body;
    try {
        const newService = new ServiceModel({name, description, image});
        await newService.save();
        res.status(201).json(newService);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

// Get All Service
 export const getAllServiceService = async (req,res)=>{
     try {
         const service = await ServiceModel.find();
         res.json(service);
     } catch (e) {
         res.status(500).json({ message: e.message });
     }
 }


 // Update Service

export const updateServiceService = async (req,res)=>{
    const { id } = req.params;
     const { name, description, image } = req.body;

     try {
         const service = await ServiceModel.findByIdAndUpdate( id, { name, description, image, updatedAt: Date.now() }, { new: true });
         res.json(service);
     } catch (e) {
         res.status(500).json({ message: e.message });
     }
}

// Delete Service

export const deleteServiceService = async (req,res)=>{
     const { id } = req.params;
     try {
         await ServiceModel.findByIdAndDelete(id);
         res.json({ message: "Service deleted" });
     } catch (e) {
         res.status(500).json({ message: e.message });
     }
}