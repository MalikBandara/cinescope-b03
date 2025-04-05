import { Button } from "./ui/button";

import { Sun } from "lucide-react";


export  function ModeToggle() {
  return  <Button variant="ghost" size="icon" className="w-9 h-9"> 
    <Sun className="h-[1.2rem] w-[1.2rem]"/>
  </Button>;
}
