import log from '../config/winston';
import ProjectModel from '../models/ProjectModel';

/* Action Methods */
// Lista los proyectos
// GET /projects | GET /projects/index
const index = (req, res) => {
  res.send('Listando proyectos 🚧');
  //   TODO: Agregar codigo de listado de proyectos
};

// Agrega ideas de proyectos
// GET /projects/add
const add = (req, res) => {
  res.render('projects/addProjectView', {});
  // TODO: Agregar codigo para agregar proyectos
};

// Procesa el formulario que Agrega ideas de Proyectos
// POST /projects/add
const addPost = async (req, res) => {
  const { errorData } = req;
  // Crar view models para este action mehtod
  let project = {};
  let errorModel = {};
  if (errorData) {
    log.error('💥 Se retorna objeto de error de validacion 💥');
    // Rescatando el objeto validado
    project = errorData.value;
    // Usamos un reduce para generar un objeto
    // de errores a partir del inner
    errorModel = errorData.inner.reduce((prev, curr) => {
      // Creamos una variable temporal para evitar
      // el error "no-param-reassign" el cual me
      // exorta a evitar reasignar los valores de los argumentos de una función
      const newVal = prev;
      newVal[`${curr.path}Error`] = curr.message;
      return newVal;
    }, {});

    // Lavalidacion fallo
    // res.status(200).json(errorData);
  } else {
    log.info('Se retorna objeto Project valido');
    // Desestructurando la información del formulario del objeto valido
    const { validData } = req;
    // Crar un documento con los datos provistos
    // por el formulario y guardar dicho documento
    // en projectModel
    const projectModel = new ProjectModel(validData);
    // Siempre que se ejecuta una operacion
    // que depende de un tercero, es una buena practica
    // envolver esa operacion en un bloque try
    try {
      // Se salva el documento project
      log.info('Se salva objeto Project');
      project = await projectModel.save();
    } catch (error) {
      log.error(
        `Ha fallado el intento de salvar un proyecto: ${error.message}`
      );
      return res.status(500).json({ error });
    }
  }
  // Respondemos con los viewModels generados
  // res.render('projects/addProjectView', { project, errorModel });
  // res.status(200).json({ project, errorModel });
  // Sanity check TODO:Provisional
  return res.status(200).json({ project, errorModel });
};

// Exportando el controlador
export default {
  index,
  add,
  addPost,
};
