# QR Code Generator (Node.js)

A simple Node.js CLI project that generates a QR code image from a user-provided URL, and saves the URL into a text file.

## 📌 Features

- Prompt user to input a URL via terminal
- Generate a QR code image (`qr_img.png`) from the input
- Save the original URL to a file (`URL.txt`)
- Built with:
  - [Node.js](https://nodejs.org/)
  - [Inquirer](https://www.npmjs.com/package/inquirer) for CLI input
  - [qr-image](https://www.npmjs.com/package/qr-image) for QR generation
  - [fs](https://nodejs.org/api/fs.html) for file system operations
