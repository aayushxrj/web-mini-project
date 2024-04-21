  const eventCards = document.querySelectorAll('.event-card');
  const selectedEventsTable = document.querySelector('.selected-events tbody');
  const totalPriceElement = document.getElementById('total-price');
  let totalPrice = 0;

  eventCards.forEach(card => {
    const selectBtn = card.querySelector('.select-btn');
    const price = parseInt(card.dataset.price);
    selectBtn.addEventListener('click', () => {
      const eventName = card.querySelector('h2').textContent;
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${eventName}</td>
        <td>₹${price}</td>
        <td><button class="unselect-btn">Unselect</button></td>
      `;
      selectedEventsTable.appendChild(newRow);
      totalPrice += price;
      totalPriceElement.textContent = `₹${totalPrice}`;
      updateUnselectButtons();
    });
  });

  function updateUnselectButtons() {
    const unselectButtons = document.querySelectorAll('.unselect-btn');
    unselectButtons.forEach(button => {
      button.addEventListener('click', () => {
        const row = button.parentNode.parentNode;
        const price = parseInt(row.children[1].textContent.slice(1));
        selectedEventsTable.removeChild(row);
        totalPrice -= price;
        totalPriceElement.textContent = `₹${totalPrice}`;
      });
    });
  }
