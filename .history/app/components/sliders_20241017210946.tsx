import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const CopyButton = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="outline" size="sm" onClick={handleCopy}>
      {copied ? 'Copied!' : <Copy className="h-4 w-4" />}
    </Button>
  );
};

const SliderComponent = ({ children, code }) => (
  <div className="space-y-2 p-4 border rounded-md">
    {children}
    <div className="mt-2 flex justify-end">
      <CopyButton code={code} />
    </div>
  </div>
);

export default function Sliders() {
  const [volume, setVolume] = useState(50);
  const [brightness, setBrightness] = useState(75);
  const [price, setPrice] = useState([20, 80]);
  const [rating, setRating] = useState(3);
  const [progress, setProgress] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [temperature, setTemperature] = useState(22);
  const [fontSize, setFontSize] = useState(16);
  const [opacity, setOpacity] = useState(100);
  const [duration, setDuration] = useState(60);

  return (
    <div className="space-y-8">
      <SliderComponent code={`<div className="space-y-2">
  <Label htmlFor="volume">Volume: {volume}%</Label>
  <Slider
    id="volume"
    min={0}
    max={100}
    step={1}
    value={[volume]}
    onValueChange={(value) => setVolume(value[0])}
  />
</div>`}>
        <div className="space-y-2">
          <Label htmlFor="volume">Volume: {volume}%</Label>
          <Slider
            id="volume"
            min={0}
            max={100}
            step={1}
            value={[volume]}
            onValueChange={(value) => setVolume(value[0])}
          />
        </div>
      </SliderComponent>

      <SliderComponent code={`<div className="space-y-2">
  <Label htmlFor="brightness">Brightness: {brightness}%</Label>
  <Slider
    id="brightness"
    min={0}
    max={100}
    step={5}
    value={[brightness]}
    onValueChange={(value) => setBrightness(value[0])}
  />
</div>`}>
        <div className="space-y-2">
          <Label htmlFor="brightness">Brightness: {brightness}%</Label>
          <Slider
            id="brightness"
            min={0}
            max={100}
            step={5}
            value={[brightness]}
            onValueChange={(value) => setBrightness(value[0])}
          />
        </div>
      </SliderComponent>

      <SliderComponent code={`<div className="space-y-2">
  <Label htmlFor="price">Price Range: ${price[0]} - ${price[1]}</Label>
  <Slider
    id="price"
    min={0}
    max={100}
    step={1}
    value={price}
    onValueChange={(value) => setPrice(value)}
  />
</div>`}>
        <div className="space-y-2">
          <Label htmlFor="price">Price Range: ${price[0]} - ${price[1]}</Label>
          <Slider
            id="price"
            min={0}
            max={100}
            step={1}
            value={price}
            onValueChange={(value) => setPrice(value)}
          />
        </div>
      </SliderComponent>

      <SliderComponent code={`<div className="space-y-2">
  <Label htmlFor="rating">Rating: {rating} stars</Label>
  <Slider
    id="rating"
    min={1}
    max={5}
    step={0.5}
    value={[rating]}
    onValueChange={(value) => setRating(value[0])}
  />
</div>`}>
        <div className="space-y-2">
          <Label htmlFor="rating">Rating: {rating} stars</Label>
          <Slider
            id="rating"
            min={1}
            max={5}
            step={0.5}
            value={[rating]}
            onValueChange={(value) => setRating(value[0])}
          />
        </div>
      </SliderComponent>

      <SliderComponent code={`<div className="space-y-2">
  <Label htmlFor="progress">Progress: {progress}%</Label>
  <Slider
    id="progress"
    min={0}
    max={100}
    step={10}
    value={[progress]}
    onValueChange={(value) => setProgress(value[0])}
  />
</div>`}>
        <div className="space-y-2">
          <Label htmlFor="progress">Progress: {progress}%</Label>
          <Slider
            id="progress"
            min={0}
            max={100}
            step={10}
            value={[progress]}
            onValueChange={(value) => setProgress(value[0])}
          />
        </div>
      </SliderComponent>

      <SliderComponent code={`<div className="space-y-2">
  <Label htmlFor="zoom">Zoom: {zoom}%</Label>
  <Slider
    id="zoom"
    min={50}
    max={200}
    step={10}
    value={[zoom]}
    onValueChange={(value) => setZoom(value[0])}
  />
</div>`}>
        <div className="space-y-2">
          <Label htmlFor="zoom">Zoom: {zoom}%</Label>
          <Slider
            id="zoom"
            min={50}
            max={200}
            step={10}
            value={[zoom]}
            onValueChange={(value) => setZoom(value[0])}
          />
        </div>
      </SliderComponent>

      <SliderComponent code={`<div className="space-y-2">
  <Label htmlFor="temperature">Temperature: {temperature}°C</Label>
  <Slider
    id="temperature"
    min={15}
    max={30}
    step={0.5}
    value={[temperature]}
    onValueChange={(value) => setTemperature(value[0])}
  />
</div>`}>
        <div className="space-y-2">
          <Label htmlFor="temperature">Temperature: {temperature}°C</Label>
          <Slider
            id="temperature"
            min={15}
            max={30}
            step={0.5}
            value={[temperature]}
            onValueChange={(value) => setTemperature(value[0])}
          />
        </div>
      </SliderComponent>

      <SliderComponent code={`<div className="space-y-2">
  <Label htmlFor="fontSize">Font Size: {fontSize}px</Label>
  <Slider
    id="fontSize"
    min={12}
    max={24}
    step={1}
    value={[fontSize]}
    onValueChange={(value) => setFontSize(value[0])}
  />
</div>`}>
        <div className="space-y-2">
          <Label htmlFor="fontSize">Font Size: {fontSize}px</Label>
          <Slider
            id="fontSize"
            min={12}
            max={24}
            step={1}
            value={[fontSize]}
            onValueChange={(value) => setFontSize(value[0])}
          />
        </div>
      </SliderComponent>

      <SliderComponent code={`<div className="space-y-2">
  <Label htmlFor="opacity">Opacity: {opacity}%</Label>
  <Slider
    id="opacity"
    min={0}
    max={100}
    step={5}
    value={[opacity]}
    onValueChange={(value) => setOpacity(value[0])}
  />
</div>`}>
        <div className="space-y-2">
          <Label htmlFor="opacity">Opacity: {opacity}%</Label>
          <Slider
            id="opacity"
            min={0}
            max={100}
            step={5}
            value={[opacity]}
            onValueChange={(value) => setOpacity(value[0])}
          />
        </div>
      </SliderComponent>

      <SliderComponent code={`<div className="space-y-2">
  <Label htmlFor="duration">Video Duration: {duration} seconds</Label>
  <Slider
    id="duration"
    min={0}
    max={300}
    step={15}
    value={[duration]}
    onValueChange={(value) => setDuration(value[0])}
  />
</div>`}>
        <div className="space-y-2">
          <Label htmlFor="duration">Video Duration: {duration} seconds</Label>
          <Slider
            id="duration"
            min={0}
            max={300}
            step={15}
            value={[duration]}
            onValueChange={(value) => setDuration(value[0])}
          />
        </div>
      </SliderComponent>
    </div>
  );
}