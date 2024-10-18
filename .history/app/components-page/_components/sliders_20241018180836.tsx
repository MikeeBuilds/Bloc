import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import CopyButton from '@/components/copy-button';

interface SliderComponentProps {
  children: React.ReactNode;
  code: string;
  title: string;
}

const SliderComponent: React.FC<SliderComponentProps> = ({ children, code, title }) => (
  <div className="space-y-2 p-4 border rounded-md bg-background">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    {children}
    <CopyButton code={code} language="tsx" />
  </div>
);

export default function Sliders() {
  const [temperature, setTemperature] = useState(20);
  const [brightness, setBrightness] = useState(50);
  const [price, setPrice] = useState([20, 80]);
  const [zoom, setZoom] = useState(100);

  return (
    <div className="grid grid-cols-2 gap-8 p-8 bg-grid">
      <SliderComponent 
        title="Basic Volume Slider"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function VolumeSlider() {
  return (
    <div className="space-y-2">
      <Label htmlFor="volume" className="text-sm font-medium text-foreground">Volume</Label>
      <Slider id="volume" defaultValue={[50]} max={100} step={1} />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="volume" className="text-sm font-medium text-foreground">Volume</Label>
          <Slider id="volume" defaultValue={[50]} max={100} step={1} />
        </div>
      </SliderComponent>

      <SliderComponent 
        title="Temperature Slider with Live Update"
        code={`import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function TemperatureSlider() {
  const [temperature, setTemperature] = useState(20);

  return (
    <div className="space-y-2">
      <Label htmlFor="temperature" className="text-sm font-medium text-foreground">
        Temperature (°C): {temperature}
      </Label>
      <Slider 
        id="temperature"
        value={[temperature]} 
        max={40} 
        min={-10} 
        step={0.5} 
        onValueChange={(value) => setTemperature(value[0])}
      />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="temperature" className="text-sm font-medium text-foreground">
            Temperature (°C): {temperature}
          </Label>
          <Slider 
            id="temperature"
            value={[temperature]} 
            max={40} 
            min={-10} 
            step={0.5} 
            onValueChange={(value) => setTemperature(value[0])}
          />
        </div>
      </SliderComponent>

      <SliderComponent 
        title="Brightness Slider with Custom Styling"
        code={`import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function BrightnessSlider() {
  const [brightness, setBrightness] = useState(50);

  return (
    <div className="space-y-2">
      <Label htmlFor="brightness" className="text-sm font-medium text-foreground">Brightness</Label>
      <Slider 
        id="brightness"
        value={[brightness]} 
        max={100} 
        onValueChange={(value) => setBrightness(value[0])}
        className="h-4 bg-yellow-200"
      />
      <div 
        className="mt-2 p-4 bg-white" 
        style={{ filter: \`brightness(\${brightness}%)\` }}
      >
        Sample Text
      </div>
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="brightness" className="text-sm font-medium text-foreground">Brightness</Label>
          <Slider 
            id="brightness"
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
      </SliderComponent>

      <SliderComponent 
        title="Price Range Slider"
        code={`import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function PriceRangeSlider() {
  const [price, setPrice] = useState([20, 80]);

  return (
    <div className="space-y-2">
      <Label htmlFor="price" className="text-sm font-medium text-foreground">
        Price Range: ${price[0]} - ${price[1]}
      </Label>
      <Slider 
        id="price"
        value={price} 
        max={100} 
        step={1} 
        onValueChange={setPrice}
      />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="price" className="text-sm font-medium text-foreground">
            Price Range: ${price[0]} - ${price[1]}
          </Label>
          <Slider 
            id="price"
            value={price} 
            max={100} 
            step={1} 
            onValueChange={setPrice}
          />
        </div>
      </SliderComponent>

      <SliderComponent 
        title="Color Picker Slider"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function ColorPickerSlider() {
  return (
    <div className="space-y-2">
      <Label htmlFor="color" className="text-sm font-medium text-foreground">Color Picker</Label>
      <div className="flex space-x-4">
        {['red', 'green', 'blue'].map((color) => (
          <Slider 
            key={color} 
            defaultValue={[128]} 
            max={255} 
            step={1}
            orientation="vertical"
            className={\`h-32 w-4 bg-\${color}-200\`}
          />
        ))}
      </div>
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="color" className="text-sm font-medium text-foreground">Color Picker</Label>
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
      </SliderComponent>

      <SliderComponent 
        title="Zoom Level Slider with Reset"
        code={`import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export default function ZoomSlider() {
  const [zoom, setZoom] = useState(100);

  return (
    <div className="space-y-2">
      <Label htmlFor="zoom" className="text-sm font-medium text-foreground">Zoom Level: {zoom}%</Label>
      <div className="flex items-center space-x-4">
        <Slider 
          id="zoom"
          value={[zoom]} 
          min={50}
          max={200} 
          step={10}
          onValueChange={(value) => setZoom(value[0])}
          className="w-48"
        />
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setZoom(100)}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="zoom" className="text-sm font-medium text-foreground">Zoom Level: {zoom}%</Label>
          <div className="flex items-center space-x-4">
            <Slider 
              id="zoom"
              value={[zoom]} 
              min={50}
              max={200} 
              step={10}
              onValueChange={(value) => setZoom(value[0])}
              className="w-48"
            />
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setZoom(100)}
            >
              Reset
            </Button>
          </div>
        </div>
      </SliderComponent>
    </div>
  );
}