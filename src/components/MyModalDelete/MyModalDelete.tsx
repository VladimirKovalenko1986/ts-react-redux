import { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import css from "./MyModalDelete.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import toast from "react-hot-toast";
import { MyModalEditProps } from "../../types/types";
import { AppDispatch } from "../../redux/store";

const MyModalDelete: React.FC<MyModalEditProps> = ({ contactId }) => {
  const [open, setOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted successfully");
        handleClose();
      })
      .catch(() => {
        toast.error("Failed to delete contact. Please try again!");
      });
  };

  return (
    <div className={css.conteiner}>
      <Button
        sx={{
          padding: "5px 7px",
          backgroundColor: "red",
          color: "white",
          "&:hover": {
            backgroundColor: "darkred",
          },
        }}
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={handleOpen}
      >
        Delete
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={css.conteinerModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete this item?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <button className={css.btnExit} onClick={handleClose}>
              Close
              <IoMdClose />
            </button>
            <button className={css.btnDelete} onClick={handleDelete}>
              <RiDeleteBin6Fill />
              Delete
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModalDelete;
