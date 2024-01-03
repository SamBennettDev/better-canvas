# Better-Canvas

Better-Canvas is a collection of usable and customizable widgets designed to display course information from Canvas. It is compatible with Widgy, making it easier to integrate these widgets into your educational applications.

[![GitHub Stars](https://img.shields.io/github/stars/your-username/better-canvas?style=for-the-badge)](https://github.com/SamBennettDev/better-canvas)

## Preview

<div align="center">
  <img src="/images/betterCanvasIpadExample.jpg" alt="iPad Example" width="400">
</div>

<div align="center">
  <p>Example on an iPad using the `assignmentsQR.JPG` in Widgy.</p>
</div>

<div align="center">
  <img src="/images/betterCanvasExample.jpg" alt="iPhone Example" width="250">
</div>

<div align="center">
  <p>Example on an iPhone using the `allGradesQR.JPG` in Widgy.</p>
</div>

## Usage

Above are examples showcasing Better-Canvas in action on different devices. You can see the possibilities it offers when used with Widgy.

### iPad Example

<div align="center">
  <img src="/images/assignmentsQR.JPG" alt="Assignments QR Code" width="200">
</div>

Scan the QR code above in Widgy to use the Assignments widget on your iPad.

### iPhone Example

<div align="center">
  <img src="/images/allGradesQR.JPG" alt="All Grades QR Code" width="200">
</div>

Scan the QR code above in Widgy to use the All Grades widget on your iPhone.

## Getting Started

To get started with Better-Canvas, follow these steps:

1. Download and install Widgy on your device.
2. [Get your Canvas API token.](#get-your-canvas-api-token)
3. [Get your Canvas course and account numbers.](#get-your-canvas-course-and-account-numbers)
4. [Create a Cloudflare Cors-Proxy worker.](#create-a-cloudflare-cors-proxy-worker)
5. Scan the widget QR code inside of Widgy and fill out the information appropriately.

## Get your Canvas API token
https://community.canvaslms.com/t5/Student-Guide/How-do-I-manage-API-access-tokens-as-a-student/ta-p/273
## Get your Canvas course and account numbers

Go to canvas inside of your laptop/desktop and click on one of your classes to take you to that classes homepage.
Inside the url contains the class ID, below is an example of a class ID
<div align="center">
  <img src="/images/findCourseNumber.png" alt="Assignments QR Code">
</div>

While still inside of the laptop/desktop paste <code>/api/v1/users/self</code> at the end of your canvas link.  Below is an example with the University of Utah canvas link.  This will return an object containing your account id.
<div align="center">
  <img src="/images/findAccountID.png" alt="Assignments QR Code">
</div>

## Create a Cloudflare Cors-Proxy worker
