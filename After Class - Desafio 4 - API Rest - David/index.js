

// Importar la clase Contenedor y luego instanciarla:

const Contenedor = require('./src/contenedor');

let contenedor = new Contenedor('./src/productos.json');


// GET

router.get('/', async (req, res) => {

  const todos = await contenedor.getAll();

  res.send(todos)

});


// POST

router.post('/', async (req, res) => {

  const { body } = req;

  await contenedor.saveNewProduct(body);

  // Re-direcciona de vuelta al formulario:
  res.redirect('/');
});


// DELETE

router.delete('/:id', async (req, res) => {

  const { id } = req.params;

  const borrado = await contenedor.deleteById(id);

  if (borrado) {

    res.send({ borrado });
    
  } else {

    res.send('El producto que se intenta borrar no existe.')
  }
});


// PUT

router.put('/:id', async (req, res) => {
 
  const { body, params: {id} } = req;

  const anterior = await contenedor.getById(id);

  const nuevo = await contenedor.updateById(id, body);

  if (anterior) {

    res.send({ anterior, nuevo });

  } else {

    res.send('El producto que se intenta actualizar no existe.')
  }
});


