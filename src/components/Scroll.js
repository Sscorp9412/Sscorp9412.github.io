exports.Scroll = (link) => {
  const text = 'Kindly Scroll Down';
  return `<a href="${link || "#"}" class="scroll-down">${text}</a>`
}