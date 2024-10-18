"use client"

import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ComponentsLayout from './layout';

const Inputs = dynamic(() => import('./inputs'), { 
  loading: () => <div>Loading Inputs...</div>,
  ssr: false 
});
const Selects = dynamic(() => import('./selects'), { 
  loading: () => <div>Loading Selects...</div>,
  ssr: false 
});
const Toggles = dynamic(() => import('./toggles'), { 
  loading: () => <div>Loading Toggles...</div>,
  ssr: false 
});
const Sliders = dynamic(() => import('./sliders'), { 
  loading: () => <div>Loading Sliders...</div>,
  ssr: false 
});

const tabs = [
  { value: 'inputs', label: 'Inputs', component: Inputs },
  { value: 'selects', label: 'Selects', component: Selects },
  { value: 'toggles', label: 'Toggles', component: Toggles },
  { value: 'sliders', label: 'Sliders', component: Sliders },
];

export default function ComponentsPage() {
  const [selectedTab, setSelectedTab] = useState('inputs');

  const renderContent = () => {
    const TabComponent = tabs.find(tab => tab.value === selectedTab)?.component;
    return TabComponent ? <TabComponent /> : null;
  };

  return (
    <ComponentsLayout>
      <h1 className="text-3xl font-bold mb-8">Component Showcase</h1>
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="mb-8">
          {tabs.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <Card>
          <CardHeader>
            <CardTitle>{selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}</CardTitle>
            <CardDescription>Explore our collection of {selectedTab} components.</CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>Loading...</div>}>
              {renderContent()}
            </Suspense>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </Tabs>
    </ComponentsLayout>
  );
}