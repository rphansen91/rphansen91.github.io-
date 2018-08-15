import React, { Component } from "react";
import { TweenMax } from "gsap/TweenMax";
import { TimelineLite } from "gsap/TimelineLite";

export default class extends Component {
  constructor(props) {
    super(props);
    this.timer = props.timer || 2000;
  }
  componentDidMount() {}
  getAnimationElements(element) {
    if (element && !this.elements) {
      this.elements = {};
      this.elements.svg = element;
      this.elements.lg = element.querySelector("#cog-lg");
      this.elements.md = element.querySelector("#cog-md");
      this.elements.sm1 = element.querySelector("#cog-sm-1");
      this.elements.sm2 = element.querySelector("#cog-sm-2");
      this.elements.sm3 = element.querySelector("#cog-sm-3");
      this.animate();
    }
  }
  animate() {
    if (this.timeline) return this.timeline.restart();

    const timeline = new TimelineLite();
    const rotate = rotation => ({
      rotation,
      transformOrigin: "50% 50%"
      // repeat: -1
    });
    timeline.add(
      TweenMax.to(this.elements.lg, this.timer / 1000, rotate("360")),
      "cogs"
    );
    timeline.add(
      TweenMax.to(this.elements.md, this.timer / 1000, rotate("-360")),
      "cogs"
    );
    timeline.add(
      TweenMax.to(this.elements.sm1, this.timer / 1000, rotate("-360")),
      "cogs"
    );
    timeline.add(
      TweenMax.to(this.elements.sm2, this.timer / 1000, rotate("360")),
      "cogs"
    );
    timeline.add(
      TweenMax.to(this.elements.sm3, this.timer / 1000, rotate("-360")),
      "cogs"
    );
    this.timeline = timeline;
  }
  render() {
    const { className, style } = this.props;
    return (
      <svg
        className={className}
        style={style}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 400 400"
        xmlSpace="preserve"
        ref={this.getAnimationElements.bind(this)}
        onMouseEnter={this.animate.bind(this)}
      >
        <path
          id="cog-lg"
          d="M243.3,109.2c2.1-0.3,4.4-1.2,6.4-0.7c2.1,0.5,3.8,2.3,5.7,3.6c-1.3,1.5-2.3,3.2-3.9,4.3c-1.6,1.1-4.1,1-5.5,2.3
	c-1.8,1.6-4.4,4.3-4,5.9c0.5,2.4,3,4.8,5.3,6.2c2,1.2,5,0.5,7.2,1.5c1.8,0.8,3.1,2.9,4.5,4.4c-1.6,1.2-3.1,2.9-5,3.6
	c-1.8,0.7-4.2,0-5.9,0.8c-2,1-4.9,2.7-5.1,4.4c-0.3,2.3,1.1,5.5,2.8,7.2c2,2,5.5,2.5,7.8,4.3c1.3,1.1,1.6,3.4,2.4,5.2
	c-1.7,0.7-3.3,1.9-5,2c-2.3,0.1-4.7-1.3-6.9-0.9c-2.2,0.3-5.3,1.4-6.1,3.1c-0.9,2-0.3,5.3,0.9,7.3c1.5,2.4,4.7,3.8,6.5,6.1
	c1.1,1.4,0.9,3.8,1.4,5.7c-1.9,0.3-3.9,1.1-5.7,0.8c-2.2-0.4-4.2-2.4-6.4-2.6c-2.2-0.2-5.3,0.3-6.5,1.8c-1.3,1.5-1.6,4.7-1,6.7
	c0.9,2.7,3.6,4.8,4.7,7.6c0.7,1.8-0.1,4.2-0.2,6.3c-1.9-0.3-4-0.2-5.8-0.9c-1.5-0.6-2.5-2.1-3.8-3.2c-2.8-2.4-5.8-3.7-8.9-0.8
	c-2.9,2.7-3.1,6-1.7,9.6c0.9,2.3,1.8,4.6,2.2,6.9c0.2,1.2-0.7,3.5-1.5,3.6c-1.6,0.3-3.7-0.1-4.9-1c-1.7-1.4-2.4-4.1-4.2-5.4
	c-2.1-1.5-5.2-3.4-7.2-2.8c-1.9,0.6-3.5,3.9-4.2,6.4c-0.6,2.1,0.9,4.7,0.4,6.9c-0.5,2.3-1.6,5.3-3.4,6.2c-3.3,1.7-3.9-1.7-4.7-4
	c-0.5-1.4-1-2.8-1.5-4.2c-1.1-3-2.8-6-6.4-4.8c-2.6,0.9-5.2,3.1-6.8,5.4c-1.2,1.7-0.1,4.7-1.1,6.7c-0.9,1.9-3.1,3.2-4.7,4.8
	c-1.2-1.7-2.5-3.3-3.4-5.1c-0.5-1.1-0.2-2.6-0.4-3.9c-0.5-3.6-1.6-7.8-5.7-7.5c-2.8,0.3-5.6,3.4-8,5.6c-1.1,1-0.9,3.3-2,4.5
	c-1.4,1.5-3.4,2.4-5.2,3.5c-0.9-1.6-2.3-3.2-2.5-4.9c-0.3-1.9,0.6-3.9,0.8-5.9c0.4-3.2,0-5.8-3.4-7.5c-3.3-1.6-5.6-0.8-7.8,1.9
	c-1.9,2.3-3.9,4.7-6.3,6.4c-1.2,0.9-3.7,0.9-5.1,0.3c-0.7-0.3-0.9-3.1-0.5-4.5c0.6-2.2,2.3-4.2,2.6-6.4c0.3-2.2,0.3-6-0.8-6.6
	c-2.5-1.3-5.9-1.6-8.7-1.1c-2.2,0.4-3.9,3.3-6.2,4c-2,0.7-4.4-0.1-6.7-0.3c0.4-1.9,0.4-4,1.2-5.7c0.7-1.6,2.9-2.6,3.4-4.2
	c0.8-2.4,1.8-6,0.7-7.5c-1.4-1.8-4.9-2.6-7.6-2.8c-2.1-0.1-4.3,2-6.5,2.2c-2.2,0.2-4.4-0.9-6.6-1.5c0.8-1.9,1.3-4.1,2.5-5.6
	c1.3-1.6,3.8-2.3,5-4c1.2-1.7,2.7-4.5,2-6c-0.9-2-3.4-4.1-5.6-4.7c-2.6-0.7-5.7,0.6-8.4,0.1c-2.1-0.4-4-2.1-5.9-3.3
	c1.3-1.6,2.5-3.5,4.1-4.6c1.4-1,3.7-0.9,5-2c1.8-1.6,4.4-3.9,4.2-5.8c-0.2-2.2-2.4-4.9-4.5-6.2c-2.1-1.3-5.3-0.6-7.7-1.7
	c-1.9-0.9-3.2-3.1-4.8-4.7c1.7-1.2,3.3-2.7,5.2-3.4c1.8-0.7,4.2,0.1,5.9-0.7c2-1,4.6-2.8,4.9-4.6c0.3-2.1-1-5.1-2.6-6.8
	c-1.8-1.8-5-2-7-3.6c-1.7-1.3-3.6-3.8-3.5-5.6c0.2-3.3,3.2-3.1,5.8-2.5c1.8,0.4,3.7,1.3,5.4,0.9c2.4-0.5,5.7-1.4,6.5-3.2
	c0.9-2.1,0.2-5.5-1.1-7.6c-1.4-2.3-4.5-3.5-6.2-5.7c-1.1-1.4-0.9-3.7-1.3-5.6c1.9-0.4,3.8-1.3,5.6-1c2.2,0.4,4.2,2.3,6.4,2.7
	c2,0.3,5.2,0.1,6.2-1.1c1.4-1.7,2-4.9,1.6-7.1c-0.4-2.2-2.6-4.2-4-6.2c-1.8-2.4-3.2-5-0.6-7.6c2.8-2.8,4.8-0.2,6.8,1.4
	c1,0.8,1.9,2.3,3,2.6c2.7,0.7,5.9,1.8,8.1,0.9c3.2-1.3,3.8-4.8,2.5-8.2c-0.8-2.2-2.1-4.3-2.3-6.5c-0.1-2,1.1-4,1.7-6
	c1.9,0.8,4.1,1.3,5.6,2.6c1.5,1.2,2,3.6,3.5,4.8c1.8,1.3,4.7,3,6.3,2.4c2.2-0.9,4.3-3.6,5-5.9c0.7-2.5-0.7-5.6-0.3-8.4
	c0.3-1.9,2-3.6,3.1-5.5c1.6,1.3,3.6,2.3,4.8,3.9c1.2,1.7,1.2,4.4,2.5,5.9c1.5,1.7,3.9,3.6,5.8,3.5c2-0.1,4.5-2.2,5.5-4.1
	c1.2-2.4,0.7-5.7,1.8-8.2c0.9-1.9,3.1-3.3,4.8-4.9c1.2,1.7,2.8,3.3,3.5,5.2c0.7,1.8-0.2,4.2,0.6,5.9c1,2.1,2.7,4.8,4.5,5.1
	c2.1,0.4,5.2-0.9,6.8-2.5c1.8-1.7,2.5-4.6,3.6-7c1.2-2.6,3.1-5.1,6-3.4c1.3,0.7,1.8,3.7,2,5.7c0.2,1.8-1.1,3.7-0.7,5.4
	c0.5,2.4,1.4,5.6,3.1,6.5c1.8,1,5.2,0.3,7.2-0.9c2.2-1.2,3.2-4.3,5.3-5.8c1.7-1.2,4.3-1.3,6.5-1.9c0.2,2.1,0.8,4.2,0.5,6.2
	c-0.3,1.9-2.2,3.6-2.2,5.5c-0.1,2.4,0.2,5.7,1.7,6.9c1.6,1.3,5,1.4,7.2,0.8c2.4-0.7,4.2-3.4,6.6-4.2c2-0.7,4.4,0,6.7,0
	c-0.4,2-0.4,4.2-1.2,6c-0.8,1.7-3,2.9-3.6,4.7c-0.8,2.1-1.5,5.3-0.4,6.7c1.2,1.8,4.3,3,6.6,3c2.5,0,5-2,7.5-2.3
	c2.2-0.2,5.3,0,6.5,1.4c2.1,2.5-0.2,4.5-2.4,5.9c-1.1,0.7-2.2,1.4-3.3,2.2c-2.7,1.9-5,4.1-3.8,7.8
	C236.7,108.1,239.5,109.4,243.3,109.2z M220.9,180c-14.3-8.3-28.3-16.3-42.3-24.3c-0.9-0.5-2.4,0-3.6,0.3c-4.9,1.3-9.7,2.6-14.6,4.1
	c-1.4,0.4-3.4,0.8-4,1.9c-8.1,13.7-16,27.6-24,41.3C154.6,217.8,199.9,212.4,220.9,180z M203.7,79.9c-8.2,14.1-16.2,27.9-24.1,41.8
	c-0.6,1.1,0,3,0.4,4.4c1.2,4.6,2.3,9.2,3.8,13.7c0.6,1.8,1.4,4,2.8,4.9c6.3,4,12.8,7.7,19.3,11.5c7.2,4.1,14.4,8.2,21.6,12.3
	C242.9,139.6,232,97.6,203.7,79.9z M103.6,96.7c1.2,0.8,2.4,1.7,3.7,2.4c12.1,7,24.2,13.9,36.2,21c2.8,1.7,4.7,1.4,7.6,0
	c3.6-1.8,7.8-2.7,11.8-3c2.8-0.2,4.5-0.8,5.9-3.3c4.1-7.4,8.5-14.7,12.7-22c3.5-6.1,7-12.3,10.6-18.5
	C165.6,58.6,122.9,66.7,103.6,96.7z M96.7,108.4c-16.8,34.5-0.1,74.7,24,88.6c8.1-13.9,16.2-27.8,24.1-41.9c0.6-1.1-0.1-3-0.6-4.4
	c-1.1-3.4-3.6-6.9-3.4-10.2c0.3-5.9-2.2-8.9-7.2-10.7c-0.9-0.3-1.7-1-2.6-1.5C119.7,121.6,108.4,115.1,96.7,108.4z M169.2,147.5
	c5.9,0.1,5.9,0.1,4.3-6.1c1.3-1.1,2.6-2.2,4.2-3.6c-2.1-1.4-3.5-2.4-4.9-3.4c2.2-5.7,2.1-5.9-4.4-5.5c-1.9-5.9-1.9-5.9-6.8-1.9
	c-1.4-1-2.8-1.9-4.8-3.3c-0.8,2.4-1.4,4.2-2,5.9c-5.9-0.3-6.1-0.1-3.9,5.9c-5.1,3.3-5.1,3.4,0.3,7.1c-0.5,1.5-1,2.9-1.8,5.2
	c2.4,0.2,4.2,0.3,6.1,0.4c2,5.8,2.1,5.8,6.9,1.9C167.5,153.5,167.7,153.4,169.2,147.5z"
        />
        <g id="cog-md">
          <path
            d="M248.2,241.2c-2.4-21.2,16.7-47.8,46-48.4c26.8-0.6,48.4,20.1,48.9,46.9c0.5,26-20.5,47.7-46.6,48.2
		C269.3,288.5,247.4,266,248.2,241.2z M334.5,241.9c1.1-21.4-15.6-39.8-37.1-40.8c-21.1-1-40,15.4-41.1,35.9
		c-1.3,23.1,14.8,41.4,37.5,42.6C313.4,280.7,333.8,265.5,334.5,241.9z"
          />
          <path
            d="M295.7,203c21.2,0.4,37.2,16.4,37.1,37.1c0,24.2-19.4,37.9-37.6,37.9c-19.6-0.1-37.6-16.5-37.1-37.8
		C258.7,217.3,276.6,202.7,295.7,203z M263.5,241.7c0.8,19.8,18.3,31.8,33.8,30.6c17.6-1.3,31.2-15,30.2-33.8
		c-1-17.9-15-30.6-33.3-30.1C276.5,208.9,262.6,224.3,263.5,241.7z"
          />
          <path
            d="M295.5,270.4c-16.5,0.1-30.3-13.4-30.3-29.5c0-17.3,13.4-30.9,30.7-30.7c16.6,0.3,29.4,12.8,29.8,31
		C326,257,311.9,270.4,295.5,270.4z M312.7,241.4c0.6-9.8-6.5-17.8-16.3-18.3c-9.5-0.6-17.8,6.8-18.3,16.4
		c-0.5,9.8,7,17.9,16.8,18.5C303,258.4,313.1,250.4,312.7,241.4z"
          />
          <path d="M304.5,230.7c-7.3,5-13.9,9.5-20.7,14.1c-2.1-5.7-1-10.6,3.1-14.1C292.2,226.2,297.7,226.9,304.5,230.7z" />
          <path d="M306.9,236.2c2.3,6,1,10.7-3.8,14.6c-4,3.3-9.9,3.2-16.2-0.9C293.8,245.2,300.3,240.8,306.9,236.2z" />
          <path
            d="M284,250.6c0,0-0.7-1-1.4-2.1c8.4-6,16.5-11.8,25.9-18.5c-0.6,1.9-0.6,3.4-1.3,3.8c-5.8,4-11.9,7.7-17.7,11.7
		C287.5,246.9,285.9,248.8,284,250.6z"
          />
          <path
            d="M230,263.1c-2.4,0.5-4.9,1.4-7.3,1.3c-1.5-0.1-3.9-1.6-4.2-2.9c-0.3-1.3,1-3.7,2.3-4.5c2-1.3,4.7-1.7,7-2.6
		c3.1-1.3,5.1-4,3.9-7.1c-0.9-2.2-3.3-4.2-5.6-5.4c-2.1-1.1-5-0.5-7.2-1.4c-1.4-0.6-3-2.5-3.2-3.9c-0.1-0.9,1.9-2.7,3.3-3.2
		c1.8-0.6,3.9-0.5,5.9-0.4c4,0.1,6.8-1.5,7.8-5.5c1.1-4.3-1.6-6.5-5-8c-1.7-0.8-3.7-1.1-4.9-2.3c-1.2-1.2-2.3-3.6-1.9-4.8
		c0.5-1.2,2.9-2.3,4.6-2.4c1.9-0.1,3.8,1.1,5.7,1.6c3.5,1,6.6,0.7,8.7-2.8c2.1-3.6,0.6-6.4-2-8.9c-1.4-1.4-3.4-2.5-4.3-4.1
		c-0.8-1.4-1.3-4.4-0.5-5c1.2-1,3.8-1.4,5.4-0.9c2.3,0.8,4,3.3,6.3,3.8c2.4,0.5,6,0.4,7.5-1.1c1.5-1.5,1.5-4.9,1.4-7.5
		c0-1.5-1.5-2.9-2.4-4.3c-1.6-2.6-3-5.2,0.3-7.4c3.1-2,4.9,0.3,6.5,2.5c1.1,1.5,2.1,3,3.4,4.3c2.3,2.4,5.4,3.6,8,1.3
		c1.8-1.6,2.8-4.6,3.2-7.1c0.3-2.2-1.2-4.6-0.9-6.8c0.1-1.6,1.5-4,2.8-4.3c1.3-0.3,3.6,1.1,4.6,2.4c1.3,1.8,1.5,4.4,2.4,6.5
		c1.3,2.9,3.6,5.6,6.9,4.3c2.4-0.9,4.4-3.5,5.8-5.8c0.9-1.5,0-4.1,0.8-5.8c0.8-1.8,2.7-3.1,4.1-4.6c1.3,1.6,3.2,2.9,3.9,4.7
		c0.7,1.7-0.1,4,0.2,5.9c0.5,3.3,1.5,6.2,5.5,6.7c3.7,0.5,6-1.2,7.5-4.4c0.8-1.8,1.2-4,2.5-5.4c1.2-1.3,3.4-1.6,5.1-2.4
		c0.8,1.8,2.1,3.5,2.1,5.3c0,2.1-1.3,4.1-1.8,6.2c-0.8,3.2-0.1,6,3,7.7c3.1,1.8,5.8,1.1,8.2-1.3c1.7-1.6,3-3.8,4.9-5
		c1.4-0.9,4.5-1.3,5.1-0.5c1,1.3,1.3,3.9,0.8,5.5c-0.7,2.1-2.7,3.8-3.9,5.8c-1.7,2.9-1.9,6.2,1,8c2,1.3,5.2,1.5,7.7,1.1
		c2.2-0.3,4-2.7,6.1-3.1c1.7-0.3,4.2,0.4,5.3,1.6c0.7,0.7-0.2,3.5-1.1,5c-0.8,1.3-2.6,2-3.9,3c-3.1,2.4-5.5,5.1-3.4,9.3
		c1.9,3.8,5.3,4.1,9,3.3c1.3-0.3,2.6-0.6,3.9-0.8c2.6-0.5,5.1-0.6,5.9,2.8c0.8,3.4-1.6,4.4-4,5.3c-1.9,0.7-4.3,0.8-5.5,2.1
		c-1.8,1.8-4.1,4.6-3.8,6.6c0.3,2.1,3.1,4.3,5.3,5.6c1.7,1,4.4,0.1,6.3,1c1.8,0.8,4,2.5,4.4,4.2c0.6,2.9-1.9,3.8-4.5,3.8
		c-1.7,0-3.3,0-5,0.1c-3.7,0.3-7,1.3-7.7,5.6c-0.6,4,1.6,6.2,5,7.7c1.7,0.7,3.8,1.1,4.9,2.3c1.2,1.3,2.3,3.6,2,5.2
		c-0.2,1-3,2.1-4.7,2c-2.1,0-4.1-1.1-6.2-1.7c-3.5-1-6.2-0.2-8.1,3c-1.8,3-1.1,5.7,1.3,8.1c1.6,1.5,3.7,2.6,4.7,4.4
		c0.9,1.7,0.5,4,0.7,6.1c-1.9,0.1-4,0.7-5.8,0.1c-1.8-0.6-3.2-2.3-4.9-3.4c-2.7-1.9-5.6-2.3-8.3,0c-2.8,2.4-3.3,5.3-1.5,8.5
		c1.1,2,2.7,4,3.3,6.1c0.4,1.5-0.2,4.2-1.2,4.9c-1.1,0.8-3.7,0.3-5.1-0.6c-1.6-1-2.5-3.1-3.7-4.6c-2.2-2.8-4.7-4.8-8.5-3.2
		c-3.9,1.7-4.7,4.9-3.9,8.7c0.3,1.5,0.7,2.9,1,4.4c0.6,2.6,0.7,5.1-2.7,5.9c-3.3,0.9-4.5-1.4-5.4-3.8c-0.6-1.7-1-3.5-1.7-5.2
		c-1.4-3.2-4-5.7-7.4-4.3c-2.3,0.9-4.2,3.7-5.4,6.1c-1,1.9-0.3,4.7-1.1,6.8c-0.5,1.4-2.6,3.2-3.7,3c-1.5-0.2-3.4-1.9-3.8-3.4
		c-0.7-2.3,0.4-5.2-0.5-7.4c-0.9-2.3-2.8-4.8-4.9-5.9c-3-1.5-5.8,0.2-7.5,3.1c-1,1.9-1.4,4.3-2.8,5.8c-1.3,1.4-3.6,1.9-5.4,2.8
		c-0.7-2-1.9-3.9-1.9-5.9c-0.1-1.9,1.2-3.8,1.6-5.7c0.7-3.2,0.1-6-3-7.7c-3.1-1.7-5.8-1-8.2,1.4c-1.5,1.5-2.7,3.6-4.5,4.6
		c-1.5,0.9-3.7,0.7-5.6,0.9c-0.2-1.9-1-4-0.5-5.6c0.7-2.1,3.1-3.8,3.6-5.9c0.6-2.4,0.6-5.6-0.5-7.7c-1.6-3-4.9-3.1-7.9-1.6
		c-2.1,1-4,2.8-6.1,3.3c-1.7,0.4-4.2-0.3-5.4-1.4c-0.7-0.6,0.1-3.7,1.1-4.9c1.4-1.8,4.2-2.6,5.3-4.4c1.3-2.2,2.7-5.4,2-7.4
		c-0.8-2.2-4-3.5-6.2-5.2C230.5,262.5,230.2,262.8,230,263.1z M294.9,289.6c26.9,0.2,49.5-22.1,49.6-49c0.2-27.5-21.8-50-49.1-49.9
		c-28.5,0.1-49.2,21.9-49.9,48.2C244.9,266.9,267.3,289.4,294.9,289.6z"
          />
        </g>
        <g id="cog-sm-1">
          <path
            d="M98.9,275.3c-0.7-1.5-2.2-3.8-2.9-6.3c-0.4-1.6,0.4-3.4,0.7-5.2c1.7,0.6,4,0.8,4.8,2c2.4,3.4,3.9,7.9,9.3,6.5
		c5.3-1.4,4.5-6.1,5-10.2c0.2-1.4,2.1-2.7,3.2-4c1,1.3,2.2,2.4,2.9,3.8c0.5,1,0.1,2.3,0.2,3.5c0.1,3.2,1,6,4.5,7
		c3.7,1,5.9-1,7.9-3.8c1.5-2.1,2-6.8,6.2-4.6c4.2,2.3,0.7,5.1-0.5,7.6c-1.4,3-2.4,6,0.3,8.8c2.7,2.8,5.7,2,8.7,0.6
		c0.3-0.1,0.6-0.4,0.9-0.5c2.4-1.1,5.1-3.9,7.1,0.1c1.8,3.7-2,4.2-4,5.6c-2.7,2-5.7,3.8-4.7,8c1,4.4,4.6,4.8,8.2,4.9
		c0.7,0,1.5-0.2,2,0.1c1.5,0.9,2.9,2,4.3,3.1c-1.3,1.1-2.5,2.6-4,3.2c-1.5,0.6-3.6-0.1-4.9,0.6c-2.1,1.2-4.7,2.9-5.3,4.9
		c-0.5,1.7,1.3,4.4,2.7,6.2c1,1.4,3.3,1.8,4.5,3.1c0.9,1,1.6,3.2,1.1,4c-0.6,1-2.7,1.7-4,1.4c-1.9-0.4-3.5-2.3-5.4-2.4
		c-2.4-0.2-5.5,0-7.1,1.4c-1.3,1.2-1.2,4.5-1,6.7c0.2,1.9,2,3.5,2.4,5.4c0.2,1.2-0.6,3.2-1.5,3.9c-0.6,0.5-2.7-0.3-3.7-1.1
		c-1.2-1.1-1.6-3.2-2.8-4c-2.1-1.5-4.7-3.3-7-3.2c-3.4,0.1-4.7,3.3-4.9,6.5c-0.1,1.3,0.3,2.9-0.2,4c-0.6,1.4-2,2.4-3.1,3.6
		c-1.1-1.2-2.4-2.3-3-3.7c-0.5-1.3,0.3-3.2-0.4-4.4c-1.3-2.2-2.9-5.4-4.9-5.8c-2-0.4-4.8,1.7-7,3.2c-1.2,0.9-1.5,3.1-2.7,4.1
		c-1,0.8-3.1,1.1-4.2,0.6c-0.8-0.3-1.3-2.5-1.1-3.7c0.5-1.9,2.2-3.5,2.4-5.4c0.3-2.2,0.3-5.5-1-6.7c-1.5-1.4-4.7-1.5-7-1.3
		c-1.8,0.2-3.5,1.9-5.4,2.4c-1.1,0.3-3.4-0.3-3.7-1c-0.4-1.2-0.2-3.3,0.7-4.3c1.3-1.4,3.7-1.9,4.8-3.4c1.4-1.8,3.1-4.6,2.5-6.3
		c-0.6-2-3.3-3.6-5.5-4.7c-1.7-0.8-4-0.1-5.9-0.7c-1.1-0.3-2.7-2-2.6-2.8c0.2-1.2,1.6-2.8,2.8-3.2c1.8-0.6,4.2,0.1,5.9-0.7
		c2-0.9,4.8-2.6,5.1-4.3c0.4-2.1-1.2-4.8-2.5-6.8c-0.9-1.4-3.3-1.8-4.4-3.1c-0.9-1-1.5-3.2-1-4.1c0.5-0.9,2.8-1.4,4.1-1.1
		c2.1,0.5,3.8,2,5.9,2.7C94.8,283.1,98.8,280.4,98.9,275.3z M121.1,277.7c-2.4-0.3-4.3-0.9-6.1-0.7c-6.9,1-12.2,4.6-16.7,9.9
		c-4.7,5.6-5.3,12.4-4.6,18.8c1.6,14.6,14.6,24.4,30.6,21.5c11.5-2.1,17.8-10.2,19.1-23.9c1.3-12.7-6.5-23.6-18.8-26.1
		C123.3,277,121.8,277.6,121.1,277.7z"
          />
          <path d="M141.9,306.7c-1.2,10.4-10.6,18.8-22.1,18.9c0.6-4.1-0.2-10.2,2-11.6C127.7,310.2,131.9,300.4,141.9,306.7z" />
          <path d="M95.8,297.6c1.8-10.5,9.8-17.7,22.1-18.9c-0.4,4.1,0.5,10.2-1.6,11.6C110.3,294.1,106.1,304.2,95.8,297.6z" />
          <path d="M114.5,325.1c-9.6-0.4-18-9.4-19.2-22.1c4.3,0.7,10.2-0.1,11.9,2.2C111.3,311,120.7,315.4,114.5,325.1z" />
          <path
            d="M141.5,301.6c-3.9-0.9-9.3-0.5-11.3-2.9c-4.4-5.3-12.7-10.2-7.4-18.6c2.8,0.7,5.4,1.3,7.9,1.9c0.2,0,0.4,0,0.5,0.1
		c0.5,0.4,1.3,0.7,1.5,1.2C135.3,289.3,144.6,291.7,141.5,301.6z"
          />
          <path
            d="M119.6,291.1c0.9,0.6,2.1,1.7,3.5,2.5c3.9,2.1,6,5.6,5.8,9.7c-0.1,4.1-5.9,8.9-10.1,9.2c-3.7,0.2-9.8-4.8-9.6-9.8
		c0.1-3.1,3.5-6.3,5.9-9.1C116.1,292.3,118.2,291.8,119.6,291.1z M118.9,295.6c-3.5,0-6.7,3.1-6.8,6.6c-0.1,3.4,3.1,6.8,6.5,6.9
		c3.6,0.1,7.1-3.4,7.1-6.9C125.7,298.7,122.5,295.6,118.9,295.6z"
          />
          <path
            d="M117.9,307.9c-1.3-1.9-3.6-3.9-3.6-5.8c0.1-1.6,2.6-4.1,4.5-4.5c3-0.6,5.2,1.7,4.8,4.7c-0.3,2-2.3,3.7-3.6,5.5
		C119.3,307.8,118.6,307.9,117.9,307.9z"
          />
        </g>
        <g id="cog-sm-2">
          <path
            d="M181.8,287.4c-0.7-1.5-2.2-3.8-2.9-6.3c-0.4-1.6,0.4-3.4,0.7-5.2c1.7,0.6,4,0.8,4.8,2c2.4,3.4,3.9,7.9,9.3,6.5
		c5.3-1.4,4.5-6.1,5-10.2c0.2-1.4,2.1-2.7,3.2-4c1,1.3,2.2,2.4,2.9,3.8c0.5,1,0.1,2.3,0.2,3.5c0.1,3.2,1,6,4.5,7
		c3.7,1,5.9-1,7.9-3.8c1.5-2.1,2-6.8,6.2-4.6c4.2,2.3,0.7,5.1-0.5,7.6c-1.4,3-2.4,6,0.3,8.8c2.7,2.8,5.7,2,8.7,0.6
		c0.3-0.1,0.6-0.4,0.9-0.5c2.4-1.1,5.1-3.9,7.1,0.1c1.8,3.7-2,4.2-4,5.6c-2.7,2-5.7,3.8-4.7,8c1,4.4,4.6,4.8,8.2,4.9
		c0.7,0,1.5-0.2,2,0.1c1.5,0.9,2.9,2,4.3,3.1c-1.3,1.1-2.5,2.6-4,3.2c-1.5,0.6-3.6-0.1-4.9,0.6c-2.1,1.2-4.7,2.9-5.3,4.9
		c-0.5,1.7,1.3,4.4,2.7,6.2c1,1.4,3.3,1.8,4.5,3.1c0.9,1,1.6,3.2,1.1,4c-0.6,1-2.7,1.7-4,1.4c-1.9-0.4-3.5-2.3-5.4-2.4
		c-2.4-0.2-5.5,0-7.1,1.4c-1.3,1.2-1.2,4.5-1,6.7c0.2,1.9,2,3.5,2.4,5.4c0.2,1.2-0.6,3.2-1.5,3.9c-0.6,0.5-2.7-0.3-3.7-1.1
		c-1.2-1.1-1.6-3.2-2.8-4c-2.1-1.5-4.7-3.3-7-3.2c-3.4,0.1-4.7,3.3-4.9,6.5c-0.1,1.3,0.3,2.9-0.2,4c-0.6,1.4-2,2.4-3.1,3.6
		c-1.1-1.2-2.4-2.3-3-3.7c-0.5-1.3,0.3-3.2-0.4-4.4c-1.3-2.2-2.9-5.4-4.9-5.8c-2-0.4-4.8,1.7-7,3.2c-1.2,0.9-1.5,3.1-2.7,4.1
		c-1,0.8-3.1,1.1-4.2,0.6c-0.8-0.3-1.3-2.5-1.1-3.7c0.5-1.9,2.2-3.5,2.4-5.4c0.3-2.2,0.3-5.5-1-6.7c-1.5-1.4-4.7-1.5-7-1.3
		c-1.8,0.2-3.5,1.9-5.4,2.4c-1.1,0.3-3.4-0.3-3.7-1c-0.4-1.2-0.2-3.3,0.7-4.3c1.3-1.4,3.7-1.9,4.8-3.4c1.4-1.8,3.1-4.6,2.5-6.3
		c-0.6-2-3.3-3.6-5.5-4.7c-1.7-0.8-4-0.1-5.9-0.7c-1.1-0.3-2.7-2-2.6-2.8c0.2-1.2,1.6-2.8,2.8-3.2c1.8-0.6,4.2,0.1,5.9-0.7
		c2-0.9,4.8-2.6,5.1-4.3c0.4-2.1-1.2-4.8-2.5-6.8c-0.9-1.4-3.3-1.8-4.4-3.1c-0.9-1-1.5-3.2-1-4.1c0.5-0.9,2.8-1.4,4.1-1.1
		c2.1,0.5,3.8,2,5.9,2.7C177.7,295.3,181.7,292.6,181.8,287.4z M203.9,289.8c-2.4-0.3-4.3-0.9-6.1-0.7c-6.9,1-12.2,4.6-16.7,9.9
		c-4.7,5.6-5.3,12.4-4.6,18.8c1.6,14.6,14.6,24.4,30.6,21.5c11.5-2.1,17.8-10.2,19.1-23.9c1.3-12.7-6.5-23.6-18.8-26.1
		C206.2,289.2,204.6,289.7,203.9,289.8z"
          />
          <path d="M224.7,318.8c-1.2,10.4-10.6,18.8-22.1,18.9c0.6-4.1-0.2-10.2,2-11.6C210.5,322.4,214.7,312.6,224.7,318.8z" />
          <path d="M178.6,309.7c1.8-10.5,9.8-17.7,22.1-18.9c-0.4,4.1,0.5,10.2-1.6,11.6C193.2,306.2,188.9,316.3,178.6,309.7z" />
          <path d="M197.3,337.3c-9.6-0.4-18-9.4-19.2-22.1c4.3,0.7,10.2-0.1,11.9,2.2C194.1,323.1,203.6,327.6,197.3,337.3z" />
          <path
            d="M224.3,313.8c-3.9-0.9-9.3-0.5-11.3-2.9c-4.4-5.3-12.7-10.2-7.4-18.6c2.8,0.7,5.4,1.3,7.9,1.9c0.2,0,0.4,0,0.5,0.1
		c0.5,0.4,1.3,0.7,1.5,1.2C218.1,301.4,227.5,303.8,224.3,313.8z"
          />
          <path
            d="M202.4,303.3c0.9,0.6,2.1,1.7,3.5,2.5c3.9,2.1,6,5.6,5.8,9.7c-0.1,4.1-5.9,8.9-10.1,9.2c-3.7,0.2-9.8-4.8-9.6-9.8
		c0.1-3.1,3.5-6.3,5.9-9.1C199,304.4,201,304,202.4,303.3z M201.7,307.7c-3.5,0-6.7,3.1-6.8,6.6c-0.1,3.4,3.1,6.8,6.5,6.9
		c3.6,0.1,7.1-3.4,7.1-6.9C208.5,310.8,205.3,307.7,201.7,307.7z"
          />
          <path
            d="M200.7,320.1c-1.3-1.9-3.6-3.9-3.6-5.8c0.1-1.6,2.6-4.1,4.5-4.5c3-0.6,5.2,1.7,4.8,4.7c-0.3,2-2.3,3.7-3.6,5.5
		C202.1,320,201.4,320,200.7,320.1z"
          />
        </g>
        <g id="cog-sm-3">
          <path
            d="M48.5,207.9c-0.7-1.5-2.2-3.8-2.9-6.3c-0.4-1.6,0.4-3.4,0.7-5.2c1.7,0.6,4,0.8,4.8,2c2.4,3.4,3.9,7.9,9.3,6.5
		c5.3-1.4,4.5-6.1,5-10.2c0.2-1.4,2.1-2.7,3.2-4c1,1.3,2.2,2.4,2.9,3.8c0.5,1,0.1,2.3,0.2,3.5c0.1,3.2,1,6,4.5,7
		c3.7,1,5.9-1,7.9-3.8c1.5-2.1,2-6.8,6.2-4.6c4.2,2.3,0.7,5.1-0.5,7.6c-1.4,3-2.4,6,0.3,8.8c2.7,2.8,5.7,2,8.7,0.6
		c0.3-0.1,0.6-0.4,0.9-0.5c2.4-1.1,5.1-3.9,7.1,0.1c1.8,3.7-2,4.2-4,5.6c-2.7,2-5.7,3.8-4.7,8c1,4.4,4.6,4.8,8.2,4.9
		c0.7,0,1.5-0.2,2,0.1c1.5,0.9,2.9,2,4.3,3.1c-1.3,1.1-2.5,2.6-4,3.2c-1.5,0.6-3.6-0.1-4.9,0.6c-2.1,1.2-4.7,2.9-5.3,4.9
		c-0.5,1.7,1.3,4.4,2.7,6.2c1,1.4,3.3,1.8,4.5,3.1c0.9,1,1.6,3.2,1.1,4c-0.6,1-2.7,1.7-4,1.4c-1.9-0.4-3.5-2.3-5.4-2.4
		c-2.4-0.2-5.5,0-7.1,1.4c-1.3,1.2-1.2,4.5-1,6.7c0.2,1.9,2,3.5,2.4,5.4c0.2,1.2-0.6,3.2-1.5,3.9c-0.6,0.5-2.7-0.3-3.7-1.1
		c-1.2-1.1-1.6-3.2-2.8-4c-2.1-1.5-4.7-3.3-7-3.2c-3.4,0.1-4.7,3.3-4.9,6.5c-0.1,1.3,0.3,2.9-0.2,4c-0.6,1.4-2,2.4-3.1,3.6
		c-1.1-1.2-2.4-2.3-3-3.7c-0.5-1.3,0.3-3.2-0.4-4.4c-1.3-2.2-2.9-5.4-4.9-5.8c-2-0.4-4.8,1.7-7,3.2c-1.2,0.9-1.5,3.1-2.7,4.1
		c-1,0.8-3.1,1.1-4.2,0.6c-0.8-0.3-1.3-2.5-1.1-3.7c0.5-1.9,2.2-3.5,2.4-5.4c0.3-2.2,0.3-5.5-1-6.7c-1.5-1.4-4.7-1.5-7-1.3
		c-1.8,0.2-3.5,1.9-5.4,2.4c-1.1,0.3-3.4-0.3-3.7-1c-0.4-1.2-0.2-3.3,0.7-4.3c1.3-1.4,3.7-1.9,4.8-3.4c1.4-1.8,3.1-4.6,2.5-6.3
		c-0.6-2-3.3-3.6-5.5-4.7c-1.7-0.8-4-0.1-5.9-0.7c-1.1-0.3-2.7-2-2.6-2.8c0.2-1.2,1.6-2.8,2.8-3.2c1.8-0.6,4.2,0.1,5.9-0.7
		c2-0.9,4.8-2.6,5.1-4.3c0.4-2.1-1.2-4.8-2.5-6.8c-0.9-1.4-3.3-1.8-4.4-3.1c-0.9-1-1.5-3.2-1-4.1c0.5-0.9,2.8-1.4,4.1-1.1
		c2.1,0.5,3.8,2,5.9,2.7C44.4,215.7,48.4,213,48.5,207.9z M70.7,210.3c-2.4-0.3-4.3-0.9-6.1-0.7c-6.9,1-12.2,4.6-16.7,9.9
		c-4.7,5.6-5.3,12.4-4.6,18.8c1.6,14.6,14.6,24.4,30.6,21.5c11.5-2.1,17.8-10.2,19.1-23.9c1.3-12.7-6.5-23.6-18.8-26.1
		C72.9,209.6,71.4,210.2,70.7,210.3z"
          />
          <path d="M91.4,239.3c-1.2,10.4-10.6,18.8-22.1,18.9c0.6-4.1-0.2-10.2,2-11.6C77.2,242.8,81.4,233,91.4,239.3z" />
          <path d="M45.4,230.2c1.8-10.5,9.8-17.7,22.1-18.9c-0.4,4.1,0.5,10.2-1.6,11.6C59.9,226.6,55.6,236.8,45.4,230.2z" />
          <path d="M64.1,257.7c-9.6-0.4-18-9.4-19.2-22.1c4.3,0.7,10.2-0.1,11.9,2.2C60.9,243.5,70.3,248,64.1,257.7z" />
          <path
            d="M91.1,234.2c-3.9-0.9-9.3-0.5-11.3-2.9c-4.4-5.3-12.7-10.2-7.4-18.6c2.8,0.7,5.4,1.3,7.9,1.9c0.2,0,0.4,0,0.5,0.1
		c0.5,0.4,1.3,0.7,1.5,1.2C84.9,221.9,94.2,224.3,91.1,234.2z"
          />
          <path
            d="M69.1,223.7c0.9,0.6,2.1,1.7,3.5,2.5c3.9,2.1,6,5.6,5.8,9.7c-0.1,4.1-5.9,8.9-10.1,9.2c-3.7,0.2-9.8-4.8-9.6-9.8
		c0.1-3.1,3.5-6.3,5.9-9.1C65.7,224.9,67.8,224.4,69.1,223.7z M68.5,228.1c-3.5,0-6.7,3.1-6.8,6.6c-0.1,3.4,3.1,6.8,6.5,6.9
		c3.6,0.1,7.1-3.4,7.1-6.9C75.2,231.2,72,228.2,68.5,228.1z"
          />
          <path
            d="M67.5,240.5c-1.3-1.9-3.6-3.9-3.6-5.8c0.1-1.6,2.6-4.1,4.5-4.5c3-0.6,5.2,1.7,4.8,4.7c-0.3,2-2.3,3.7-3.6,5.5
		C68.8,240.4,68.2,240.5,67.5,240.5z"
          />
        </g>
      </svg>
    );
  }
}
