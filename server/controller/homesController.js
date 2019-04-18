module.exports = {
    getHomes: (req, res) => {
        const db = req.app.get('db');
        db.get_homes().then(homes => {
            res.status(200).send(homes)
        }).catch(err => console.log('error in getHomes', err))
    },
    createHome: (req, res) => {
        const db = req.app.get('db');
        const {name, address, state, img, zip} = req.body;
        db.create_home([name, address, state, img, zip]).then(homes => {
            res.status(200).send(homes)
        }).catch(err => console.log('error in createHome', err))
    },
    deleteHome: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.query;
        db.delete_home(id).then(homes => {
            res.status(200).send(homes)
        }).catch(err => console.log('error in deleteHome', err))
    }
}