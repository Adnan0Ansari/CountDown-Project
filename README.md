# ⏰ Countdown Timer

A simple and elegant countdown timer web application with audio notifications and browser alerts.

## Features

- **Custom Duration**: Set any countdown duration in seconds
- **Audio Feedback**: Plays a ticking sound during countdown and a beep when finished
- **Pause/Resume**: Pause and resume the countdown at any time
- **Reset Function**: Reset the timer to start a new countdown
- **Visual Display**: Large, easy-to-read timer display in MM:SS format
- **Browser Notifications**: Get notified when the timer completes
- **Responsive Design**: Beautiful gradient UI that works on all devices

## Files Structure

```
countdown-timer/
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # Timer logic and functionality
├── alarm.mp3       # Ticking sound (required)
└── beep.ogg        # Completion sound (required)
```

## Setup

1. **Clone or Download** the project files
2. **Add Audio Files**: Place the following audio files in the same directory:
   - `alarm.mp3` - Plays during countdown
   - `beep.ogg` - Plays when timer finishes
3. **Open** `index.html` in your web browser
4. **Allow Notifications** when prompted for the best experience

## How to Use

1. **Enter Duration**: Type the number of seconds for your countdown
2. **Start Timer**: Click the "Start Timer" button
3. **Pause/Resume**: Use the "Pause" button to pause and resume
4. **Reset**: Click "Reset" to stop and clear the current timer
5. **New Timer**: Starting a new timer while one is running will prompt for confirmation

## Controls

- **Start Timer**: Begins countdown with the entered duration
- **Pause/Resume**: Toggles between pausing and resuming the countdown
- **Reset**: Stops the timer and resets the display to 00:00

## Browser Compatibility

Works on all modern browsers that support:
- HTML5 Audio API
- Browser Notifications API
- ES6 JavaScript

## Notes

- The timer plays a ticking sound every second during countdown
- A beep sound plays when the countdown completes
- Browser notification permission is requested on page load
- Starting a new timer while one is active requires confirmation
- Audio files must be present for sound functionality

## Customization

You can customize the appearance by modifying `style.css`:
- Change gradient colors in the `body` background
- Adjust timer font size in `.timer` class
- Modify button colors and hover effects
- Change border radius for different rounded corner styles
