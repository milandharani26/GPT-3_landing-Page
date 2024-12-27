import React from 'react';
import { Feature } from '../../componants';
import './features.css';

const featuresData = [
  {
    title: 'Facial Recognition',
    text: 'Advanced AI algorithms for accurate face detection and matching.',
  },
  {
    title: 'Real-time Tracking',
    text: 'Instant attendance logging as employees enter or exit.',
  },
  {
    title: 'Cloud Integration',
    text: 'Secure cloud storage for attendance data with easy access.',
  },
  {
    title: 'Mobile App',
    text: 'Manage attendance on-the-go with our user-friendly mobile application.',
  },
  {
    title: 'Customizable Reports',
    text: 'Generate detailed attendance reports tailored to your needs',
  },
  {
    title: 'Multi-location Support',
    text: 'Ideal for businesses with multiple offices or branches.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      {/* <p>Request Early Access to Get Started</p> */}
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;