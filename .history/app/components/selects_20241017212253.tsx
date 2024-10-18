"use client"

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown, Copy } from 'lucide-react';

const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="outline" size="icon" onClick={handleCopy}>
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  );
};

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
        <div className="flex items-center space-x-2">
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
          <CopyButton code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>`} />
        </div>
      </div>

      {/* 2. Multi-Select */}
      <div>
        <Label>2. Multi-Select</Label>
        <div className="flex items-center space-x-2">
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
          <CopyButton code={`<Select multiple>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select toppings" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="cheese">Extra Cheese</SelectItem>
    <SelectItem value="pepperoni">Pepperoni</SelectItem>
    <SelectItem value="mushroom">Mushroom</SelectItem>
    <SelectItem value="onion">Onion</SelectItem>
  </SelectContent>
</Select>`} />
        </div>
      </div>

      {/* 3. Searchable Select */}
      <div>
        <Label>3. Searchable Select</Label>
        <div className="flex items-center space-x-2">
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
          <CopyButton code={`<Popover open={openCombobox} onOpenChange={setOpenCombobox}>
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
</Popover>`} />
        </div>
      </div>

      {/* 4. Grouped Select */}
      <div>
        <Label>4. Grouped Select</Label>
        <div className="flex items-center space-x-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a pet" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="select">Select a pet...</SelectItem>
              <SelectItem value="dogs" disabled>Dogs</SelectItem>
              <SelectItem value="german_shepherd">German Shepherd</SelectItem>
              <SelectItem value="bulldog">Bulldog</SelectItem>
              <SelectItem value="poodle">Poodle</SelectItem>
              <SelectItem value="cats" disabled>Cats</SelectItem>
              <SelectItem value="siamese">Siamese</SelectItem>
              <SelectItem value="persian">Persian</SelectItem>
              <SelectItem value="maine_coon">Maine Coon</SelectItem>
            </SelectContent>
          </Select>
          <CopyButton code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a pet" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="select">Select a pet...</SelectItem>
    <SelectItem value="dogs" disabled>Dogs</SelectItem>
    <SelectItem value="german_shepherd">German Shepherd</SelectItem>
    <SelectItem value="bulldog">Bulldog</SelectItem>
    <SelectItem value="poodle">Poodle</SelectItem>
    <SelectItem value="cats" disabled>Cats</SelectItem>
    <SelectItem value="siamese">Siamese</SelectItem>
    <SelectItem value="persian">Persian</SelectItem>
    <SelectItem value="maine_coon">Maine Coon</SelectItem>
  </SelectContent>
</Select>`} />
        </div>
      </div>

      {/* 5. Creatable Select */}
      <div>
        <Label>5. Creatable Select</Label>
        <div className="flex items-center space-x-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select or create a tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
              <SelectItem value="angular">Angular</SelectItem>
              <SelectItem value="create">+ Create new tag</SelectItem>
            </SelectContent>
          </Select>
          <CopyButton code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select or create a tag" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="react">React</SelectItem>
    <SelectItem value="vue">Vue</SelectItem>
    <SelectItem value="angular">Angular</SelectItem>
    <SelectItem value="create">+ Create new tag</SelectItem>
  </SelectContent>
</Select>`} />
        </div>
      </div>

      {/* 6. Async Select */}
      <div>
        <Label>6. Async Select</Label>
        <div className="flex items-center space-x-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a user" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="loading">Loading...</SelectItem>
            </SelectContent>
          </Select>
          <CopyButton code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a user" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="loading">Loading...</SelectItem>
  </SelectContent>
</Select>`} />
        </div>
      </div>

      {/* 7. Customizable Select with Icons */}
      <div>
        <Label>7. Customizable Select with Icons</Label>
        <div className="flex items-center space-x-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">🇺🇸 United States</SelectItem>
              <SelectItem value="ca">🇨🇦 Canada</SelectItem>
              <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
              <SelectItem value="au">🇦🇺 Australia</SelectItem>
            </SelectContent>
          </Select>
          <CopyButton code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a country" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="us">🇺🇸 United States</SelectItem>
    <SelectItem value="ca">🇨🇦 Canada</SelectItem>
    <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
    <SelectItem value="au">🇦🇺 Australia</SelectItem>
  </SelectContent>
</Select>`} />
        </div>
      </div>

      {/* 8. Dropdown with Submenu */}
      <div>
        <Label>8. Dropdown with Submenu</Label>
        <div className="flex items-center space-x-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="computers" className="pl-4">- Computers</SelectItem>
              <SelectItem value="smartphones" className="pl-4">- Smartphones</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="mens" className="pl-4">- Men's</SelectItem>
              <SelectItem value="womens" className="pl-4">- Women's</SelectItem>
            </SelectContent>
          </Select>
          <CopyButton code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a category" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="electronics">Electronics</SelectItem>
    <SelectItem value="computers" className="pl-4">- Computers</SelectItem>
    <SelectItem value="smartphones" className="pl-4">- Smartphones</SelectItem>
    <SelectItem value="clothing">Clothing</SelectItem>
    <SelectItem value="mens" className="pl-4">- Men's</SelectItem>
    <SelectItem value="womens" className="pl-4">- Women's</SelectItem>
  </SelectContent>
</Select>`} />
        </div>
      </div>

      {/* 9. Radio Select */}
      <div>
        <Label>9. Radio Select</Label>
        <div className="flex items-center space-x-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">⚪ Option 1</SelectItem>
              <SelectItem value="option2">⚪ Option 2</SelectItem>
              <SelectItem value="option3">⚪ Option 3</SelectItem>
            </SelectContent>
          </Select>
          <CopyButton code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">⚪ Option 1</SelectItem>
    <SelectItem value="option2">⚪ Option 2</SelectItem>
    <SelectItem value="option3">⚪ Option 3</SelectItem>
  </SelectContent>
</Select>`} />
        </div>
      </div>

      {/* 10. Select with Previews */}
      <div>
        <Label>10. Select with Previews</Label>
        <div className="flex items-center space-x-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-gray-200 mr-2"></div>
                  Light Theme
                </div>
              </SelectItem>
              <SelectItem value="dark">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-gray-800 mr-2"></div>
                  Dark Theme
                </div>
              </SelectItem>
              <SelectItem value="system">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-200 to-gray-800 mr-2"></div>
                  System Theme
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <CopyButton code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full bg-gray-200 mr-2"></div>
        Light Theme
      </div>
    </SelectItem>
    <SelectItem value="dark">
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full bg-gray-800 mr-2"></div>
        Dark Theme
      </div>
    </SelectItem>
    <SelectItem value="system">
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-200 to-gray-800 mr-2"></div>
        System Theme
      </div>
    </SelectItem>
  </SelectContent>
</Select>`} />
        </div>
      </div>
    </div>
  );
}