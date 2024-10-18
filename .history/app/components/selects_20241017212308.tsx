"use client"

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';

export default function Selects() {
  const [openCombobox, setOpenCombobox] = useState(false);
  const [comboboxValue, setComboboxValue] = useState("");
  const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ];

  return (
    <div className="space-y-12">
      {/* 1. Basic Select */}
      <div>
        <Label htmlFor="fruit">1. Basic Select</Label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 2. Radio Group */}
      <div>
        <Label>2. Radio Group</Label>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </div>

      {/* 3. Checkbox Group */}
      <div>
        <Label>3. Checkbox Group</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="privacy" />
            <Label htmlFor="privacy">Accept privacy policy</Label>
          </div>
        </div>
      </div>

      {/* 4. Toggle Switch */}
      <div>
        <Label htmlFor="airplane-mode">4. Toggle Switch</Label>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </div>

      {/* 5. Slider */}
      <div>
        <Label>5. Slider</Label>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>

      {/* 6. Multi-select Dropdown */}
      <div>
        <Label>6. Multi-select Dropdown</Label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select toppings" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cheese">Extra Cheese</SelectItem>
            <SelectItem value="pepperoni">Pepperoni</SelectItem>
            <SelectItem value="mushroom">Mushroom</SelectItem>
            <SelectItem value="onion">Onion</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 7. Segmented Control */}
      <div>
        <Label>7. Segmented Control</Label>
        <ToggleGroup type="single">
          <ToggleGroupItem value="list" aria-label="Toggle list view">
            List
          </ToggleGroupItem>
          <ToggleGroupItem value="grid" aria-label="Toggle grid view">
            Grid
          </ToggleGroupItem>
          <ToggleGroupItem value="columns" aria-label="Toggle columns view">
            Columns
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* 8. Combobox */}
      <div>
        <Label>8. Combobox</Label>
        <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openCombobox}
              className="w-[200px] justify-between"
            >
              {comboboxValue
                ? frameworks.find((framework) => framework.value === comboboxValue)?.label
                : "Select framework..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setComboboxValue(currentValue === comboboxValue ? "" : currentValue)
                      setOpenCombobox(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        comboboxValue === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* 9. Color Picker */}
      <div>
        <Label htmlFor="color">9. Color Picker</Label>
        <Input type="color" id="color" className="h-10 w-14 p-1" />
      </div>

      {/* 10. Date Picker */}
      <div>
        <Label htmlFor="date">10. Date Picker</Label>
        <Input type="date" id="date" />
      </div>
    </div>
  );
}