export function selectBook(book) {
	console.log('A book have been selected', book.title);
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}