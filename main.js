const videosContainer = document.getElementById("videos-container");

const videos = [
  {
    author: "Fabio Akita",
    avatar:
      "https://yt3.ggpht.com/ytc/AIdro_l9jtAcERHIts0q6LsUtmAGPzQ8p8FzKGAoYRJ1N3Wz3Hs0=s68-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/watch?v=sx4hAHhO9CY",
    thumbnail:
      "https://i.ytimg.com/vi/sx4hAHhO9CY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtQbB0sD3KI1Gsb2BpVprmbZglSg",
    views: "1,1 mi",
    created_at: "5",
    title:
      "Conhecimentos Básicos para Iniciantes em Programação | Série &quot;Começando aos 40&quot;",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nulla incidunt, iure dolor sint dolore impedit optioquia praesentium, quasi, natus nisi veniam delectus architecto voluptates est accusantium ex reiciendis?",
    isContentCreator: true,
  },
  {
    author: "Chilled Sad",
    avatar:
      "https://yt3.ggpht.com/TDK6SSD20n23nOsDrm5CO_b6w719MRgQWOuvBw66Aj1o_a4Mca-Sb77uqZRKhSHqGKwiu92bfg=s68-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/_C7W1mBM1sM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZkTukg4FQHKGYhUTXQ45oZ0YE2Q",
    views: "109.000",
    created_at: "6",
    title: "Mareux - The Perfect Girl (Lyrics)",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nulla incidunt, iure dolor sint dolore impedit optioquia praesentium, quasi, natus nisi veniam delectus architecto voluptates est accusantium ex reiciendis?",
    isContentCreator: false,
  },
  {
    author: "Fabio Akita",
    avatar:
      "https://yt3.ggpht.com/ytc/AIdro_l9jtAcERHIts0q6LsUtmAGPzQ8p8FzKGAoYRJ1N3Wz3Hs0=s68-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/watch?v=sx4hAHhO9CY",
    thumbnail:
      "https://i.ytimg.com/vi/VKmPGmFY7H4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4QzAaHO8gbY30idyxlhulE6IQYg",
    views: "377.000",
    created_at: "5",
    title:
      "A História do Front-End para Iniciantes em Programação | Série &quot;Começando aos 40&quot;",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nulla incidunt, iure dolor sint dolore impedit optioquia praesentium, quasi, natus nisi veniam delectus architecto voluptates est accusantium ex reiciendis?",
    isContentCreator: true,
  },
  {
    author: "Blissful Mind",
    avatar:
      "https://yt3.ggpht.com/ytc/AIdro_nqaohDbRsmgWq8X4SHsN6C6UWKCWK214M7StlJRLShbw=s68-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/watch?v=g9h5X4x0XCk",
    thumbnail:
      "https://i.ytimg.com/vi/g9h5X4x0XCk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASHymZzMbfG8kj4qRtCZUsrQrcIw",
    views: "2,6 mi",
    created_at: "3",
    title: "Bring Me The Horizon - Can You Feel My Heart (Lyrics)",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nulla incidunt, iure dolor sint dolore impedit optioquia praesentium, quasi, natus nisi veniam delectus architecto voluptates est accusantium ex reiciendis?",
    isContentCreator: false,
  },
  {
    author: "Fabio Akita",
    avatar:
      "https://yt3.ggpht.com/ytc/AIdro_l9jtAcERHIts0q6LsUtmAGPzQ8p8FzKGAoYRJ1N3Wz3Hs0=s68-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/watch?v=sx4hAHhO9CY",
    thumbnail:
      "https://i.ytimg.com/vi/Qjk-cSW-jk4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBva_oFBYEFRqh9qDDOmhVq7MOYtg",
    views: "367.000",
    created_at: "5",
    title:
      "Entendendo Back-End para Iniciantes em Programação (Parte 1) | Série &quot;Começando aos 40&quot;",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nulla incidunt, iure dolor sint dolore impedit optioquia praesentium, quasi, natus nisi veniam delectus architecto voluptates est accusantium ex reiciendis?",
    isContentCreator: true,
  },
  {
    author: "The Vibe Guide",
    avatar:
      "https://yt3.ggpht.com/hkNTjyFsDL8IcLGSoO42-gLDLIrD2sCEUBQ7aLnofzaRqpbtXEjzGtCZZQd4oJ7cLCeOIyb9vQ=s68-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/watch?v=-dhx7Hnu-wo",
    thumbnail:
      "https://i.ytimg.com/vi/-dhx7Hnu-wo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA98m9tXsKYKVKSb00vZ_nLw1xp1Q",
    views: "26 mi",
    created_at: "1",
    title: "INTERWORLD - METAMORPHOSIS",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nulla incidunt, iure dolor sint dolore impedit optioquia praesentium, quasi, natus nisi veniam delectus architecto voluptates est accusantium ex reiciendis?",
    isContentCreator: false,
  },
];

videos.forEach((video, index) => {
  const videoCard = document.createElement("a");
  videoCard.classList.add("card");
  videoCard.setAttribute("key", index);
  videoCard.rel = "noreferrer noopener";
  videoCard.href = video.url;
  videoCard.target = "_self";

  videoCard.innerHTML = `
        <img
          class="card-thumbnail"
          src="${video.thumbnail}"
          alt="channel thumbnail"
        />
        <div class="card-details">
          <img
            class="card-avatar small-screen"
            src="${video.avatar}"
            alt="channel avatar"
          />
          <div class="card-description">
            <div class="card-description-top">
              <h6 class="card-title">
                ${video.title}
              </h6>
              <button class="card-button">
                <span class="material-symbols-outlined">more_vert</span>
              </button>
            </div>
            <div class="card-info-channel large-screen">
              <span class="card-info">${video.views} views</span>
              <span class="card-info">${video.created_at} years ago</span>
            </div>
            <div class="card-description-bottom">
              <img
                class="card-avatar large-screen"
                src="${video.avatar}"
                alt="channel avatar"
              />
              <div class="card-info-channel">
                <span class="card-info large-screen"
                  >${video.author}
                  ${
                    video.isContentCreator
                      ? `<div class="verified-channel large-screen">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"
                        ></path>
                    </svg>
                  </div>
                  `
                      : `<div class="verified-artist large-screen">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7z"
                      ></path>
                    </svg>
                  </div>`
                  }
                </span>
                <span class="card-info small-screen">${video.views} views</span>
                <span class="card-info small-screen">${video.created_at} years ago</span>
              </div>
              <p class="card-info-description">
                ${video.description}
              </p>
            </div>
          </div>
        </div>
    `;

  videosContainer.appendChild(videoCard);
});
