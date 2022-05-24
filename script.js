const heading = document.getElementById('heading2');
const stroganoff = document.getElementById('Stroganoff');
const goulash = document.getElementById('Goulash');
const cheeseburger = document.getElementById('Cheeseburger');
const peppermint = document.getElementById('Peppermint');
const salmon = document.getElementById('Salmon');
const potatoes = document.getElementById('Potatoes');

stroganoff.addEventListener('mouseover', function handleMouseOver() {
    heading.innerHTML = 'Beef Stroganoff';
});

stroganoff.addEventListener('mouseout', function handleMouseOut() {
    heading.innerHTML = 'Select a recipe!';
});

goulash.addEventListener('mouseover', function handleMouseOver() {
    heading.innerHTML = 'American Goulash';
});

goulash.addEventListener('mouseout', function handleMouseOut() {
    heading.innerHTML = 'Select a recipe!';
});

cheeseburger.addEventListener('mouseover', function handleMouseOver() {
    heading.innerHTML = 'Cheeseburger Macaroni';
});

cheeseburger.addEventListener('mouseout', function handleMouseOut() {
    heading.innerHTML = 'Select a recipe!';
});

peppermint.addEventListener('mouseover', function handleMouseOver() {
    heading.innerHTML = 'Peppermint Brownie Cookies';
});

peppermint.addEventListener('mouseout', function handleMouseOut() {
    heading.innerHTML = 'Select a recipe!';
});

salmon.addEventListener('mouseover', function handleMouseOver() {
    heading.innerHTML = 'Creamy Garlic Salmon';
});

salmon.addEventListener('mouseout', function handleMouseOut() {
    heading.innerHTML = 'Select a recipe!';
});

potatoes.addEventListener('mouseover', function handleMouseOver() {
    heading.innerHTML = 'Cajun Twice Baked Potatoes';
});

potatoes.addEventListener('mouseout', function handleMouseOut() {
    heading.innerHTML = 'Select a recipe!';
});