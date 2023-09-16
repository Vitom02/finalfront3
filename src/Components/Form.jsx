import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
    const [formData, setFormData] = useState({name: "", email: ""});
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Validar los campos
      if (formData.name.length > 5 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        // Los campos son válidos
        console.log("Datos enviados:", formData);
        setSubmitted(true);
        setError(false);
      } else {
        // Campos inválidos
        setError(true);
      }
    };
  
  return (
    
    <div className="contacto">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre Completo:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {submitted && (
        <p>Gracias {formData.name}, te contactaremos lo antes posible via mail.</p>
      )}
      {error && <p> Por favor verifique su informacion nuevamente. </p>}
    </div>
  );
};

export default Form;
