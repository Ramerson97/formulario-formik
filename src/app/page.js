"use client";
import { Button, Form, Modal } from "react-bootstrap";
import Pagina from "./components/Pagina";
import { Formik } from "formik";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  const [modal, setShowModal] = useState(false)

  const [resultado, setResultado] = useState("");
  const [moeda, setMoeda] = useState("")

  const valoresConversao = {
    dolar: 0.20,
    euro: 0.18,
    bitcoin: 0.000003,
  };

  function converter(values) {
    const { valor, moeda } = values;
    const valorConvertido = valor * valoresConversao[moeda];
    setResultado(valorConvertido.toFixed(6));
    setShowModal(true)
    console.log(converter())
  }

  return (
    <Pagina titulo={"Página de Conversão"}>
      <Formik
        initialValues={{
          moeda: "",
          valor: "0",
        }}
        onSubmit={values => {
          setMoeda(values.moeda);
          converter(values)
        }}
      >
        {({ values, handleChange, handleSubmit, handleReset }) => (
          <Form >
            <Form.Group>
              <Form.Label>Digite o Valor: </Form.Label>
              <Form.Control
                type="number"
                name="valor"
                value={values.valor}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Selecione a Moeda:</Form.Label>
              <Form.Select
                name="moeda"
                value={values.moeda}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="dolar">Dólar</option>
                <option value="euro">Euro</option>
                <option value="bitcoin">Bitcoin</option>
              </Form.Select>
            </Form.Group>

            <div className="text-center">
              <Button type="submit" onClick={handleSubmit} className="me-2">Converter</Button>
              <Button type="button" onClick={handleReset}>Limpar</Button>
            </div>
          </Form>
        )}
      </Formik>

      {resultado && moeda && (
        <div style={{ marginTop: "20px" }}>
          <h4>Resultado da Conversão:</h4>
          <p>
            {resultado} {moeda}
          </p>
        </div>
      )}

      {/* show modal */}
      <Modal show={modal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Fehar
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <div style={{ marginTop: "20px" }}>
            <h4>Resultado da Conversão: {resultado} {moeda}</h4>

          </div>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Fechar</Button>
        </Modal.Footer>
      </Modal>


    </Pagina>
  );
}
