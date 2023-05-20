angular.module('bookApp')
    .controller('BookController', function() {
        const vm = this;
        vm.books = [
            { title: 'Title1', author: 'Author1', genre: 'Genre1' },
            { title: 'Title2', author: 'Author2', genre: 'Genre2' },
            { title: 'Title3', author: 'Author3', genre: 'Genre3' }
        ];

        vm.newBook = {};

        vm.addBook = function() {
            vm.books.push(vm.newBook);
            vm.newBook = {};
        };

        vm.removeBook = function(index) {
            vm.books.splice(index, 1);
        };
    });