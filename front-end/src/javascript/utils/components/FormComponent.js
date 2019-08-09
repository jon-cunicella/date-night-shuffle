import React from "react";

class FormComponent extends React.Component {
  constructor({ areas, getArea }) {
    super();
    this.state = {
      areas: { areas },
      area: {},
      userArea: "",
      userPrice: "",
      isSelected: false
    };
  }

  handleAreaChange = e => {
    const userAreaId = e.target.value;
    this.props.getArea(userAreaId);
    this.setState({ isSelected: true });
  };

  handleFormComponents = ({ isSelected }) => {
    if (isSelected) {
      const areas = this.props.areas;
      return (
        <form className="wheel-form">
          <select
            name="areas"
            id="area-dropdown"
            onChange={this.handleAreaChange}
          >
            <option value="select-area" disabled selected>
              Select an Area
            </option>
            {areas.map(area => (
              <option className="areaToSelect" key={area._id} value={area._id}>
                {area.name}
              </option>
            ))}
          </select>
          <select
            name="prices"
            id="price-dropdown"
            onChange={this.handlePriceChange}
          >
            <option value="select-price" disabled selected>
              Select a Price
            </option>
            <option className="price" value={this.state.userPrice}>
              $
            </option>
            <option className="price" value={this.state.userPrice}>
              $$
            </option>
            <option className="price" value={this.state.userPrice}>
              $$$
            </option>
          </select>
        </form>
      );
    } else {
      const areas = this.props.areas;
      return (
        <form className="wheel-form">
          <select
            name="areas"
            id="area-dropdown"
            onChange={this.handleAreaChange}
          >
            <option value="select-area" disabled selected>
              Select an Area
            </option>
            {areas.map(area => (
              <option className="areaToSelect" key={area._id} value={area._id}>
                {area.name}
              </option>
            ))}
          </select>
        </form>
      );
    }
  };
  render() {
    return <this.handleFormComponents isSelected={this.state.isSelected} />;
  }
}
export default FormComponent;
