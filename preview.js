/**
 * Inserts a floating preview button that opens a URL in a new tab.
 * @param {string} url - The URL to open when the button is clicked.
 */
export function InsertPreview(url) {
  // Create the button element
  const button = document.createElement('button');
  button.setAttribute('aria-label', 'Open live demo in a new tab');
  button.setAttribute('role', 'button');
  button.className = 'preview-button';
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
    Try It
  `;

  // Style the button
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.background = '#D9663A'; /* Ember */
  button.style.color = '#E6E7F0'; /* Pale Sky */
  button.style.border = 'none';
  button.style.borderRadius = '50px';
  button.style.padding = '10px 20px';
  button.style.display = 'flex';
  button.style.alignItems = 'center';
  button.style.gap = '8px';
  button.style.fontFamily = '"Roboto Flex", sans-serif';
  button.style.fontSize = '16px';
  button.style.fontVariationSettings = '"wght" 600';
  button.style.cursor = 'pointer';
  button.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
  button.style.transition = 'background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease';
  button.style.zIndex = '1000';

  // Hover and focus styles
  button.onmouseover = () => {
    button.style.background = '#B89778'; /* Brass */
    button.style.transform = 'scale(1.05)';
    button.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
  };
  button.onmouseout = () => {
    button.style.background = '#D9663A';
    button.style.transform = 'scale(1)';
    button.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
  };
  button.onfocus = () => {
    button.style.outline = '2px solid #B89778'; /* Brass */
    button.style.outlineOffset = '2px';
  };
  button.onblur = () => {
    button.style.outline = 'none';
  };

  // Dark mode adjustments
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    button.style.background = '#B89778'; /* Brass */
    button.style.color = '#2B1A3D'; /* Dusk Purple */
    button.onmouseover = () => {
      button.style.background = '#D9663A'; /* Ember */
    };
    button.onmouseout = () => {
      button.style.background = '#B89778';
    };
  }

  // Click handler to open URL in new tab
  button.onclick = () => {
    window.open(url, '_blank');
  };

  // Append the button to the body
  document.body.appendChild(button);
}
