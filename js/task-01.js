// console.log(document);
// Завдання 1

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const listItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItem.length}`);



// Для кожного елемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

listItem.forEach((item) => {
	const header = item.querySelector('h2')
	console.log(`Category: ${header.textContent}`);

	const listEl = item.querySelectorAll('ul li')
	console.log(`Elements: ${listEl.length}`)
})