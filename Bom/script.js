//=====================
// Show an alert message
//=====================

// window.alert("Welcome to the page!");

//=====================
// Open a new window or tab
//=====================

// window.open("https://www.example.com", "_blank");

//=====================
// innerWidth and innerHeight
//=====================

function updateDimensions() {
  const demoElement = document.getElementById("demo");
  demoElement.innerHTML =
    "Browser inner window width: " +
    window.innerWidth +
    "px<br>" +
    "Browser inner window height: " +
    window.innerHeight +
    "px";

  //   console.log(`Inner Height: ${window.innerHeight}`);
  //   console.log(`inner Width: ${window.innerWidth}`);
}

// Initial call to display dimensions
updateDimensions();

// Add event listener for resize event
window.addEventListener("resize", updateDimensions);

//=====================
// openNewWindow
//=====================

let newWindow;

function openNewWindow() {
  newWindow = window.open(
    "https://youtube.com",
    "_blank",
    "width=800,height=600"
  );
  if (newWindow) {
    console.log("New window opened!");
  } else {
    console.log(
      "Failed to open a new window. It might be blocked by a popup blocker."
    );
  }
}

//=====================
// closeCurrentWindow
//=====================

function closeCurrentWindow() {
  window.close();
}

//=====================
// moveWindow
//=====================

function moveWindow() {
  window.moveTo(100, 100);
}
// Note: This method may not work in all browsers due to security restrictions.

//=====================
// resizeWindow
//=====================

function resizeWindow() {
  window.resizeTo(800, 600);
}
// Note: This method may not work in all browsers due to security restrictions.

//=====================
// Get screen information
//=====================
// Get screen information

const width = window.screen.width;
const height = window.screen.height;
const availWidth = window.screen.availWidth;
const availHeight = window.screen.availHeight;
const colorDepth = window.screen.colorDepth;
const pixelDepth = window.screen.pixelDepth;

// Display the screen information
const screenInfo = `
     Screen Width: ${width}px<br>
     Screen Height: ${height}px<br>
     Available Width: ${availWidth}px<br>
     Available Height: ${availHeight}px<br>
     Color Depth: ${colorDepth} bits<br>
     Pixel Depth: ${pixelDepth} bits
 `;

document.getElementById("screen-info").innerHTML = screenInfo;

//=====================
// Redirect to another URL
//=====================

function redirectToGoogle() {
  window.location.href = "https://www.google.com";
}
// redirectToGoogle()

//=====================
// Get the user agent string
//=====================

console.log(navigator.userAgent); // Outputs the user agent of the browser

// Check if the browser is online
if (navigator.onLine) {
  console.log("You are online!");
} else {
  console.log("You are offline!");
}

//=====================
//Window Location
//=====================

// Display various parts of the current location (URL)
const href = window.location.href;
const hostname = window.location.hostname;
const pathname = window.location.pathname;
const protocol = window.location.protocol;

// Display the information
const info = `
    Full URL (href): ${href}<br>
    Hostname: ${hostname}<br>
    Pathname: ${pathname}<br>
    Protocol: ${protocol}
`;
document.getElementById("location-info").innerHTML = info;

// Redirect to Google
function redirectToGoogle() {
  window.location.assign("https://www.google.com");
}

//=====================
// Window Navigator
//=====================

const userAgent = navigator.userAgent;
const language = navigator.language;
const platform = navigator.platform;
const onlineStatus = navigator.onLine ? "Online" : "Offline";
const cookiesEnabled = navigator.cookieEnabled ? "Yes" : "No";
const cpuCores = navigator.hardwareConcurrency;

const info2 = `
        User Agent: ${userAgent}<br>
        Language: ${language}<br>
        Platform: ${platform}<br>
        Online Status: ${onlineStatus}<br>
        Cookies Enabled: ${cookiesEnabled}<br>
        CPU Cores: ${cpuCores}
    `;

document.getElementById("browser-info").innerHTML = info2;

//=====================
// Popup box
//=====================

// Alert example
function showAlert() {
  alert("This is an alert message!");
}

// Confirm example
function showConfirm() {
  let result = confirm("Are you sure you want to proceed?");
  if (result) {
    console.log("User clicked OK");
  } else {
    console.log("User clicked Cancel");
  }
}

// Prompt example
function showPrompt() {
  let name = prompt("Please enter your name:", "Default Name");
  if (name !== null) {
    console.log("User entered: " + name);
  } else {
    console.log("User canceled the prompt.");
  }
}

//=====================
// geolocation
//=====================

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}

//=====================
// Function to set a cookie
//=====================

function setCookie(cname, cvalue, exdays) {
  let now = new Date();
  now.setTime(now.getTime() + exdays * 24 * 60 * 60 * 1000); // Calculate expiration
  let expires = "expires=" + now.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//=====================
// Function to get a cookie
//=====================
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//=====================
// Function to delete a cookie
//=====================

function deleteCookie(cname) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
