// Put your schools canvas url here
// Ex "https://utah.instructure.com"
const schoolCanvasLink = "";

// Put your canvas access token here
// Ex "2~hebkzixhdbaosizoakxbxjxj32728jsbs"
const accessToken = "";

// Put your cors proxy link here
// Ex "https://cors-proxy.yourname.workers.dev/"
const corsProxyLink = "";

// Put your course canvas number here
// Ex "625183"
const courseId = "";

try {
  xhr = new XMLHttpRequest();
  xhr.open("GET", proxyUrl, false);
  xhr.send(null);
  const data = JSON.parse(xhr.responseText);
  return data;
} catch (error) {
  return "NE";
}

async function fetchRecentCourseAssignments() {
  let allAssignments = [];

  const assignments = await fetchCourseAssignments(courseId);
  allAssignments = allAssignments.concat(assignments);

  // Filter out assignments with submission !== null.
  const assignmentsWithSubmission = allAssignments.filter(
    (allAssignment) => allAssignment.submission.grade
  );

  // Sort assignments by due_at in descending order.
  assignmentsWithSubmission.sort(
    (a, b) => new Date(b.due_at) - new Date(a.due_at)
  );

  // Keep only the first assignment (most recent one).
  const mostRecentAssignments = assignmentsWithSubmission.slice(0, 1);

  formatAssignments(mostRecentAssignments);
}

function formatAssignments(assignment) {
  let assignmentString = "";

  let name = assignment.name.toString();

  let score =
    assignment.submission.entered_score.toString() +
    "/" +
    assignment.points_possible.toString();

  assignmentString += name.slice(0, 20);
  assignmentString = assignmentString.padEnd(25, " ");
  assignmentString += score;
  assignmentString = assignmentString.padEnd(35, " ");

  if (assignment.score_statistics) {
    assignmentString =
      assignmentString + assignment.score_statistics.mean.toString();
  }
  sendToWidgy(assignmentString.toString());
}

fetchRecentCourseAssignments();
