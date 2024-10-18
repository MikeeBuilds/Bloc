import * as React from "react"
import { Button } from "@/components/ui/button"

export ButtonShowcase: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white">
        Gradient
      </Button>

      <Button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        Outline
      </Button>

      <Button className="bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90">
        Rounded
      </Button>

      <Button className="bg-accent text-accent-foreground shadow-lg hover:shadow-xl transition-shadow">
        Elevated
      </Button>

      <Button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 animate-pulse">
        Pulsing
      </Button>

      <Button className="bg-green-500 text-white hover:bg-green-600 transition-all hover:scale-105">
        Scale on Hover
      </Button>

      <Button className="bg-yellow-400 text-black font-bold hover:bg-yellow-500 border-b-4 border-yellow-700 hover:border-yellow-600 active:border-yellow-700">
        3D Effect
      </Button>

      <Button className="bg-pink-500 text-white hover:bg-pink-600 relative overflow-hidden group">
        <span className="relative z-10">Shine Effect</span>
        <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-full transition-transform duration-300 ease-out opacity-25"></span>
      </Button>

      <Button className="bg-indigo-600 text-white hover:bg-indigo-700 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        Icon Button
      </Button>

      <Button className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:from-teal-500 hover:via-teal-600 hover:to-teal-700 focus:ring-4 focus:ring-teal-300">
        Multi-Gradient
      </Button>
    </div>
  )
}

export default ButtonShowcase