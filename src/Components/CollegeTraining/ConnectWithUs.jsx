
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const ConnectWithUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <style>
    {`
      :root {
  --color-text: #ffffff;
  --color-neon: #FFC80E;
  --color-black: #01224F; /* Define black color */
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  display: grid;
  place-items: center;
  padding: 10px 20px 50px; /* Increased top padding */
  opacity: 0; /* Initially hidden */
  transition: opacity 0.5s ease-in-out; /* Smooth transition */
}

.neon-link-button {
  font-size: 1.5rem; /* Default larger font size */
  border: 0.05em solid var(--color-text); /* Thinner border */
  color: var(--color-black); /* Set text color to black */
  display: inline-block;
  cursor: pointer;
  border-radius: 0.25em;
  text-decoration: none;
  box-shadow: 0 0 0.5em 0 var(--color-neon),
    inset 0 0 0.5em 0 var(--color-neon),
    0 0 0.1em 0.05em var(--color-text),
    inset 0 0 0.1em 0.05em var(--color-text);
  text-shadow: 0 0 0.5em var(--color-neon), 0 0 0.1em var(--color-text);
  background: var(--color-neon); /* Solid yellow background */
  padding: 0.25em 1em; /* Default padding */
  position: relative;
  margin-top: 20px; /* Added margin for space above */
}

/* Add Fade-In effect */
.fade-in {
  opacity: 1;
  transition: opacity 0.8s ease-in-out;
}

.neon-link-button::before,
.neon-link-button::after {
  content: "";
  position: absolute;
  transition: opacity 50ms linear;
}

.neon-link-button::before {
  top: 120%;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-neon);
  transform: perspective(1em) rotateX(45deg) scale(1, 0.35);
  filter: blur(1em);
  opacity: 0.5;
  pointer-events: none;
}

.neon-link-button::after {
  top: -0.1em;
  right: -0.1em;
  bottom: -0.1em;
  left: -0.1em;
  border-radius: 0.25em;
  border: 0.1em solid var(--color-text);
  box-shadow: 0 0 2em 0.5em var(--color-neon), inset 0 0 1em 0 var(--color-neon);
  opacity: 0;
}

.neon-link-button:focus {
  outline: none;
}

.neon-link-button:hover::before,
.neon-link-button:focus::before,
.neon-link-button:hover::after,
.neon-link-button:focus::after {
  opacity: 1;
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .neon-link-button {
    font-size: 1.3rem; /* Slightly larger font size */
    padding: 0.2em 0.9em; /* Slightly larger padding */
    margin-top: 18px; /* Adjusted margin */
  }
}

@media (max-width: 480px) {
  .neon-link-button {
    font-size: 1.3rem; /* Slightly larger font size */
    padding: 0.15em 0.75em; /* Slightly larger padding */
    margin-top: 12px; /* Slightly reduced margin */
  }
}
`}
    </style>

    <div
      ref={ref}
      className={`app-container roboto-regular ${inView ? 'fade-in' : ''}`}
    >
      <Link 
        to="/contact" 
        className="neon-link-button" 
        aria-label="Contact Us"
        onClick={handleScrollToTop} // Scroll to top on click
      >
        Cont<span>a</span>ct Us
      </Link>
    </div>
    </>
  );
};

export default ConnectWithUs;
