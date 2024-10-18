import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

export default function Sliders() {
  const [temperature, setTemperature] = useState(20);
  const [brightness, setBrightness] = useState(50);
  const [price, setPrice] = useState([20, 80]);

  return (
    <div className="space-y-12">
      {/* 1. Basic Volume Slider */}
      <div>
        <Label htmlFor="volume">Volume</Label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>

      {/* 2. Temperature Slider with Live Update */}
      <div>
        <Label htmlFor="temperature">Temperature (°C): {temperature}</Label>
        <Slider 
          value={[temperature]} 
          max={40} 
          min={-10} 
          step={0.5} 
          onValueChange={(value) => setTemperature(value[0])}
        />
      </div>

      {/* 3. Brightness Slider with Custom Styling */}
      <div>
        <Label htmlFor="brightness">Brightness</Label>
        <Slider 
          value={[brightness]} 
          max={100} 
          onValueChange={(value) => setBrightness(value[0])}
          className="h-4 bg-yellow-200"
        />
        <div 
          className="mt-2 p-4 bg-white" 
          style={{ filter: `brightness(${brightness}%)` }}
        >
          Sample Text
        </div>
      </div>

      {/* 4. Price Range Slider */}
      <div>
        <Label htmlFor="price">Price Range: ${price[0]} - ${price[1]}</Label>
        <Slider 
          value={price} 
          max={100} 
          step={1} 
          onValueChange={setPrice}
        />
      </div>

      {/* 5. Color Picker Slider */}
      <div>
        <Label htmlFor="color">Color Picker</Label>
        <div className="flex space-x-4">
          {['red', 'green', 'blue'].map((color) => (
            <Slider 
              key={color} 
              defaultValue={[128]} 
              max={255} 
              step={1}
              orientation="vertical"
              className={`h-32 w-4 bg-${color}-200`}
            />
          ))}
        </div>
      </div>

      {/* 6. Font Size Slider */}
      <div>
        <Label htmlFor="fontSize">Font Size</Label>
        <Slider defaultValue={[16]} min={8} max={32} step={1} />
      </div>

      {/* 7. Progress Bar Slider */}
      <div>
        <Label htmlFor="progress">Progress</Label>
        <Slider 
          defaultValue={[0]} 
          max={100} 
          step={1}
          className="h-2 bg-blue-200"
        />
      </div>

      {/* 8. Rating Slider */}
      <div>
        <Label htmlFor="rating">Rating</Label>
        <Slider 
          defaultValue={[3]} 
          max={5} 
          step={0.5}
          className="w-48"
        />
      </div>

      {/* 9. Time Picker Slider */}
      <div>
        <Label htmlFor="time">Time Picker</Label>
        <Slider 
          defaultValue={[720]} 
          min={0}
          max={1440} 
          step={15}
          className="w-64"
        />
      </div>

      {/* 10. Zoom Level Slider with Reset */}
      <div>
        <Label htmlFor="zoom">Zoom Level</Label>
        <div className="flex items-center space-x-4">
          <Slider 
            defaultValue={[100]} 
            min={50}
            max={200} 
            step={10}
            className="w-48"
          />
          <Button variant="outline" size="sm">Reset</Button>
        </div>
      </div>
    </div>
  );
}