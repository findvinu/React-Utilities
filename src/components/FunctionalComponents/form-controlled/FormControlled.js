import { useContext } from "react";
import { FormControlledContext } from "../../context/FormControlledContextProvider";

const FormControlled = () => {
  const { formData, formSubmit, handleChange } = useContext(
    FormControlledContext
  );
  return (
    <div
      className="dFlex functionalComponentWrapper"
      style={{ maxWidth: "60%", margin: "0 auto", padding: "100px 50px" }}
    >
      <form className="row g-3" onSubmit={formSubmit}>
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="address"
            placeholder="1234 Main St"
            value={formData.address}
          />
        </div>
        <div className="col-12">
          <label htmlFor="address2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="address2"
            placeholder="Apartment, studio, or floor"
            value={formData.address2}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="city"
            value={formData.city}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <select name="state" className="form-select">
            <option defaultValue>Choose...</option>
            <option  value={formData.mp}>Madhya Pradesh</option>
            <option  value={formData.up}>Uttar Pradesh</option>
            <option  value={formData.himachal}>Himachal</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="zip"
            value={formData.zip}
          />
        </div>
        <fieldset className="col-md-12">
          <div className="col-md-12"   onChange={handleChange}>
            <label htmlFor="radios" className="form-label">
              Radios
            </label>
            <div className="col-md-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  value={formData.radio1}
                  id="option1"                
                  checked
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  First radio
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  value={formData.radio2}
                  id="option2"               
                />
                <label className="form-check-label" htmlFor="gridRadios2">
                  Second radio
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-check disabled">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  value={formData.radio3}
                  id="option3"
                  disabled
                />
                <label className="form-check-label" htmlFor="gridRadios3">
                  Third disabled radio
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={formData.check}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormControlled;
