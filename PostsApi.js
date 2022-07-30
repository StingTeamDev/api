const stingapi = async function get() {
  const response = await fetch(
    "https://almaghrebsport.com/wp-json/wp/v2/posts"
  );
  const data = await response.json();

  const responsemedia = await fetch(
    "https://almaghrebsport.com/wp-json/wp/v2/media"
  );
  const media = await responsemedia.json();

  document.getElementsByTagName("head")[0].insertAdjacentHTML(
    "beforeend",
    "<link rel=\"stylesheet\" href=\"https://cdn.statically.io/gh/StingTeamDev/api/main/Post.css\" />");

  document.querySelector("#TableAutoSting1 img").src = media[0].guid.rendered;
  document.querySelector("#TableAutoSting1 img").alt = data[0].title.rendered;
  document.querySelector("#TableAutoSting1 a").innerHTML =
    data[0].title.rendered;
  document.querySelector("#TableAutoSting1 .linkPostApi").href = data[0].link;

  document.querySelector("#TableAutoSting2 img").src = media[1].guid.rendered;
  document.querySelector("#TableAutoSting2 img").alt = data[1].title.rendered;
  document.querySelector("#TableAutoSting2 a").innerHTML =
    data[1].title.rendered;
  document.querySelector("#TableAutoSting2 .linkPostApi").href = data[1].link;

  document.querySelector("#TableAutoSting3 img").src = media[2].guid.rendered;
  document.querySelector("#TableAutoSting3 img").alt = data[2].title.rendered;
  document.querySelector("#TableAutoSting3 a").innerHTML =
    data[2].title.rendered;
  document.querySelector("#TableAutoSting3 .linkPostApi").href = data[2].link;

  document.querySelector("#TableAutoSting4 img").src = media[3].guid.rendered;
  document.querySelector("#TableAutoSting4 img").alt = data[3].title.rendered;
  document.querySelector("#TableAutoSting4 a").innerHTML =
    data[3].title.rendered;
  document.querySelector("#TableAutoSting4 .linkPostApi").href = data[3].link;

  document.querySelector("#TableAutoSting5 img").src = media[4].guid.rendered;
  document.querySelector("#TableAutoSting5 img").alt = data[4].title.rendered;
  document.querySelector("#TableAutoSting5 a").innerHTML =
    data[4].title.rendered;
  document.querySelector("#TableAutoSting5 .linkPostApi").href = data[4].link;

  document.querySelector("#TableAutoSting6 img").src = media[5].guid.rendered;
  document.querySelector("#TableAutoSting6 img").alt = data[5].title.rendered;
  document.querySelector("#TableAutoSting6 a").innerHTML =
    data[5].title.rendered;
  document.querySelector("#TableAutoSting6 .linkPostApi").href = data[5].link;

  document.querySelector("#TableAutoSting7 img").src = media[6].guid.rendered;
  document.querySelector("#TableAutoSting7 img").alt = data[6].title.rendered;
  document.querySelector("#TableAutoSting7 a").innerHTML =
    data[6].title.rendered;
  document.querySelector("#TableAutoSting7 .linkPostApi").href = data[6].link;

  document.querySelector("#TableAutoSting8 img").src = media[7].guid.rendered;
  document.querySelector("#TableAutoSting8 img").alt = data[7].title.rendered;
  document.querySelector("#TableAutoSting8 a").innerHTML =
    data[7].title.rendered;
  document.querySelector("#TableAutoSting8 .linkPostApi").href = data[7].link;

  console.group("%cSting Posts Auto - api", "font-weight:bold;color:#931800;font-family:Tahoma;font-size:20px;");
  console.log("~> Designed by   : Mohamed Abu Maher");
  console.log("~> Programmed by : Sting Web");
  console.log("~> URL Page FB   : https://fb.com/stingweb.eg");
  console.log("~> Last Update   : 01 - 08 - 2022");
  console.log("~> Version       : 1.0");console.groupEnd();

};

stingapi();
