import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap"
import api from "../../api"

const EditarFilme = ({ filme, showModal, handleClose, atualizaLista }) => {

    const [inputs, setInputs] = useState({});

    const alterar = (id) => {
        api.put(`movies/${id}`, inputs)
            .then((response) => {
                handleClose()
                atualizaLista()
            })
            .catch((err) => console.error(err))
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs((values) => ({ ...values, [name]: value }));
    }

    useEffect(() => {
        setInputs(filme)
    }, [filme]
    )

    return (
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alterar FIlme</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome do filme</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome do filme"
                name="title"
                defaultValue={inputs.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Data de lançamento</Form.Label>
              <Form.Control
                type="date"
                placeholder="Data de lançamento"
                name="release_date"
                defaultValue={inputs.release_date}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>

          <Button variant="primary" onClick={() => alterar(filme.id)}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
export default EditarFilme