let fruits = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
]

const toHTML = fruit => `
<div class="col">
  <div class="card">
    <img class="card-img-top" src="${fruit.url}" alt="${fruit.title}">
    <div class="card-body">
      <h5 class="card-title">${fruit.title}</h5>
      <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Show price</a>
      <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}>Delete</a>
    </div>
  </div>
</div>
`

function render() {
  const html = fruits.map(toHTML).join('');
  document.querySelector('#fruits').innerHTML = html;
}

render();

const priceModal = $.modal({
  title: 'Are you sure?',
  closable: true,
  width: `400px`,
  footerButtons: [
    {
      text: 'Close',
      type: 'primary',
      handler() {
        priceModal.close();
      }
    }
  ]
});



document.addEventListener('click', event => {
  event.preventDefault();

  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id;
  const fruit = fruits.find(f => f.id === id);

  if (btnType = 'price') {

    confirmModal.setContent(`
      <p>Price ${fruit.title}: <strong>${fruit.thumbnailUrl}</strong></p>
    `);
    confirmModal.open();
  } else if (btnType = 'remove') {
    $.confirm({
      title: 'Are you sure?',
      content: `<p>You delete: <strong>${fruit.title}</strong></p>`
    }).then(() => {
      fruits = fruits.filter(f => f.id !== id);
      render();
    }).catch(() => {
      console.log('Cancel');
    })
  }
});
