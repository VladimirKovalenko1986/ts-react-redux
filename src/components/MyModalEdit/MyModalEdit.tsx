import { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import css from "./MyModalEdit.module.css";
import { FaEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import ContactFormEdit from "../ContactFormEdit/ContactFormEdit";

export default function MyModalEdite({ contactId }: { contactId: string }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          padding: "5px 7px",
          backgroundColor: "orange",
          color: "white",
          "&:hover": {
            backgroundColor: "darkorange",
          },
        }}
        variant="outlined"
        onClick={handleOpen}
      >
        <FaEdit className={css.icon} />
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-form"
        aria-describedby="modal-modal-description"
      >
        <Box className={css.conteinerModal}>
          <ContactFormEdit
            id="modal-modal-form"
            contactId={contactId}
            handleClose={handleClose}
          />
          <button className={css.btnClose} onClick={handleClose}>
            <IoMdClose />
          </button>
        </Box>
      </Modal>
    </div>
  );
}
