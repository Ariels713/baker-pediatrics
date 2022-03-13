import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    ${"" /* Color Pallete */}
      --color-primary:hsla(243, 9%, 9%, 1.00);
      --color-secondary:hsla(61, 100%, 100%, 1.00); 
      --color-paragraph: hsla(214, 17%, 64%, 1.00);
      --color-button:hsla(255, 83%, 65%, 1.00);
      --color-button-text: hsla(61, 100%, 100%, 1.00);
      --color-tertiary: hsla(156, 61%, 44%, 1.00);
      --color-stroke: hsla(0, 0%, 0%, 1.00);

    
    ${"" /* Shadows for cars */}
    --shadow-color: 0deg 0% 70%;
    --shadow-elevation-low:
      0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.23),
      0.9px 1.8px 2.6px -1.4px hsl(var(--shadow-color) / 0.4);
    --shadow-elevation-medium:
      0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.32),
      4.4px 8.9px 12.7px -1.4px hsl(var(--shadow-color) / 0.56);
    --shadow-elevation-high:
      0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.3),
      3.2px 6.5px 9.3px -0.5px hsl(var(--shadow-color) / 0.41),
      8.2px 16.5px 23.6px -1px hsl(var(--shadow-color) / 0.52),
      19.5px 39px 55.9px -1.4px hsl(var(--shadow-color) / 0.63);

      ${"" /* Form Styling Variables */}
      --form-group-spacer: 1.5rem;
      --form-field-width: 30ch;
      --form-text-color: var(--color-paragraph);
      --form-border-color: var(--color-secondary);
      --form-border-radius: 0.25rem;
      ${
        "" /* --form-outline-style: solid 2px ;
      --form-outline-color: var(--color-accent); */
      }
      --form-background: var(--color-primary);
  }

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/* 2. Remove default margin for common elements */
body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, ul, ol, dl, dt, dd {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%
}
/*
  4. Improve the typography across the site.
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  ${"" /* Modern CSS Reset */}
  text-rendering: optimizeSpeed;
  /* 🟣 Set base font-family */
  font-family: system-ui, sans-serif;
}
/* 5. Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}
/* 6. Inherit fonts for inputs and buttons */
input, button, textarea, select {
  font: inherit;
}
/*
  7. Create a root stacking context
*/
#__next {
  isolation: isolate;
  height:100%;
}

${"" /* Modern CSS Reset Start */}

:where(ul, ol):where([role="list"]) {
  margin: 0;
  padding: 0;
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}
a:not([class]) {
  /* 🟣 Relatively sized thickness and offset */
  text-decoration-thickness: max(0.08em, 1px);
  text-underline-offset: 0.15em;
}

img[width] {
  height: auto;
}

:target {
  scroll-margin-top: 2rem;
}

:focus {
  scroll-margin-bottom: 8vh;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}

${"" /* Utility Classes */}
 
 .layout-flex {
   --gap: 2rem;
  --wrap: wrap;

  display: flex;
  flex-wrap: var(--wrap);
  gap: var(--gap);

 }

.container {
  --container-width: 80ch;

width: min(var(--container-width), 100vw - 3rem);
margin-inline: auto;
}

${"" /* Grid Layout Utility Classes Start */}

.layout-grid {
  --gap: 1rem;
  display:grid;
  gap:var(--gap);
  

  &.columns{
    grid-auto-flow:column;
  }

  &.auto-fit{
    --min: 30ch;
    grid-template-columns:repeat(auto-fit, minmax(min(var(--min), 100%),1fr))
  }

  &.auto-fill {
    --min: 30ch;

    grid-template-columns: repeat(
      auto-fill,
      minmax(min(var(--min), 100%), 1fr)
    );
  }
  

  &.sidebar{
    --sidebar-max:20ch;
    --content-min: 50ch;
    grid-template-columns:fit-content(var(--sidebar-max))
    minmax(min(50vh, var(--content-min)), 1fr)
    ;
  }

  &.centered{
    place-content:center;
  }

  &.stack{
    grid-template-areas: "stack";
    place-items: center;

    & > * {
      grid-area: stack;
    }
  }
}
${"" /* Grid Layout Utility Classes Ends */}
  
${"" /* Typography Globals */}

${"" /* https://piccalil.li/tutorial/fluid-typography-with-css-clamp/*/}
.section, section {
  margin-block:8vh;
}

h1,
h2,
h3,
h4,
p {
  font-size: clamp(
    var(--fluid-type-min, 1rem),
    calc(1rem + var(--fluid-type-target, 3vw)),
    var(--fluid-type-max, 1.125rem)
  );
}

h1 {
  --fluid-type-min: 2.5rem;
  --fluid-type-max: 3rem;
  --fluid-type-target: 5vw;

  max-width: 15ch;
}

h2 {
  --fluid-type-min: 1.8rem;
  --fluid-type-max: 2.5rem;
}

h3 {
  --fluid-type-min: 1.5rem;
  --fluid-type-max: 2.0rem;
}

h4 {
  --fluid-type-min: 1.25rem;
  --fluid-type-max: 1.75rem;
}

h2,
h3,
h4 {
  max-width: 30ch;
}

p {
  max-width: 60ch;
}

:is(h1, h2, h3, h4, .h1, .h2, .h3, .h4) {
  line-height:calc(2px + 2ex + 2px);
  margin-block-end: 0.65em;
  overflow-wrap:break-word;
  hyphens:auto;
}

article, .content{
  --content-spacer:1em; 
  ${"" /* Adds margin top to every element but the last in the selector */}
  & > * + * {
    margin-block-start: var(--content-spacer);
  }

${"" /* Adds martin top to list items excepts first */}
  & > * + * :where(ul:not([class]), ol:not([class])) li + li{
    margin-block-start: var(--content-spacer);
  }

  ${"" /* Adds margin top to h2/h3 that are not after an h2 */}
   & > * + *   :where(h2, h3:not(h2 + *)):where(:not(:first-child)) {
    margin-block-start: 2em;
  }

  ${"" /* If a Paragraph follows a list, adds extra space */}
  & > * + *   :where(ul, ol) + p {
    margin-block-start: calc(var(--content-spacer) * 2);
  }

  & >  a:not([class]) {
    
    display: inline-block;
  }

${"" /* Basic block quote styling, remove if you're not using quotes */}
  blockquote {
    margin-block: 2em;
    padding: 0.5em 1.5em;
    border-inline-start: 2px solid var(--color-secondary);
    font-size: 1rem * $type-scale-ratio;
  }
}
 
hr {
  margin: 8vh 5vw;
  border-style: solid;
  border-color: var(--color-tertiary);
}

strong {
  font-weight: bold;
}

${"" /* End of typography styles */}


${"" /* Link Styles, Hover Styles, Focus Styles Start */}
a:not([class]) {
  color: var(--color-secondary);
}

:is(a, button, input, textarea) {
  --outline-size: max(2px, 0.08em);
  --outline-style: solid;
  --outline-color: currentColor;

  &:focus {
    outline: var(--outline-size) var(--outline-style) var(--outline-color);
    outline-offset: var(--outline-offset, var(--outline-size));
  }

  &:focus-visible {
    outline: var(--outline-size) var(--outline-style) var(--outline-color);
    outline-offset: var(--outline-offset, var(--outline-size));
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
}

${"" /* Link Styles, Hover Styles, Focus Styles End */}

${"" /* Hiding Span for Icon Buttons Start */}
.inclusively-hidden{
  position:absolute;
  width:1px;
  height:1px;
  white-space: nowrap;
  overflow:hidden;
  clip:rect(0 0 0 0);
  clip-path: inset(50%);
}
${"" /* Hiding Span for Icon Buttons End */}

${"" /* Global Card Settings start */}

.card{
  --card-gutter:1.5rem;
  background-color: var(--color-primary);
  box-shadow: var(--shadow-elevation-medium);
 
  ${"" /* Using Flex to layout button */}
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  gap: var(--card-gap, 1rem);
  border-radius:var(--card-radius, 0.25rem);

  ${"" /* Setting up border Radius for Images start */}
  > img:first-child {
    border-radius:var(--card-radius, 0.25rem) var(--card-radius, 0.25rem) 0 0 ;
  }
  > img:last-child {
    border-radius:0 0 var(--card-radius, 0.25rem) var(--card-radius, 0.25rem);
  }
  ${"" /* Setting up border Radius for Images end */}

  ${"" /* Anything but an image will get left/right margin */}
  > *:not(img){
    margin-inline: var(--card-gutter);
  }

  ${"" /* Anything but an image will get margin-top */}
  > :first-child:not(img){
    margin-block-start: var(--card-gutter);
  }

  ${"" /* Anything but an Image will get margin-bottom  */}
  > :last-child:not(img){
    margin-block-end: var(--card-gutter);
  }

${"" /* Overriding Typography classes start*/}
  > h3 {
    margin-block-start:0;
  }
  
  > :is(h1,h2,h3,h4) {
    margin-block-end: 0;

   & a{
     --outline-offset: 0.15em;
      text-decoration:none;

      &:hover {
        text-decoration:underline;
      }  
    }
  }

  > .layout-flex {
    --gap:1rem;
  }

  ${"" /* Overriding Typography classes ends*/}
  ${"" /* Making Card Clickable start */}

  ${"" /* Making Card Clickable start */}
}

${"" /* Global Card Settings ends*/}

`;

export default GlobalStyle;
