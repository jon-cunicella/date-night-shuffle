import React from 'react';

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      areas: [],
      userArea: '',
      userPrice: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/areas', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        mode: 'cors'
      }
    })
      .then(res => res.json())
      .then(areas => {
        this.setState({ areas });
      });
  }

  handleAreaChange(event) {
    this.setState({ userArea: event.target.value });
    this.setState({ userPrice: event.target.value });
  }

  handleAreaChange(event) {
    this.setState({ userArea: event.target.value });
    this.setState({ userPrice: event.target.value });
  }

  render() {
    const { areas } = this.state;

    return (
      <form className="wheel-form">
        <select name="areas" id="area-dropdown" onChange={this.handleChange}>
          {areas.map(area => (
            <option className="area" key={area._id} value={this.state.userArea}>
              {area.name}
            </option>
          ))}
        </select>
        <select name="prices" id="price-dropdown" onChange={this.handleChange}>
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
