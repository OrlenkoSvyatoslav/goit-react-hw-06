import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = ({
  contact: {
    id,
    info: { name, number },
  },
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div>
      <div>
        <h3>
          <FaUser />
          {name}
        </h3>
        <p>
          <FaPhoneAlt />
          {number}
        </p>
      </div>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
