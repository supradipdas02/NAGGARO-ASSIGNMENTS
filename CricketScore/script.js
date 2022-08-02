const apiKey = "fb935a92-b1b6-47e3-a96a-6ff43361d1c9";
const url = `https://api.cricapi.com/v1/cricScore?apikey=${apiKey}`;
const fetchBtn = document.getElementById("fetch-btn");
const cards = document.getElementById("cards");
const defaultLogo =
  "https://cdorg.b-cdn.net/wp-content/uploads/2022/02/icon.png";
fetchBtn.addEventListener("click", () => {
  console.log("Clicked");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const matches = data.data;
      const result = matches.filter((match) => match.ms === "result");
      const live = matches.filter((match) => match.ms === "live");
      const fixture = matches.filter((match) => match.ms === "fixture");
      const compare = (a, b) => a.dateTimeGMT - b.dateTimeGMT;

      result.sort(compare);
      live.sort(compare);
      fixture.sort(compare);
      matches.forEach((match) => {
        const status =
          match.ms === "result"
            ? match.status
            : match.ms === "fixture"
            ? "Upcoming"
            : "Live";

        const div = document.createElement("div");
        div.setAttribute("id", match.id);
        div.setAttribute("class", "match");
        div.innerHTML = `
      <div
        class="card w-96 border-2 p-8 m-6 grid grid-rows-1 gap-1 place-items-center drop-shadow-md bg-white rounded-xl"
      >
        <h2 class="col-span-2 mb-4">${status}</h2>
        <img
          src="${match.t1img || defaultLogo}"
          class="rounded-full border-2"
          alt="Team Pic"
          width="100px"
        />
        <img
          src="${match.t2img || defaultLogo}"
          class="rounded-full border-2"
          alt="Team Pic"
          width="100px"
        />

        <h4>${match.t1}</h4>
        <h4>${match.t2}</h4>
        <span>${match.t1s}</span>
        <span>${match.t1s}</span>
      </div>`;
        cards.appendChild(div);
      });
    });
});