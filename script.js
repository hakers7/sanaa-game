let character = document.getElementById("character");
let obstacle = document.getElementById("obstacle");
let scoreSpan = document.getElementById("scoreSpan");
let counter = 0;

// وظيفة القفز
function jump() {
    if (character.classList != "animate-jump") {
        character.classList.add("animate-jump");
    }
    setTimeout(function() {
        character.classList.remove("animate-jump");
    }, 500);
}

// مراقبة الاصطدام (تشتغل كل 10 ملي ثانية)
let checkDead = setInterval(function() {
    
    // نجيب موقع البطل الحالي (فوق وتحت)
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    
    // نجيب موقع الحاجز الحالي (يمين ويسار)
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    // الشرط السحري: إذا الحاجز قريب جداً والبطل مش ناطط فوقه
    if (obstacleLeft < 50 && obstacleLeft > 20 && characterTop >= 130) {
        obstacle.style.animation = "none"; // وقف الحركة
        obstacle.style.display = "none";   // اخفي الحاجز
        alert("انصدمت! حاول مرة ثانية. نقاطك: " + Math.floor(counter/100));
        counter = 0; // صفر النقاط
        location.reload(); // ريستارت للعبة
    } else {
        counter++; // طول ما هو حي، زيد النقاط
        scoreSpan.innerHTML = Math.floor(counter/100);
    }
}, 10);

document.addEventListener("click", jump);
obstacle.classList.add("obstacle-move");