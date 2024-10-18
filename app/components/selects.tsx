import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function Selects() {
  return (
    <div className="space-y-8">
      <div>
        <Label htmlFor="fruit">Select a fruit</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Choose your favorite color</Label>
        <RadioGroup defaultValue="red">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="red" id="red" />
            <Label htmlFor="red">Red</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="blue" id="blue" />
            <Label htmlFor="blue">Blue</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="green" id="green" />
            <Label htmlFor="green">Green</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}