import { useState } from "react";
import { useNavigate  } from "react-router-dom";

const UseControlledForm = () => {
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
   /*  setFormData((prevFormState) => ({
      ...prevFormState,
      [e.target.name]: e.target.value,
    })); */
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  };

  const formSubmit = (e) => {
    e.preventDefault();
   // console.log('formData', formData)
   localStorage.setItem('formData', JSON.stringify(formData));
   navigate('/counters')
  };

  return {
    formData,
    formSubmit,
    handleChange,
  };
};

export default UseControlledForm;
