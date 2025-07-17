import { useState, useEffect } from "react";

interface TypingAnimationProps {
  phrases: string[];
  className?: string;
}

export default function TypingAnimation({ phrases, className = "" }: TypingAnimationProps) {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        setCurrentPhrase(fullPhrase.substring(0, currentPhrase.length - 1));
      } else {
        setCurrentPhrase(fullPhrase.substring(0, currentPhrase.length + 1));
      }

      if (!isDeleting && currentPhrase === fullPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentPhrase === "") {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [currentPhrase, phraseIndex, isDeleting, phrases]);

  return (
    <span className={className}>
      {currentPhrase}
      <span className="typing-cursor">|</span>
    </span>
  );
}
