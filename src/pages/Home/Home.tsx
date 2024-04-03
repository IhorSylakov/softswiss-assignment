import React from 'react';

export default function Home() {
  return (
    <div className="Home">
      <p>
        The test assignment is to create one SPA page of a fictional application.
        Use design in Figma, all necessary elements are there: images, backgrounds,
        logos, button shapes, colors and fonts.
      </p>
      <p>
        Adaptive layout, implementation of interactive elements on hover, 
        implementation of burger menu logic and "Read more" button for mobile 
        devices without using JavaScript (Using CSS).
      </p>

      <p>Requirements:</p>
      <p>
        The markup should match the layout exactly and be fully responsive. The design 
        includes three viewports, so you should focus on them.
      </p>
      <p>It is forbidden to use any framework or library to create an adaptive design.</p>
      <p>When creating markup, flex/grid should be used</p>
      <p>Multiple Backgrounds are recommended for implementing backgrounds.</p>
      <p>Images should be optimized and SVG should be used if possible.</p>
      <p>BEM methodology is preferred for naming classes.</p>
      <p>Different data can be added to the implementation and React Hooks can be used.</p>

      <p>discovered issues in design:</p>
      <dl>
        <dt>image in banner is not properly svg, it has base64 image and weight over 1.3mb.</dt>
        <dd>downloaded it as webp with 2x resolution</dd>
        <dt>icon in footer is not properly svg, it has base64 image and weight over 900kb.</dt>
        <dd>downloaded it as webp with 2x resolution</dd>
        <dt>the pictures for grid items had unnecessary rounding, plus one of them had an unnecessary shadow.</dt>
        <dd>deleted them before exporting</dd>
        <dt>dev mod doesn't work in figma. there is no possibility to copy gradients correctly (slope angle for example).</dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
      </dl>
    </div>
  );
}
