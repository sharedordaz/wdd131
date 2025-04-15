   // Check if this is a form submission (has query parameters)
   const urlParams = new URLSearchParams(window.location.search);
    
   // Only increment counter if this is a form submission
   if (urlParams.toString()) {
       // Get current count or initialize to 0
       let reviewCount = localStorage.getItem('reviewCount') || 0;
       
       // Increment and store the new count
       reviewCount = parseInt(reviewCount) + 1;
       localStorage.setItem('reviewCount', reviewCount);
       
       // Update the display
       const countElement = document.getElementById('reviewCount');
       if (reviewCount === 1) {
           countElement.textContent = "This is your first review submission.";
       } else {
           countElement.textContent = `You have submitted ${reviewCount} reviews.`;
       }
   } else {
       // If not a form submission, just show the current count
       const reviewCount = localStorage.getItem('reviewCount') || 0;
       const countElement = document.getElementById('reviewCount');
       
       if (reviewCount === 0) {
           countElement.textContent = "You haven't submitted any reviews yet.";
       } else {
           countElement.textContent = `You have submitted ${reviewCount} reviews in total.`;
       }
   }