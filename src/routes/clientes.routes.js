const { Router } = require("express");
 
const router = Router();


 
router.get("/info", (req, res) => {
    res.json({ User: 'Santiago' });
});
  

// router.get('/',       getUsuarios );
// router.get('/:id',    getUsuario );
// router.post('/',      postUsuario );
// router.put('/:id',    putUsuario );
// router.delete('/:id', deleteUsuario );

module.exports = router;

