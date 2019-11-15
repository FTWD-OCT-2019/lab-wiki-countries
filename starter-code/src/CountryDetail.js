import React, { Component } from "react";
import {Link} from 'react-router-dom';
class CountryDetail extends Component {


  render() {
      console.log(this.props.match.params.id) //USA
       
      console.log(this.props.countries) //[.......]


    let country = this.props.countries.find(eachCountry=>{
        console.log(eachCountry.name.common)
        return this.props.match.params.id === eachCountry.cca3
    })
    console.log(country)


    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            {this.props.match.params.id}
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {country.borders.map(eachBorder=>{
                            return  <li><Link to={`${eachBorder}`}>{eachBorder}</Link></li>
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    );
  }
}

export default CountryDetail;
