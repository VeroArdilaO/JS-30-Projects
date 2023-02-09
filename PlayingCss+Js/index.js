const inputs = document.querySelectorAll(".controls input");

function handledUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(input => input.addEventListener("change", handledUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handledUpdate));
