import React from 'react';
import { Feature } from '../../componants'
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="HIW">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        {/* The possibilities are beyond your imagination  */}
        How It Works
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Face Detection" text="Our system detects and analyzes facial features as employees approach." />
      <Feature title="Matching & Verification" text="Detected faces are matched against the employee database for verification." />
      <Feature title="Attendance Logging" text="Upon successful matching, attendance is logged with precise timestamp." />
    </div>
  </div>
);

export default WhatGPT3;