import { useState, createContext } from "react";
import { toast } from "react-toastify";

export const MiscellaneousContext = createContext();
export const MiscellaneousContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const createSuccess = () => toast.success("Successfully Created");
  const msgSendSuccess = () => toast.success("Successfully Message Sent");
  const loginSuccess = () => toast.success("Login Success");
  const invalidCredential = () => toast.success("Invalid Credentials");
  const updatedSuccess = () => toast.success("Successfully Updated");
  const deleteSuccess = () => toast.success("Successfully Deleted");
  const somethingWentWrong = () => toast.error("Something Went Wrong !");
  const addedCart = () => toast.success("Product added to Cart");
  return <MiscellaneousContext.Provider value={{ updatedSuccess,msgSendSuccess, addedCart,loginSuccess, createSuccess, deleteSuccess, somethingWentWrong, handleClickOpen, handleClose, open }}>{children}</MiscellaneousContext.Provider>;
};
