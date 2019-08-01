import React from "react";
class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      areas: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/areas", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        mode: "cors"
      }
    })
      .then(res => res.json())
      .then(areas => {
        this.setState({ areas });
      });
  }

  render() {
    const { areas } = this.state;
    return (
      <form className="wheel-form">
        <select name="areas" id="area-dropdown">
          {areas.map(area => (
            <option key={area._id} value={area._id}>
              {area.name}
            </option>
          ))}
        </select>
        <select name="price" id="price-dropdown">
          <option value="prices">$</option>
          <option value="prices">$$</option>
          <option value="prices">$$$</option>
        </select>
        <select name="category" id="category-dropdown">
          <option value="category">Category One</option>
        </select>
      </form>
    );
  }
}
export default FormComponent;
