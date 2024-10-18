import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export default function Sliders() {
  return (
    <div className="space-y-8">
      <div>
        <Label htmlFor="volume">Volume</Label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
    </div>
  );
}