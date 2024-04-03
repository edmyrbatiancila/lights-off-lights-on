// Lights.js
import React, { Component } from "react";
import off from "./assets/img/lights_off.jpg";
import on from "./assets/img/lights_on.jpg";
import offHover from "./assets/img/skull.webp";
import onHover from "./assets/img/shout.webp";
import skullScream from "./assets/sound/skull_scream.mp3";
import humanScream from "./assets/sound/human_scream.mp3";

class Lights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            currentImage: props.isLightSwitchedOff ? off : on,
            hoverSound: null,
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.playHoverSound = this.playHoverSound.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isLightSwitchedOff !== this.props.isLightSwitchedOff) {
            this.setState({
            currentImage: this.props.isLightSwitchedOff ? off : on,
            });
        }
    }

    handleMouseEnter() {
        this.setState({
            isHovered: true,
            currentImage: this.props.isLightSwitchedOff ? offHover : onHover,
        });
        this.playHoverSound();
    }

    handleMouseLeave() {
        this.setState({
            isHovered: false,
            currentImage: this.props.isLightSwitchedOff ? off : on,
        });
    }

    playHoverSound() {
        const hoverSound = new Audio(this.props.isLightSwitchedOff ? skullScream : humanScream);
        hoverSound.play().catch(error => {
            console.error("Autoplay failed: ", error);
        });
    }

    render() {
        const { currentImage } = this.state;
        const { isLightSwitchedOff } = this.props;

        return (
            <div className="lights">
            <img
                src={currentImage}
                alt={isLightSwitchedOff ? "Lights Off" : "Lights On"}
                className={isLightSwitchedOff ? "lightsOff" : "lightsOn"}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            />
            </div>
        );
    }
}

export default Lights;
