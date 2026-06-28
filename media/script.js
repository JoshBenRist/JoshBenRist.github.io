function loadReviewFromURL() {
    const params = new URLSearchParams(window.location.search);
    const review = params.get(review);
    const reviewDiv = document.getElementById(review);
    reviewDiv.classList.add('visible');
}

document.querySelectorAll('.more').forEach(more => {
    more.addEventListener('click', (event) => {
        event.stopPropagation();

        document.querySelectorAll('.review').forEach(review => {
            review.classList.remove('visible');
        });

        const tile = more.closest('.tile');

        const reviewId = tile.dataset.review;

        document.getElementById(reviewId).classList.add('visible');

        document.getElementById(reviewId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('click', () => {
        document.querySelectorAll('.tile').forEach(t => {
            t.classList.remove('expanded');
        })
        tile.classList.toggle('expanded');
    });
});