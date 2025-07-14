import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const AccessibilityButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [highContrast]);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-16 h-16"
      >
        <img
          src="/accessibility-icon.svg"
          alt="Accessibility"
          className="w-8 h-8"
        />
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Accessibility Options</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <span>Font Size</span>
              <div className="flex items-center space-x-2">
                <Button onClick={() => setFontSize(fontSize - 1)}>-</Button>
                <span>{fontSize}px</span>
                <Button onClick={() => setFontSize(fontSize + 1)}>+</Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>High Contrast</span>
              <Button onClick={() => setHighContrast(!highContrast)}>
                {highContrast ? "Disable" : "Enable"}
              </Button>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AccessibilityButton;
