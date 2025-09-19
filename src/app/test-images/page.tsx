'use client';

import Image from 'next/image';

export default function TestImagesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Cover Art Test</h2>
          <Image
            src="/images/cover-art/pcg3-cover.png"
            alt="PCG3 Cover Art"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Gallery Image Test</h2>
          <Image
            src="/images/sections/civilisational-ontology-1.png"
            alt="Civilizational Ontology"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Regular img tag test</h2>
          <img
            src="/images/cover-art/pcg3-cover.png"
            alt="PCG3 Cover Art"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

