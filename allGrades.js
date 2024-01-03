// Put your schools canvas url here
// Ex "https://utah.instructure.com"
const schoolCanvasLink = "";

// Put your canvas access token here
// Ex "2~hebkzixhdbaosizoakxbxjxj32728jsbs"
const accessToken = "";

// Put your cors proxy link here
// Ex "https://cors-proxy.yourname.workers.dev/"
const corsProxyLink = "";

// Put your courses canvas numbers here
// Ex ["625183", "123456", "718391"]
const courses = ["", "", "", "", ""];




async function fetchCourseGrade(courseId) {
  const apiURL = `${schoolCanvasLink}/api/v1/courses/${courseId}?access_token=${accessToken}&include[]=total_scores`;
  const url = `${corsProxyLink}${apiURL}`;
  
  try {
    xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    const data = JSON.parse(xhr.responseText);
    const currentScore = data.enrollments[0].computed_current_score;

    if (currentScore !== null) {
      // Check if the score is greater than or equal to 100
      if (currentScore >= 100) {
        // Round to the tenth place
        return Math.round(currentScore * 10) / 10;
      } else {
        return currentScore;
      }
    } else {
      return "-----";
    }
  } catch (error) {
    return "NE";
  }
}
async function fetchAllCourseGrades() {
  const gradePromises = courses.map(fetchCourseGrade);
  const grades = await Promise.all(gradePromises);
  const formattedGrades = `${grades.join("\n\n")}`;
  sendToWidgy(formattedGrades);
}
fetchAllCourseGrades();
