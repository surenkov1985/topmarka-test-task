const header = document.querySelector(".head");
const links = document.querySelectorAll(".nav-link");

const headHeight = header.clientHeight

for (let link of links) {
    link.addEventListener("click", function(e) {
        e.preventDefault()
       
        const currentBlock = document.querySelector(e.target.hash);
        if (currentBlock) {
            window.scroll({
				top: currentBlock.offsetTop - headHeight,
				behavior: "smooth",
			});
        }
        
         console.log(currentBlock.offsetTop, headHeight);
    })
}
