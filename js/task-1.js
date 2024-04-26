const liItems = document.querySelectorAll('li.item');
console.log(`Number of categories: ${liItems.length}`);

liItems.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
