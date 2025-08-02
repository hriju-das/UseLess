// ===== 100% WORKING Chaos Injector ===== //
const nonsense = [
  "gay", "banana", "chakka", "shit", 
  "thengha", "kindi"
];

// Nuclear option for finding active field
function getActiveElement() {
  let el = document.activeElement;
  while (el?.shadowRoot?.activeElement) {
    el = el.shadowRoot.activeElement;
  }
  return el;
}

// Hyper-aggressive injection
function injectChaos(event) {
  // Skip if not a regular keypress
  if (event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1) return;
  
  const target = getActiveElement();
  if (!target) return;

  // 80% CHANCE OF CHAOS
  if (Math.random() < 0.02) {
    event.preventDefault();
    const randomText = nonsense[Math.floor(Math.random() * nonsense.length)] + " ";
    
    // For modern editors (Google Docs, etc.)
    if (target.isContentEditable) {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(randomText));
        range.collapse(false);
      }
    } 
    // For normal inputs
    else if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
      const start = target.selectionStart;
      target.value = 
        target.value.slice(0, start) + 
        randomText + 
        target.value.slice(target.selectionEnd);
      target.selectionStart = target.selectionEnd = start + randomText.length;
    }
  }
}

// DOUBLE EVENT LISTENER APPROACH
document.addEventListener('keydown', injectChaos, true); // Capture phase
window.addEventListener('keydown', injectChaos, true); // Window level

console.log("CHAOS ENGINE ACTIVATED! Try typing anywhere!");