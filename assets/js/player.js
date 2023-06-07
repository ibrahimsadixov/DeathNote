
const videoContainer = document.getElementById("videoContainer");
const closeButton = document.getElementById("closeButton");


var playerList = [
    "https://dv58.sibnet.ru/13/43/62/1343622.mp4?st=ERsJ-dDRYPHlMWZx6_rf5Q&e=1686163000&stor=58&noip=1", "https://dv57.sibnet.ru/13/43/62/1343623.mp4?st=1Vda0645Mmo8r2J68hg90A&e=1686163000&stor=57&noip=1", "https://dv9.sibnet.ru/13/43/62/1343625.mp4?st=CEp-ZF4toIhrdLtSi3s_Hg&e=1686163000&stor=9&noip=1", "https://dv30.sibnet.ru/13/43/62/1343628.mp4?st=1oS30KTTE4jfjmxiOyk-UQ&e=1686163000&stor=30&noip=1", "https://dv1-1.sibnet.ru/13/43/62/1343629.mp4?st=bgp7xUGjKZXU0eTBmUy10w&e=1686163000&stor=1&noip=1",
    "https://dv4-2.sibnet.ru/13/43/63/1343631.mp4?st=_pFvm01Nuyt1yorZ0t0I8w&e=1686163000&stor=4&noip=1", "https://dv21-1.sibnet.ru/13/43/63/1343635.mp4?st=yyMAJLa6EhvhjCSeyOACZA&e=1686164000&stor=21&noip=1", "https://dv9.sibnet.ru/13/43/63/1343636.mp4?st=kEZ53JLFUWSWnzZWUXdgHA&e=1686164000&stor=9&noip=1", "https://dv9.sibnet.ru/13/43/63/1343637.mp4?st=fSC54CZwX192rba0UgE_WA&e=1686164000&stor=9&noip=1",
    "https://dv8-1.sibnet.ru/13/43/63/1343639.mp4?st=z-TpMDzJZe8OmaMKBkMDgg&e=1686164000&stor=8&noip=1", "https://dv4-2.sibnet.ru/13/43/64/1343640.mp4?st=iWe1jBrCB0UO78JYR4YPnQ&e=1686164000&stor=4&noip=1","https://dv31.sibnet.ru/13/43/64/1343641.mp4?st=2HIjX6AVo4auqqifQ_qBRA&e=1686164000&stor=31&noip=1",
    "https://dv6-1.sibnet.ru/13/43/64/1343643.mp4?st=2o6MJ0FwT7uCOvAVtVIUXg&e=1686164000&stor=6&noip=1","https://dv6-1.sibnet.ru/13/43/64/1343643.mp4?st=2o6MJ0FwT7uCOvAVtVIUXg&e=1686164000&stor=6&noip=1","https://dv8-2.sibnet.ru/13/43/64/1343645.mp4?st=LjVIrc_Zj-HV9guEx2wubg&e=1686164000&stor=8&noip=1",
    "https://dv8-1.sibnet.ru/13/43/64/1343647.mp4?st=vfZk1W9wjDrnZ1EKfpbz0Q&e=1686165000&stor=8&noip=1","https://dv31.sibnet.ru/13/43/65/1343650.mp4?st=FnApOAUs6WuxUDx8Eq391Q&e=1686165000&stor=31&noip=1","https://dv30.sibnet.ru/13/43/65/1343651.mp4?st=KioXJEbXs1vgTjaMFm3qoQ&e=1686165000&stor=30&noip=1","https://dv21-2.sibnet.ru/13/43/65/1343652.mp4?st=2AY_PfmwQ7eVh7a-OtJ0LQ&e=1686168000&stor=21&noip=1", "https://dv6-1.sibnet.ru/13/43/65/1343653.mp4?st=Sxbkg-qiD5rdH-pkqQSkuA&e=1686168000&stor=6&noip=1","https://dv21-1.sibnet.ru/13/43/65/1343655.mp4?st=s3NoXd_C4wFHF8DBoNIz5A&e=1686168000&stor=21&noip=1","https://dv7-1.sibnet.ru/13/43/65/1343657.mp4?st=K5qG3O5Z8gmLYeC2jwEb3w&e=1686168000&stor=7&noip=1","https://dv6-2.sibnet.ru/13/43/65/1343658.mp4?st=ohZaaXWaYv5ctU3ytfDyTQ&e=1686168000&stor=6&noip=1","https://dv21-1.sibnet.ru/13/43/65/1343659.mp4?st=hacUwBZqeP5qhAsyvwBTJA&e=1686169000&stor=21&noip=1",
"https://dv57.sibnet.ru/13/43/66/1343661.mp4?st=ghiZ-p3vjYyury8q4LR2pg&e=1686169000&stor=57&noip=1","https://fs.myvi.ru/video/1225437.mp4?uid=&puid=&ref=https%3a%2f%2fwww.turkanime.co&d=1365&rnd=551821931&sig=61abd4fa8deb2f3bf6e233525bbe9b65","https://fs124.myvi.ru:8090/vv144/178/225/1225441.mp4?sig=b64e6eb73740b8fa133725f51e6c0a12&d=1229&t=1686139811","https://dv6-1.sibnet.ru/13/43/66/1343665.mp4?st=U4Q-3BFeN3ud8RitWrNgew&e=1686169000&stor=6&noip=1","https://fs124.myvi.ru:8090/vv145/178/228/1225444.mp4?sig=159d5dd2a64dc932ae3bdfc6f894e50b&d=1229&t=1686140150", "https://dv30.sibnet.ru/13/43/66/1343669.mp4?st=uQCPTs1vYKFgLKNrFBtzeg&e=1686169000&stor=30&noip=1",
"https://dv27-2.sibnet.ru/13/43/67/1343671.mp4?st=CEdITobLK5mZ840kmAKwuw&e=1686169000&stor=27&noip=1","https://dv30.sibnet.ru/13/43/67/1343673.mp4?st=gxiUxG1-N-huXM1wwRP5xQ&e=1686169000&stor=30&noip=1","https://dv48.sibnet.ru/13/43/67/1343675.mp4?st=Caf8Ulm5LxCMp-crEAK9wA&e=1686169000&stor=48&noip=1","https://dv30.sibnet.ru/13/43/67/1343677.mp4?st=go6hb4MLE0qAxDb-dB5Omg&e=1686169000&stor=30&noip=1","https://dv9.sibnet.ru/13/43/67/1343679.mp4?st=kBEZVgfmfN5ui_dI6xHUjg&e=1686169000&stor=9&noip=1","https://dv9.sibnet.ru/13/43/68/1343680.mp4?st=TWqEWIZ6hmOga-CS7Ehy_Q&e=1686169000&stor=9&noip=1","https://dv30.sibnet.ru/13/43/68/1343681.mp4?st=0k6mfcXlXnnLqTVlxbO85A&e=1686169000&stor=30&noip=1"]

  
  const allEpisodes = document.getElementById("allEpisodes");
  
  for (let i = 0; i < playerList.length; i++) {
    const episodeDiv = document.createElement("div");
    episodeDiv.classList.add("episode");
  
    const episodeNumberDiv = document.createElement("div");
    episodeNumberDiv.classList.add("episodeNumber");
  
    const episodeNumberHeading = document.createElement("h3");
    if (i + 1 ==37) {
        episodeNumberHeading.textContent =  "Bölüm " + (i + 1) + " ( Final )";
    } else{

        episodeNumberHeading.textContent =  "Bölüm " + (i + 1) ;
    }
  
    episodeNumberDiv.appendChild(episodeNumberHeading);
    episodeDiv.appendChild(episodeNumberDiv);
    allEpisodes.appendChild(episodeDiv);
  }
  
  const episodes = document.querySelectorAll(".episode");

  episodes.forEach((episode, index) => {
    episode.addEventListener("click", () => {
      videoContainer.style.height = "100vh";
      const videoUrl = getVideoUrl(index);
      const episodeNumber = index + 1;
      createFullscreenIframe(videoUrl, episodeNumber); 
    });
  });
closeButton.addEventListener("click", () => {
  closeFullscreenIframe();
});

function createFullscreenIframe(url, episodeNumber) {
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style.border = "none";
    iframe.setAttribute("allowfullscreen", ""); 
  
    while (videoContainer.firstChild) {
      videoContainer.firstChild.remove();
    }
    
    const episodeNumberDiv = document.createElement("div");
    episodeNumberDiv.classList.add("episodeNum");
    const episodeNumberHeading = document.createElement("h3");
    if (episodeNumber==37) {
        episodeNumberHeading.textContent = "Bölüm " + episodeNumber + " ( Final )";
    }
    else{

        episodeNumberHeading.textContent = "Bölüm " + episodeNumber;
    }
    episodeNumberDiv.appendChild(episodeNumberHeading);
  
    videoContainer.appendChild(iframe);
    videoContainer.appendChild(episodeNumberDiv);
    videoContainer.appendChild(closeButton);
  }
  

function closeFullscreenIframe() {
  videoContainer.style.height = "0";
  while (videoContainer.firstChild) {
    videoContainer.firstChild.remove();
  }
}
    
    function getVideoUrl(index) {

      
      return playerList[index];
    }
    
    





