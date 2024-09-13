function drawChessboard() {
    const diagonal = parseFloat(document.getElementById('diagonal').value);
    const columns = parseInt(document.getElementById('columns').value);
    const rows = parseInt(document.getElementById('rows').value);
    const squareSize = parseFloat(document.getElementById('squareSize').value);

    // Определение PPI (пикселей на дюйм)
    const resolutionWidth = window.screen.width;
    const resolutionHeight = window.screen.height;
    const PPI = Math.sqrt(resolutionWidth ** 2 + resolutionHeight ** 2) / diagonal;

    // Перевод размера квадрата в пиксели
    const squareSizeInPixels = (squareSize / 25.4) * PPI; // 25.4 мм в одном дюйме

    const clientResolution = document.getElementById('clientResolution');

    clientResolution.value = resolutionWidth + " x " + resolutionHeight


    // Отрисовка шахматной доски
    const chessboard = document.getElementById('chessboard');
    chessboard.style.gridTemplateColumns = `repeat(${columns}, ${squareSizeInPixels}px)`;
    chessboard.style.gridTemplateRows = `repeat(${rows}, ${squareSizeInPixels}px)`;
    chessboard.innerHTML = ''; // Очистить предыдущую доску

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.style.backgroundColor = (row + col) % 2 === 0 ? 'black' : 'white';
            chessboard.appendChild(square);
        }
    }
}

function toggleControls() {
    const controls = document.getElementById('controls');
    if (controls.classList.contains('d-none')) {
        controls.classList.remove('d-none');
        controls.classList.add('d-flex');
    } else {
        controls.classList.remove('d-flex');
        controls.classList.add('d-none');
    }
}

// Добавление слушателя событий после загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
    drawChessboard();
    document.getElementById('toggleButton').addEventListener('click', toggleControls);
});
