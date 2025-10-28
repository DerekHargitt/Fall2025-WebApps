import React, { useState } from "react";

export default function FunFact() {
  const [showFact, setShowFact] = useState(false);

  const toggleFact = () => {
    setShowFact(!showFact);
  };

  return (
    <section className="fun-fact">
      <button onClick={toggleFact}>Show Fun Fact</button>
      {showFact && (
        <p>
          Did you know? Every reused box at SecondWrap saves about
          <strong> 0.5 pounds of cardboard waste</strong> from landfills!
        </p>
      )}
    </section>
  );
}
