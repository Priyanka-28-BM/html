function updateClock() {
    const clockContainer = document.querySelectorAll('.time-block, .last-block');
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours equals 0, set it to 12 (for midnight and noon)
    
    // Add leading zero to single-digit minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    clockContainer[0].innerHTML = hours + ":";
    clockContainer[1].innerHTML = minutes + ":";
    clockContainer[2].innerHTML = seconds + ' ' ;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the time immediately when the page loads
  updateClock();
  