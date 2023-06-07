const episodeOpener = document.getElementById("episodeOpener")
const allEpisodess = document.getElementById("allEpisodes")

episodeOpener.addEventListener("click",()=>{
    allEpisodess.classList.toggle("allEpisodes-active")
})