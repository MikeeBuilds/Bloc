"use client"

import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ComponentsLayout from './layout';

const Inputs = dynamic(() => import('./_components/inputs'), { suspense: true });
const Selects = dynamic(() => import('./_components/selects'), { suspense: true });
const Toggles = dynamic(() => import('./_components/toggles'), { suspense: true });
const Sliders = dynamic(() => import('./_components/sliders'), { suspense: true });


export default function ComponentsPage() {
  const [selectedTab, setSelectedTab] = useState('inputs');

  const renderContent = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <TabsContent value="inputs"><Inputs /></TabsContent>
        <TabsContent value="selects"><Selects /></TabsContent>
        <TabsContent value="toggles"><Toggles /></TabsContent>
        <TabsContent value="sliders"><Sliders /></TabsContent>
      </Suspense>
    );
  };

  return (
    <ComponentsLayout>
      <h1 className="text-3xl font-bold mb-8">Component Showcase</h1>
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="inputs">Inputs</TabsTrigger>
          <TabsTrigger value="selects">Selects</TabsTrigger>
          <TabsTrigger value="toggles">Toggles</TabsTrigger>
          <TabsTrigger value="sliders">Sliders</TabsTrigger>
        </TabsList>
        <Card>
          <CardHeader>
            <CardTitle>{selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}</CardTitle>
            <CardDescription>Explore our collection of {selectedTab} components.</CardDescription>
          </CardHeader>
          <CardContent>
            {renderContent()}
          </CardContent>
        </Card>
      </Tabs>
    </ComponentsLayout>
  );
}