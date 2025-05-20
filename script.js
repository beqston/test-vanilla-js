document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load data.json");
      }
      return response.json();
    })
    .then(data => {
      const list = document.getElementById("userList");
      data.products.forEach(user => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        li.textContent = `${user.name} (${user.email})`;
        img.src = user.image;
        img.alt = `${user.name}'s image`;
        list.appendChild(li);
        list.appendChild(img);
      });
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
});
