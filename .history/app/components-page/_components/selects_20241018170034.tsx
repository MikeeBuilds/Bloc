"use client";

import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import CopyButton from '@/components/copy-button';

interface SelectComponentProps {
  children: React.ReactNode;
  code: string;
  title: string;
}

const SelectComponent: React.FC<SelectComponentProps> = ({ children, code, title }) => (
  <div className="space-y-2 p-4 border rounded-md bg-background">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    {children}
    <CopyButton code={code} language="tsx" />
  </div>
);

export default function Selects() {
  return (
    <div className="grid grid-cols-2 gap-8 p-8 bg-grid">
      <SelectComponent 
        title="Fruit Select"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function FruitSelect() {
  return (
    <div className="space-y-2">
      <Label htmlFor="fruit">Select a fruit</Label>
      <Select>
        <SelectTrigger id="fruit">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="fruit">Select a fruit</Label>
          <Select>
            <SelectTrigger id="fruit">
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
        title="Color Radio Group"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ColorRadioGroup() {
  return (
    <div className="space-y-2">
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
  );
}`}>
        <div className="space-y-2">
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
        title="Country Select"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CountrySelect() {
  return (
    <div className="space-y-2">
      <Label htmlFor="country">Select a country</Label>
      <Select>
        <SelectTrigger id="country">
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
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="country">Select a country</Label>
          <Select>
            <SelectTrigger id="country">
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
        title="Size Radio Group"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function SizeRadioGroup() {
  return (
    <div className="space-y-2">
      <Label>Choose your size</Label>
      <RadioGroup defaultValue="m">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="s" id="s" />
          <Label htmlFor="s">Small</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="m" id="m" />
          <Label htmlFor="m">Medium</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="l" id="l" />
          <Label htmlFor="l">Large</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="xl" id="xl" />
          <Label htmlFor="xl">Extra Large</Label>
        </div>
      </RadioGroup>
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label>Choose your size</Label>
          <RadioGroup defaultValue="m">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="s" id="s" />
              <Label htmlFor="s">Small</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="m" id="m" />
              <Label htmlFor="m">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="l" id="l" />
              <Label htmlFor="l">Large</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="xl" id="xl" />
              <Label htmlFor="xl">Extra Large</Label>
            </div>
          </RadioGroup>
        </div>
      </SelectComponent>

      <SelectComponent 
        title="Language Select"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function LanguageSelect() {
  return (
    <div className="space-y-2">
      <Label htmlFor="language">Select a language</Label>
      <Select>
        <SelectTrigger id="language">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="es">Spanish</SelectItem>
          <SelectItem value="fr">French</SelectItem>
          <SelectItem value="de">German</SelectItem>
          <SelectItem value="it">Italian</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="language">Select a language</Label>
          <Select>
            <SelectTrigger id="language">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
              <SelectItem value="it">Italian</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SelectComponent>

      <SelectComponent 
        title="Payment Method Radio Group"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function PaymentMethodRadioGroup() {
  return (
    <div className="space-y-2">
      <Label>Choose your payment method</Label>
      <RadioGroup defaultValue="card">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="card" id="card" />
          <Label htmlFor="card">Credit Card</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="paypal" id="paypal" />
          <Label htmlFor="paypal">PayPal</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="bank" id="bank" />
          <Label htmlFor="bank">Bank Transfer</Label>
        </div>
      </RadioGroup>
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label>Choose your payment method</Label>
          <RadioGroup defaultValue="card">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Credit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal">PayPal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bank" id="bank" />
              <Label htmlFor="bank">Bank Transfer</Label>
            </div>
          </RadioGroup>
        </div>
      </SelectComponent>

      <SelectComponent 
        title="Category Select"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CategorySelect() {
  return (
    <div className="space-y-2">
      <Label htmlFor="category">Select a category</Label>
      <Select>
        <SelectTrigger id="category">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="electronics">Electronics</SelectItem>
          <SelectItem value="clothing">Clothing</SelectItem>
          <SelectItem value="books">Books</SelectItem>
          <SelectItem value="home">Home & Garden</SelectItem>
          <SelectItem value="toys">Toys & Games</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="category">Select a category</Label>
          <Select>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="books">Books</SelectItem>
              <SelectItem value="home">Home & Garden</SelectItem>
              <SelectItem value="toys">Toys & Games</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SelectComponent>

      <SelectComponent 
        title="Subscription Plan Radio Group"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function SubscriptionPlanRadioGroup() {
  return (
    <div className="space-y-2">
      <Label>Choose your subscription plan</Label>
      <RadioGroup defaultValue="basic">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="basic" id="basic" />
          <Label htmlFor="basic">Basic</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="pro" id="pro" />
          <Label htmlFor="pro">Pro</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="enterprise" id="enterprise" />
          <Label htmlFor="enterprise">Enterprise</Label>
        </div>
      </RadioGroup>
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label>Choose your subscription plan</Label>
          <RadioGroup defaultValue="basic">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="basic" id="basic" />
              <Label htmlFor="basic">Basic</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pro" id="pro" />
              <Label htmlFor="pro">Pro</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="enterprise" id="enterprise" />
              <Label htmlFor="enterprise">Enterprise</Label>
            </div>
          </RadioGroup>
        </div>
      </SelectComponent>

      <SelectComponent 
        title="Time Zone Select"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function TimeZoneSelect() {
  return (
    <div className="space-y-2">
      <Label htmlFor="timezone">Select a time zone</Label>
      <Select>
        <SelectTrigger id="timezone">
          <SelectValue placeholder="Select a time zone" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="timezone">Select a time zone</Label>
          <Select>
            <SelectTrigger id="timezone">
              <SelectValue placeholder="Select a time zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
              <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
              <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
              <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SelectComponent>

      <SelectComponent 
        title="Experience Level Radio Group"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ExperienceLevelRadioGroup() {
  return (
    <div className="space-y-2">
      <Label>Select your experience level</Label>
      <RadioGroup defaultValue="intermediate">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="beginner" id="beginner" />
          <Label htmlFor="beginner">Beginner</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="intermediate" id="intermediate" />
          <Label htmlFor="intermediate">Intermediate</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="advanced" id="advanced" />
          <Label htmlFor="advanced">Advanced</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="expert" id="expert" />
          <Label htmlFor="expert">Expert</Label>
        </div>
      </RadioGroup>
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label>Select your experience level</Label>
          <RadioGroup defaultValue="intermediate">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="beginner" id="beginner" />
              <Label htmlFor="beginner">Beginner</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="intermediate" id="intermediate" />
              <Label htmlFor="intermediate">Intermediate</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="advanced" id="advanced" />
              <Label htmlFor="advanced">Advanced</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="expert" id="expert" />
              <Label htmlFor="expert">Expert</Label>
            </div>
          </RadioGroup>
        </div>
      </SelectComponent>
    </div>
  );
}