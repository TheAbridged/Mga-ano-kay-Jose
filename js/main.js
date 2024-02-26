// Retrieve all questions
var questions = document.querySelectorAll(".question");

// Add click event listener to each question
questions.forEach(function(question) {
    question.addEventListener("click", function() {
        // Toggle the visibility of the next sibling element (answer)
        var answer = question.nextElementSibling;
        
        
        // Toggle the rotation of the toggle icon
        var toggleIcon = question.querySelector('.toggle-icon');
        toggleIcon.classList.toggle('rotate');
        
        // Check if the clicked question's answer is currently visible
        var isVisible = answer.style.display === "block";
        
        // Hide all answers
        var allAnswers = document.querySelectorAll(".answer");
        allAnswers.forEach(function(ans) {
            ans.style.display = "none";
            ans.classList.remove("expand");
        });
        
        // If the answer was not visible, display it with animation
        if (!isVisible) {
            answer.style.display = "block";
            setTimeout(function() {
                answer.classList.add("expand");
            }, 100); // Delay for smoother animation
        }
    });
    
  // Set specific answers for each question
  var answers = document.querySelectorAll(".answer");
  answers[0].textContent = "Placeholder 1";    // Answer 1
  answers[1].textContent = "Your application ID will be provided once you've registered for the pre-orientation attendance form.";    // Answer 2
  answers[2].textContent = "Feel free to contact our onboarding team via Discord or email using the Newbies channel.";    // Answer 3
  answers[3].textContent = "Simply send us an email along with your withdrawal letter.";    // Answer 4
  answers[4].textContent = "You can request an MOA from your school, and we're more than willing to sign it.";    // Answer 5
  answers[5].textContent = "No, we highly recommend attending the pre boarding orientation to get acquainted with our procedures and FAQs.";    // Answer 6 
  answers[6].textContent = "Please put Mrs. Jonalyn Estrada, our UIP director, as the contact person.";    // Answer 7
  answers[7].textContent = "Deduct the hours used on your first day from your total hours, and that's what you'll record in the remaining hours on your daily journal #1.";    // Answer 8
  answers[8].textContent = "To ensure fairness, please complete your internship hours at UIP before requesting an advance COC.";    // Answer 9
  answers[9].textContent = "You may contact Mr. Deanver Lucena. You may ping him on the offboarding channel in UIP's discord server.";    // Answer 9
  answers[10].textContent = "If all of your OJT hours are completed, you may check it on your tracker account.";    // Answer 9


  
  // Slider functionality



var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 3000; // duration(speed) of the slide

var timer = setInterval(changeSlide, interval);

function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) { // reset
      imgs[i].style.opacity = 0;
      dots[i].className = dots[i].className.replace(' active', '');
    }
  
    currentImg = (currentImg + 1) % imgs.length; // update the index number

    if (n != undefined) {
        clearInterval(timer);
        timer = setInterval(changeSlide, interval);
        currentImg = n;
    }
  
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
  }

});