import React, { Component } from "react";

export class Geolocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: "",
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }

    fetch(
      "https://geolocation-db.com/json/047c8da0-f163-11eb-8424-a55724a45f8a"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          details: data,
        });
      });
  }

  render() {
    return (
      <div>
        <h1 className="location-and-date__location">
          {`${this.state.details.city}`}
        </h1>
      </div>
    );
  }
}

export default Geolocation;
