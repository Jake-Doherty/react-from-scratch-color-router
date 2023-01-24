import React from 'react';
import { useParams } from 'react-router-dom';

export default function RGB() {
  const { r, g, b } = useParams();
  console.log(r, g, b);
  return <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>RGB</div>;
}
