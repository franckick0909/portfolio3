import "./Form.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FaRocket, FaShuttleSpace } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalError, setModalError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_wmocscm";
    const templateID = "template_l8qdthm";
    const publicKey = "GGEp8YuEf9tv4MtGV";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Franckick",
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        if (response.status === 200) {
          // alert("Message sent successfully", response);
          handleOpenModal();
        } else {
          alert("Something went wrong, please try again later", response);
          handleOpenModalError();
        }

        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Something went wrong, please try again later", error);
        handleOpenModalError();
      });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.querySelector(".modal").exit();
  };
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModalError = () => {
    setModalError(false);
    document.querySelector(".modal").exit();
  };
  const handleOpenModalError = () => {
    setModalError(true);
  };

  const { t } = useTranslation();
  const { label1, label2, label3, btn1, btn2, success, error } = t("form");

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="formulaire"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}>
        <fieldset>
          <legend>
            <FaShuttleSpace className="Space" />
          </legend>
          <div className="input-wrapper">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span></span>
            <label htmlFor="name">{label1} :</label>
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
            <label htmlFor="email">{label2} :</label>
          </div>
          <div className="input-wrapper">
            <textarea
              className="textarea"
              rows={10}
              cols={50}
              id="message"
              required
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span></span>
            <label htmlFor="name">{label3} :</label>
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-3">
              {btn1}
            </button>
            <button
              type="reset"
              value="reset Form"
              onClick={() => handleClearForm()}
              className="btn btn-4">
              {btn2}
            </button>
          </div>
        </fieldset>
      </motion.form>

      {modalOpen && (
        <motion.div
          className="modal"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100, transition: { duration: 0.3 } }}>
          <div className="modal-content">
            <div className="fuse">
              <FaRocket className="rocket" />
            </div>
            <h2 className="succes">{success}</h2>
            <button onClick={handleCloseModal} className="btn btn-1 btn-modal">
              Close Modal
            </button>
          </div>
        </motion.div>
      )}

      {modalError && (
        <motion.div
          className="modal"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100, transition: { duration: 0.3 } }}>
          <div className="modal-content">
            <div className="fuse">
              <FaRocket className="rocketcasse" />
            </div>
            <h2 className="error">{error}</h2>
            <button
              onClick={handleCloseModalError}
              className="btn btn-1 btn-modal">
              Close Modal
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Form;
