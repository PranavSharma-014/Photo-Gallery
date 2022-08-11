let data = [];

function loadimg() {
  const xhr = new XMLHttpRequest();

  // const searchValue = document.querySelector('#my-text').value

  const url = `https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;

  xhr.open("GET", url);

  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const response = JSON.parse(xhr.responseText);
      data = response;

      renderData();
    }
  };

  xhr.send();
}

loadimg();

function renderData() {
  let template = "";
  for (let i = 0; i < 18; i++) {
    template += `
                <div class="card m-2" style="width: 18rem">
                <img src="${data[i].thumbnailUrl}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    ${data[i].title}
                  </p>
                </div>
              </div>
                `;
  }

  document.getElementById("my-container").innerHTML = template;
}

function postImage() {
  const title = document.getElementById("title").value;
  const thumbnailUrl = document.getElementById("thumbnail").value;
  const imageUrl = document.getElementById("imageUrl").value;

  data = [
    {
      title: title,
      thumbnailUrl: thumbnailUrl,
      imageUrl: imageUrl,
    },
    ...data,
  ];

  renderData();
}
