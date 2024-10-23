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
