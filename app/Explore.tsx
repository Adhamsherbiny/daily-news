/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import pic from "../public/pic.webp";
import "./styles/explore.scss";

export default function Explore() {
  return (
    <div className="explore" id="explore">
      <div className="container">
        <div className="img">
          <Image src={pic} alt="picture" loading="lazy" className="pic" />
        </div>
        <div className="text">
          <h1>Technology</h1>
          <p>
            Technology today is evolving at a rapid pace, enabling faster change
            and progress, causing an acceleration of the rate of change.
            However, it is not only technology trends and emerging technologies
            that are evolving, a lot more has changed, making IT professionals
            realize that their role will not stay the same in the contactless
            world tomorrow. And an IT professional in 2024 will constantly be
            learning, unlearning, and relearning (out of necessity, if not
            desire). What does this mean for you in the context of the highest
            paying jobs in India? It means staying current with emerging
            technologies and latest technology trends. And it means keeping your
            eyes on the future to know which skills you’ll need to know to
            secure a safe job tomorrow and even learn how to get there. Here are
            the top 24 emerging technology trends you should watch for and make
            an attempt at in 2024, and possibly secure one of the highest paying
            tech jobs that will be created by these new technology trends.
            Starting the list of new tech trends with the talk of the town,
            gen-AI!
          </p>
        </div>
      </div>
    </div>
  );
}
