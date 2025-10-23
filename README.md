# 🌦️ Weather-App  

A simple, responsive weather web app that displays real-time weather information for any city using the **OpenWeatherMap API**.  
Built with plain HTML, CSS, and JavaScript.  

## 🚀 Live Demo  
Check it out: [Live version](https://ghostrider9211.github.io/weatherApp/)  

## 🧰 Tech Stack  
- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript  
- **API**: OpenWeatherMap API (current weather data)  
- **Deployment**: GitHub Pages  

## 📁 Folder Structure  
```bash
/weatherApp  
├── index.html           ← Main HTML file  
├── style.css            ← Styling for the app  
├── script.js            ← Core JavaScript logic  
└── README.md            ← Project documentation  
```

## ✅ Features  
- Search weather by city name  
- Displays temperature, humidity, wind speed, and condition description  
- Dynamic weather icons that reflect real conditions  
- Fully responsive UI (mobile + desktop)  
- Real-time data fetched from OpenWeatherMap API  

## 🔧 Installation & Setup  
1. Clone this repository:  
   ```bash
   git clone https://github.com/GhostRider9211/weatherApp.git  
   ```
2. Go to the project folder:  
   ```bash
   cd weatherApp  
   ```
3. Open `script.js` and replace the API key placeholder with your OpenWeatherMap API key:  
   ```js
   const apiKey = "YOUR_API_KEY";  
   ```
4. Run locally by opening `index.html` in your browser.  

## 🌐 API Information  
The app uses the **OpenWeatherMap Current Weather API**. Example endpoint:  
```bash
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric  
```
Response includes temperature, humidity, wind speed, weather icon, and description.  

## 💡 Example Usage  
- Search for “London” → displays current temperature, humidity, wind speed, and weather icon.  
- If city name is invalid, show a user-friendly error message (implemented in `script.js`).  

## 🎯 Future Enhancements  
- Add 5-day forecast / hourly forecast  
- Auto-detect user location (geolocation)  
- Dark / light mode toggle  
- Improve error handling and input validation  

## 🤝 Contributing  
Contributions welcome. To contribute:  
1. Fork the repo  
2. Create a branch:  
   ```bash
   git checkout -b feature-yourFeature  
   ```
3. Commit and push:  
   ```bash
   git commit -am "Add yourFeature"  
   git push origin feature-yourFeature  
   ```
4. Open a Pull Request with a description of changes  

## 🧑‍💻 Author  
**GhostRider9211**  
GitHub → https://github.com/GhostRider9211  

## 🪪 License  
Open-source — free to use, modify, and share.  
