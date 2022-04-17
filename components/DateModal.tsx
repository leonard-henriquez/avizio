import React, { useState } from 'react'
import ReactQuery, { QueryKey, useMutation, useQuery } from 'react-query'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useCreateZoom from '../hooks/useCreateZoom';

type Props = {
  show: boolean;
  setShow: (arg: boolean) => void;
  startDate: Date;
  endDate: Date;
}

const DateModal: React.FC<Props> = ({ show, setShow, startDate, endDate }: Props) => {
  const [topic, setTopic] = useState<string>('');
  const handleClose = () => setShow(false);
  const handleSubmit = () => mutate();
  const handleObjectField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(event.target.value)
  }

  const { data, mutate } = useCreateZoom({ topic, startDate, endDate })
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Plan zoom meeting</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {startDate.toDateString()} to {endDate.toDateString()}
        <Form.Group className="mb-3" controlId="object">
          <Form.Label>Object: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Object"
            onChange={handleObjectField}
            value={topic}
          />
        </Form.Group>
        { data && <>
          <div>
            Confirmed meeting at {data?.start_time}
          </div>
          <a href={data?.join_url}>Link</a>
        </>
        }
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
