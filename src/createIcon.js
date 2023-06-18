const createIcon = (className, eventListener) => {
  const icon = document.createElement('i');
  icon.className = `fa-solid ${className}`;
  icon.classList.add('ellipse', 'drag');
  if (eventListener) {
    icon.addEventListener('mousedown', eventListener);
  }
  return icon;
};

export default createIcon;
