import React from 'react';
import ButtonComponent from './ButtonComponent';

class FormComponent extends React.Component {
  constructor({ areas, getArea, handleRandomModal }) {
    super();
    this.state = {
      areas: { areas },
      area: {},
      userArea: '',
      userSelectedPrice: '',
      isSelected: false
    };
  }

  handleAreaChange = e => {
    const userAreaId = e.target.value;
    this.props.getArea(userAreaId);
    this.setState({ isSelected: true });
  };

  handlePriceChange = e => {
    const userSelectedPrice = e.target.value;
    this.setState({ userSelectedPrice });
    this.props.getUserSelectedPrice(userSelectedPrice);
  };

  handleFormComponents = ({ isSelected }) => {
    if (isSelected) {
      const areas = this.props.areas;
      return (
        <>
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
          <section className="area-selected">
            <ButtonComponent handleRandomModal={this.props.handleRandomModal} />
            <p className="or-selector">OR</p>
            <select
              name="prices"
              id="price-dropdown"
              onChange={this.handlePriceChange}
            >
              <option value="select-price" disabled selected>
                Filter by Price
              </option>
              <option className="price" value={'$'}>
                $
              </option>
              <option className="price" value={'$$'}>
                $$
              </option>
              <option className="price" value={'$$$'}>
                $$$
              </option>
            </select>
          </section>
        </>
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
