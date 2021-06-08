fetch("https://api.nasa.gov/planetary/apod?api_key=xaLMzPtuFsgzDKp5vAH2gtiFzvm574C56WnfmDwR")
.then(a => a.json())
.then(function(whatyougot) {
if(JSON.stringify(whatyougot).includes('youtube')){
document.getElementById("output").innerHTML='<div style="position: fixed; z-index: -99; width: 100%; height: 100%"><iframe frameborder="0" height="100%" width="100%"     src="'+whatyougot.url+'&autoplay=1&loop=1&mute=1"></iframe> </div>'
}
else{
document.getElementById("output").style.background = 'url("'+whatyougot.url+'") no-repeat right top';
document.getElementById("output").style.backgroundSize = "cover"
}
})
