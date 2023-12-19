import { useState } from "react";

export default function HeaderEffect(text: string) {
    const [typedText, setTypedText] = useState("");
    let index = 0;
    let isDeleting = false;
  
    function next() {
      const currentText = typedText.slice(0, index);
  
      if (isDeleting) {
        setTypedText(currentText.slice(0, -1));
        index--;
      } else {
        setTypedText(currentText);
        index++;
      }
  
      const typingSpeed = isDeleting ? 100 : 150;
      const deletionSpeed = 150;
  
      if (index > text.length) {
        isDeleting = true;
      } else if (index === 0) {
        isDeleting = false;
      }
  
      setTimeout(next, isDeleting ? deletionSpeed : typingSpeed);
    }
  
    next();
  
    return typedText;
  }