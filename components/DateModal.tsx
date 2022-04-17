import React, { useState } from 'react'
import ReactQuery, { QueryKey, useMutation, useQuery } from 'react-query'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

type Props = {
  show: boolean;
  setShow: (arg: boolean) => void;
  startDate: Date;
  endDate: Date;
}

const DateModal: React.FC<Props> = ({ show, setShow, startDate, endDate }: Props) => {
  const handleClose = () => setShow(false);
  const handleSubmit = () => {
    mutate()
  }

  const { isLoading, error, data, mutate } = useMutation(['createZoom'], async (): Promise<any> => {
    const res = await fetch('/api/create_zoom')
    return res.json()
  })

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {startDate.toDateString()} to {endDate.toDateString()}
        <Form.Group className="mb-3" controlId="object">
          <Form.Label>Object</Form.Label>
          <Form.Control type="text" placeholder="Object" />
        </Form.Group>
        {JSON.stringify(data)}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DateModal
