import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ButtonTambah from '../../Atom/button/buttonTambahAkun';
import ButtonClose from '../../Atom/button/buttonClose';
import Inputan from '../../Atom/inputan/Inputan';
import Buttonn from '../../Atom/button/button';


const ModalTambahAkunUser = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onAddUser = () => setShow(true);

    const [NamaDepan, setNamaDepan] = useState("");
    const [NamaBelakang, setNamaBelakang] = useState("");
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleClick = () => {
      // Validasi: Pastikan semua field sudah diisi
      if (!NamaDepan || !NamaBelakang || !Username || !Email || !Password) {
        // Tampilkan pesan kesalahan atau lakukan tindakan lain sesuai kebutuhan
        console.error('Harap isi semua field sebelum menambahkan konselor.');
        return;
      }
      onAddUser({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
      });
    
      handleClose();
    };
    const ModalTambahAkunUser = ({ onAddUser }) => {
      // ... rest of the component code
    };
      
    return(
        <>

      <ButtonTambah style={{backgroundColor: '#F4518D'}} onClick={handleShow} label="Buat Akun User"/>

      <Modal 
        show={show} 
        onHide={handleClose} 
        style={{width: '380px', transform: 'translate(-50%, -50%)', top: '50%', left: '50%'}}>

        <Modal.Header >
          <Modal.Title className='fs-6'>Tambah User</Modal.Title>
          <ButtonClose onClick={handleClose}/>
        </Modal.Header>

        <Modal.Body>
          <Form>
          <Form.Group className="d-flex flex-column gap-3 ">
          <Inputan 
                type="text" 
                placeholder="Nama Depan"
                autoFocus={true}
                value={NamaDepan}
                onChange={(e) => setNamaDepan(e.target.value)}
              />
              <Inputan 
                type="text" 
                placeholder="Nama Belakang"
                value={NamaBelakang}
                onChange={(e) => setNamaBelakang(e.target.value)}
              />
              <Inputan 
                type="text" 
                placeholder="Username"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Inputan 
                type="email" 
                placeholder="Alamat Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Inputan 
                type="password" 
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className='d-flex justify-content-between'>
          <Buttonn 
            className='text-primary bg-white' 
            onClick={handleClose}
            label="Batal"
          />
            
          <Buttonn 
            className='bg-button text-white' 
            onClick={handleClick}
            label="Tambah"
          />
        </Modal.Footer>

      </Modal>

        </>
    )
}
export default ModalTambahAkunUser