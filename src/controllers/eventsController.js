const Event = require('../../models/Events.js');

const createEvent = async( req, res) =>{
    try {
        const {title, start, end, phone, name, service, date, notes, isActive } = req.body;
        const newEvent = await Event.create({title, start, end, phone, name, service, date, notes, isActive});        
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({error: " Error al crear el evento" });
    }
};


const getAllEvents = async (req, res ) => {
    try {
        const events = await Event.findAll();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({error: " No se pudieron obtener los eventos" });
    }
};

const deleteById = async( req, res ) => {
    const { id } = req.params;
    try {
        const deleteEvent = await Event.destroy({where: { id }});
        if( ! deleteEvent ){
            return res.status(404).json({message: "Evento Eliminado exitosamente"})
        }
        return res.status(200).json({message: "Se elimmino correctamente"})
    } catch (error) {
        res.status(500).json({error: " No se pudieron obtener los eventos" });
    }
};

const updateEvent = async( req, res ) => {
    const { id } = req.params;
    const { title, start, end, phone, name, service, date, notes, isActive } = req.body;

    try {
        const event = await Event.findByPk(id);

        if (!event) {
            return res.status(404).json({ error: "Evento no encontrado" });
        }
        const updatedEvent = await event.update({
            title,
            start,
            end,
            phone,
            name,
            service,
            date,
            notes,
            isActive
        });
        res.status(200).json(updatedEvent);
    } catch (error) {
        console.error("Error al actualizar el evento:", error); // Log del error para facilitar la depuración
        res.status(500).json({ error: "Error al actualizar el evento" });
    }
}


module.exports = {
    createEvent,
    getAllEvents,
    deleteById,
    updateEvent
}