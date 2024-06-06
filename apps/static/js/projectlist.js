document.addEventListener('DOMContentLoaded', function () {
    var clickableCells = document.querySelectorAll('.clickable-cell');
    clickableCells.forEach(function (cell) {
        cell.addEventListener('click', function () {
            var url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });
  });

  function toggleDescription(cell, event) {
    event.stopPropagation();

    var hiddenDescription = cell.querySelector('.hidden-description');
    if (hiddenDescription.style.display === 'none') {
        hiddenDescription.style.display = 'inline';
        cell.innerHTML = hiddenDescription.innerHTML;
    } else {
        hiddenDescription.style.display = 'none';
        cell.innerHTML = hiddenDescription.innerHTML.substring(0, 150) + '...';
    }
}