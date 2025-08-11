import React, { useRef, useEffect } from 'react';
import Navbar from './Navbar';
import EditNavbar from './EditNavbar';

function BorderCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 1000;
    canvas.height = 1000;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'green';
    ctx.lineWidth =5;
    ctx.strokeRect(0, 0, 1000, 1000);
  }, []);
  return (
    <canvas ref={canvasRef} style={{ display: 'block', margin: 'auto', backgroundColor: 'transparent' }}/>
  );
}

export default function Editor() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div style={{ paddingTop: '5rem' }}>
        <EditNavbar />
        <div className="p-6 flex justify-center"><BorderCanvas /> </div>
      </div>
    </div>
  );
}