import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

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

const SelectComponent = ({ children, code }) => (
  <div className="space-y-2 p-4 border rounded-md">
    {children}
    <div className="mt-2 flex justify-end">
      <CopyButton code={code} />
    </div>
  </div>
);

export default function Selects() {
  return (
    <div className="space-y-8">
      <SelectComponent code={`<div>
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
</div>`}>
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
      </SelectComponent>

      <SelectComponent code={`<div>
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
</div>`}>
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
      </SelectComponent>

      <SelectComponent code={`<div>
  <Label htmlFor="country">Select a country</Label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select a country" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="usa">United States</SelectItem>
      <SelectItem value="canada">Canada</SelectItem>
      <SelectItem value="uk">United Kingdom</SelectItem>
      <SelectItem value="australia">Australia</SelectItem>
    </SelectContent>
  </Select>
</div>`}>
        <div>
          <Label htmlFor="country">Select a country</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usa">United States</SelectItem>
              <SelectItem value="canada">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="australia">Australia</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SelectComponent>

      <SelectComponent code={`<div>
  <Label>Choose your preferred language</Label>
  <RadioGroup defaultValue="english">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="english" id="english" />
      <Label htmlFor="english">English</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="spanish" id="spanish" />
      <Label htmlFor="spanish">Spanish</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="french" id="french" />
      <Label htmlFor="french">French</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="german" id="german" />
      <Label htmlFor="german">German</Label>
    </div>
  </RadioGroup>
</div>`}>
        <div>
          <Label>Choose your preferred language</Label>
          <RadioGroup defaultValue="english">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="english" id="english" />
              <Label htmlFor="english">English</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="spanish" id="spanish" />
              <Label htmlFor="spanish">Spanish</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="french" id="french" />
              <Label htmlFor="french">French</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="german" id="german" />
              <Label htmlFor="german">German</Label>
            </div>
          </RadioGroup>
        </div>
      </SelectComponent>

      <SelectComponent code={`<div>
  <Label htmlFor="size">Select a size</Label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select a size" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="small">Small</SelectItem>
      <SelectItem value="medium">Medium</SelectItem>
      <SelectItem value="large">Large</SelectItem>
      <SelectItem value="xlarge">Extra Large</SelectItem>
    </SelectContent>
  </Select>
</div>`}>
        <div>
          <Label htmlFor="size">Select a size</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
              <SelectItem value="xlarge">Extra Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SelectComponent>

      <SelectComponent code={`<div>
  <Label>Choose your preferred contact method</Label>
  <RadioGroup defaultValue="email">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="email" id="email" />
      <Label htmlFor="email">Email</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="phone" id="phone" />
      <Label htmlFor="phone">Phone</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="mail" id="mail" />
      <Label htmlFor="mail">Mail</Label>
    </div>
  </RadioGroup>
</div>`}>
        <div>
          <Label>Choose your preferred contact method</Label>
          <RadioGroup defaultValue="email">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="email" />
              <Label htmlFor="email">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="phone" id="phone" />
              <Label htmlFor="phone">Phone</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mail" id="mail" />
              <Label htmlFor="mail">Mail</Label>
            </div>
          </RadioGroup>
        </div>
      </SelectComponent>

      <SelectComponent code={`<div>
  <Label htmlFor="pet">Select a pet</Label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select a pet" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="dog">Dog</SelectItem>
      <SelectItem value="cat">Cat</SelectItem>
      <SelectItem value="bird">Bird</SelectItem>
      <SelectItem value="fish">Fish</SelectItem>
      <SelectItem value="rabbit">Rabbit</SelectItem>
    </SelectContent>
  </Select>
</div>`}>
        <div>
          <Label htmlFor="pet">Select a pet</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a pet" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dog">Dog</SelectItem>
              <SelectItem value="cat">Cat</SelectItem>
              <SelectItem value="bird">Bird</SelectItem>
              <SelectItem value="fish">Fish</SelectItem>
              <SelectItem value="rabbit">Rabbit</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SelectComponent>

      <SelectComponent code={`<div>
  <Label>Choose your employment status</Label>
  <RadioGroup defaultValue="full-time">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="full-time" id="full-time" />
      <Label htmlFor="full-time">Full-time</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="part-time" id="part-time" />
      <Label htmlFor="part-time">Part-time</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="freelance" id="freelance" />
      <Label htmlFor="freelance">Freelance</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="student" id="student" />
      <Label htmlFor="student">Student</Label>
    </div>
  </RadioGroup>
</div>`}>
        <div>
          <Label>Choose your employment status</Label>
          <RadioGroup defaultValue="full-time">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="full-time" id="full-time" />
              <Label htmlFor="full-time">Full-time</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="part-time" id="part-time" />
              <Label htmlFor="part-time">Part-time</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="freelance" id="freelance" />
              <Label htmlFor="freelance">Freelance</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="student" id="student" />
              <Label htmlFor="student">Student</Label>
            </div>
          </RadioGroup>
        </div>
      </SelectComponent>

      <SelectComponent code={`<div>
  <Label htmlFor="month">Select a month</Label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select a month" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="jan">January</SelectItem>
      <SelectItem value="feb">February</SelectItem>
      <SelectItem value="mar">March</SelectItem>
      <SelectItem value="apr">April</SelectItem>
      <SelectItem value="may">May</SelectItem>
      <SelectItem value="jun">June</SelectItem>
      <SelectItem value="jul">July</SelectItem>
      <SelectItem value="aug">August</SelectItem>
      <SelectItem value="sep">September</SelectItem>
      <SelectItem value="oct">October</SelectItem>
      <SelectItem value="nov">November</SelectItem>
      <SelectItem value="dec">December</SelectItem>
    </SelectContent>
  </Select>
</div>`}>
        <div>
          <Label htmlFor="month">Select a month</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jan">January</SelectItem>
              <SelectItem value="feb">February</SelectItem>
              <SelectItem value="mar">March</SelectItem>
              <SelectItem value="apr">April</SelectItem>
              <SelectItem value="may">May</SelectItem>
              <SelectItem value="jun">June</SelectItem>
              <SelectItem value="jul">July</SelectItem>
              <SelectItem value="aug">August</SelectItem>
              <SelectItem value="sep">September</SelectItem>
              <SelectItem value="oct">October</SelectItem>
              <SelectItem value="nov">November</SelectItem>
              <SelectItem value="dec">December</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SelectComponent>

      <SelectComponent code={`<div>
  <Label>Choose your preferred music genre</Label>
  <RadioGroup defaultValue="rock">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="rock" id="rock" />
      <Label htmlFor="rock">Rock</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="pop" id="pop" />
      <Label htmlFor="pop">Pop</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="jazz" id="jazz" />
      <Label htmlFor="jazz">Jazz</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="classical" id="classical" />
      <Label htmlFor="classical">Classical</Label>
    </div>
    <div className="flex items-center