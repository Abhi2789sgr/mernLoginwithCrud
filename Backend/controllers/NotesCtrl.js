import Notes from "../models/NotesModel.js";
 
export const create = async (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };
    Notes.create(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Notes."
            });
        });
};
export const findAll = async (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Notes.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

export const findOne = async(req, res) => {
    const id = req.params.id;
  
    Notes.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

  export const update = async(req, res) => {
    const id = req.params.id;
  
    Notes.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Notes was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot Notes Tutorial with id=${id}. Maybe Notes was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Notes with id=" + id
        });
      });
  };

  export const deleteNotes = async(req, res) => {
    const id = req.params.id;
  
    Notes.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Notes was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Notes with id=${id}. Maybe Notes was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Notes with id=" + id
        });
      });
  };

  export const deleteAll = async(req, res) => {
    Tutorial.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };