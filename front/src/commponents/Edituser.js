import React, { useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import "./new.css";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";

import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import { edituser } from "../JS/userSlice/userSlice";

function Edituser({ ping, setping }) {
  const user = useSelector((state) => state.user.user);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const [edit, setedit] = useState({
    name: user?.name,
    LastName: user?.LastName,
    email: user?.email,
    password: user?.password,
    img: user?.img,
  });
  return (
    <div>
      <>
        <Button onClick={() => setModal(true)} id="tropico" variant="primary" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg> Edit 
        </Button>
        <PureModal
          header="Edit user"
          footer={
            <div>
              <button id="cann">Cancel</button>
              <button
                id="can"
                onClick={() => {
                  dispatch(edituser({ id: user._id, edit }));
                  setping(!ping);
                  Swal.fire("Profil updated");
                }}

                // onClick={() => {
                //   dispatch(addcomm(newcomm));
                //   Swal.fire("Commande Validée");
                // }}
              >
                Commander
              </button>
            </div>
          }
          isOpen={modal}
          width="758px"
          closeButton="close"
          closeButtonPosition="bottom"
          onClose={() => {
            setModal(false);
            return true;
          }}
        >
          <p className="descbox">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>user name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user?.name}
                  onChange={(e) => setedit({ ...edit, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>user lastname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user?.LastName}
                  onChange={(e) =>
                    setedit({ ...edit, LastName: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>user email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user?.email}
                  onChange={(e) => setedit({ ...edit, email: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>user password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user?.password}
                  onChange={(e) =>
                    setedit({ ...edit, password: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>user image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user?.img}
                  onChange={(e) => setedit({ ...edit, img: e.target.value })}
                />
              </Form.Group>
            </Form>
          </p>
        </PureModal>
      </>
    </div>
  );
}

export default Edituser;
