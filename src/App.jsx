import './App.css';
"use client";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { TailwindcssButtons } from './components/ui/button';
import { Suspense } from 'react';
import Nav from './components/navbar';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Scene from '../public/Scene';
import { BentoGridSecondDemo } from './components/ui/bento-grid';
import { AppleCardsCarouselDemo } from './components/carousel';
import { FooterWithSocialLinks } from './components/footer';

function App() {

  const words = `Changing your idea of what drones can do`;

  return (
    <>
      <Nav />

      <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
        {/* Overlayed text component */}
        <div className="overlay-text">
          <TextGenerateEffect duration={2} filter={false} words={words} />
          <div className='text-xl mt-4'>VECROS offers Spatial-AI powered drones for Construction,<br/> Warehouse, Defense</div>
          <div className='mt-10'>
            <TailwindcssButtons buttonText="BOOK FREE DEMO" />
          </div>
        </div>

        <Canvas style={{ height: '100%', width: '100%' }}>
          <ambientLight />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>

      <div className='text-4xl text-center gradient'>
          <b>End-to-End <br/> AI-Powered Enterprise Drone Solutions</b>
      </div>

      <div className='text-sm mt-4 text-center text-gray-500'>
      Hardware, Software and Services fully supported by one company - built exclusively for<br/> Enterprises, Public Safety and Defence
      </div>

      <div className='mt-10 text-center'>
        <TailwindcssButtons buttonText="EXPLORE NOW" />
      </div>


      <div className='mt-48 mb-12 text-4xl text-center gradient'>
          <b>Our Products</b>
      </div>

      <BentoGridSecondDemo/>

      <div className="mt-40 relative">
  <div
    className="relative ml-96 inset-0 bg-cover"
    style={{
      backgroundImage: "url('https://vecros.com/static/media/athera_tilted_card_img.eaa2c54f76cfed53384f.png')",
      height: "100vh",
    }}
  >
    </div>
    {/* Overlay text container */}
    <div className="absolute inset-0 flex ml-40 flex-col text-left justify-center z-10"> {/* Add padding to left */}
      <div className="text-4xl gradient">
        <b>Ready to Deploy across <br />Construction, Logistics and Defence</b>
      </div>

      <div className='mt-10'>
        <TailwindcssButtons buttonText="CONTACT US" />
      </div>
    </div>
  </div>





      <div className='text-4xl mt-40 text-center gradient'>
          <b>Our Proud Users</b>
      </div>

  
    <AppleCardsCarouselDemo/>
    <FooterWithSocialLinks/>

    
    

    </>
  );
}

export default App;
