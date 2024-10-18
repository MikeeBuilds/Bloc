import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
      {copied ? "Copied!" : <Copy className="h-4 w-4" />}
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
      <SelectComponent
        code={`<div>
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
</div>`}
      >
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

      <SelectComponent
        code={`<div>
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
</div>`}
      >
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

      <SelectComponent
        code={`<div>
  <Label htmlFor="size">Choose a size</Label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select a size" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="small">Small</SelectItem>
      <SelectItem value="medium">Medium</SelectItem>
      <SelectItem value="large">Large</SelectItem>
    </SelectContent>
  </Select>
</div>`}
      >
        <div>
          <Label htmlFor="size">Choose a size</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SelectComponent>

      <SelectComponent
        code={`<div>
  <Label>Select your preferred contact method</Label>
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
</div>`}
      >
        <div>
          <Label>Select your preferred contact method</Label>
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

      <SelectComponent
        code={`<div>
  <Label htmlFor="country">Select your country</Label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select a country" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="uk">United Kingdom</SelectItem>
      <SelectItem value="ca">Canada</SelectItem>
      <SelectItem value="au">Australia</SelectItem>
    </SelectContent>
  </Select>
</div>`}
      >
        <div>
          <Label htmlFor="country">Select your country</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SelectComponent>

      <SelectComponent
        code={`<div>
  <Label>Choose your preferred payment method</Label>
  <RadioGroup defaultValue="credit">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="credit" id="credit" />
      <Label htmlFor="credit">Credit Card</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="debit" id="debit" />
      <Label htmlFor="debit">Debit Card</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="paypal" id="paypal" />
      <Label htmlFor="paypal">PayPal</Label>
    </div>
  </RadioGroup>
</div>`}
      >
        <div>
          <Label>Choose your preferred payment method</Label>
          <RadioGroup defaultValue="credit">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="credit" id="credit" />
              <Label htmlFor="credit">Credit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="debit" id="debit" />
              <Label htmlFor="debit">Debit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal">PayPal</Label>
            </div>
          </RadioGroup>
        </div>
      </SelectComponent>

      <SelectComponent
        code={`<div>
  <Label htmlFor="language">Select your preferred language</Label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select a language" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="en">English</SelectItem>
      <SelectItem value="es">Spanish</SelectItem>
      <SelectItem value="fr">French</SelectItem>
      <SelectItem value="de">German</SelectItem>
    </SelectContent>
  </Select>
</div>`}
      >
        <div>
          <Label htmlFor="language">Select your preferred language</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SelectComponent>

      <SelectComponent
        code={`<div>
  <Label>Select your gender</Label>
  <RadioGroup defaultValue="male">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="male" id="male" />
      <Label htmlFor="male">Male</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="female" id="female" />
      <Label htmlFor="female">Female</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="other" id="other" />
      <Label htmlFor="other">Other</Label>
    </div>
  </RadioGroup>
</div>`}
      >
        <div>
          <Label>Select your gender</Label>
          <RadioGroup defaultValue="male">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>
        </div>
      </SelectComponent>

      <SelectComponent
        code={`<div>
  <Label htmlFor="experience">Years of experience</Label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select years of experience" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="0-1">0-1 years</SelectItem>
      <SelectItem value="1-3">1-3 years</SelectItem>
      <SelectItem value="3-5">3-5 years</SelectItem>
      <SelectItem value="5+">5+ years</SelectItem>
    </SelectContent>
  </Select>
</div>`}
      >
        <div>
          <Label htmlFor="experience">Years of experience</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select years of experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1">0-1 years</SelectItem>
              <SelectItem value="1-3">1-3 years</SelectItem>
              <SelectItem value="3-5">3-5 years</SelectItem>
              <SelectItem value="5+">5+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SelectComponent>

      <SelectComponent
        code={`<div>
  <Label>How did you hear about us?</Label>
  <RadioGroup defaultValue="search">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="search" id="search" />
      <Label htmlFor="search">Search Engine</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="social" id="social" />
      <Label htmlFor="social">Social Media</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="friend" id="friend" />
      <Label htmlFor="friend">Friend Referral</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="other" id="other-source" />
      <Label htmlFor="other-source">Other</Label>
    </div>
  </RadioGroup>
</div>`}
      >
        <div>
          <Label>How did you hear about us?</Label>
          <RadioGroup defaultValue="search">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="search" id="search" />
              <Label htmlFor="search">Search Engine</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="social" id="social" />
              <Label htmlFor="social">Social Media</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="friend" id="friend" />
              <Label htmlFor="friend">Friend Referral</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other-source" />
              <Label htmlFor="other-source">Other</Label>
            </div>
          </RadioGroup>
        </div>
      </SelectComponent>
    </div>
  );
}
