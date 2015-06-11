app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'This Month\'s Bestsellers';
    $scope.promo = 'The most popular books this month.';
    $scope.products = [
        {
            name: 'The Book of Trees',
            price: 19,
            pubdate: new Date('2014', '03', '08'),
            cover: 'img/the-book-of-trees.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'Program or be Programmed',
            price: 8,
            pubdate: new Date('2013', '08', '01'),
            cover: 'img/program-or-be-programmed.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'CSharp in Depth',
            price: 8,
            pubdate: new Date('2013', '09', '01'),
            cover: 'img/csharp-in-depth-third-edition.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'JavaScript: The Good Parts',
            price: 8,
            pubdate: new Date('2008', '05', '01'),
            cover: 'img/javascript-the-good-parts.gif',
            likes: 0,
            dislikes: 0
        }
    ];
    $scope.plusOne = function(index) {
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function(index) {
        $scope.products[index].dislikes += 1;
    };
}]);
