import React from 'react';

class FormComponent extends React.Component {
  constructor({ areas, getArea }) {
    super();
    this.state = {
      areas: { areas },
      area: {},
      userArea: '',
      userPrice: ''
    };
  }

  handleAreaChange = e => {
    const userAreaId = e.target.value;
    this.props.getArea(userAreaId);
  };

  render() {
    const areas = this.props.areas;
    return (
      <form className="wheel-form">
        <select
          name="areas"
          id="area-dropdown"
          onChange={this.handleAreaChange}
        >
          <option defaultValue="Select Area" />
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
  }
}
export default FormComponent;
