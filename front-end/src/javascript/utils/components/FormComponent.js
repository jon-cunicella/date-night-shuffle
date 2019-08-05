import React from "react";

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      areas: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/areas", {
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
            <option className="area" key={area._id} value={area._id}>
              {area.name}
            </option>
          ))}
        </select>
        <select name="prices" id="price-dropdown">
          <option value="price">$</option>
          <option value="price">$$</option>
          <option value="price">$$$</option>
        </select>
        <button type="submit">Spin to Win</button>
      </form>
    );
  }
}
export default FormComponent;
