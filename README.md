# Event Management Dashboard

## Project Overview

This project is a responsive **Event Management Dashboard** built based on a Figma design. The dashboard allows users to view key event statistics, news updates, and event details with interactive features like a collapsible sidebar, overview cards, an interactive chart, and a modal pop-up. It is designed for both web and mobile, with a dark mode feature for enhanced user experience.

## Features

### 1. **Responsive Design**

- The dashboard is fully responsive, adapting seamlessly between desktop and mobile screen sizes.
- On mobile devices, the sidebar transforms into a collapsible hamburger menu for easier navigation.

### 2. **Collapsible Sidebar Navigation**

- Sidebar can be expanded to show both icons and labels or collapsed to show icons only.
- The sidebar remains functional across both web and mobile views.

### 3. **Overview Cards**

- Displays key metrics such as:
  - Total Events
  - Active Speakers
  - Revenue
- Hover animations are included for a better user experience.

### 4. **Interactive Chart**

- The dashboard includes an event statistics chart powered by **Chart.js**.
- The chart is fully responsive and interactive, providing users with visual insights into event performance.

### 5. **Carousel Slider (Latest News & Updates)**

- A carousel to display the latest news and updates related to events.
- Features both auto-slide functionality and manual navigation arrows for switching between news items.

### 6. **Modal Pop-Up**

- Clicking on an event opens a modal window displaying detailed information about the event, including a description and the list of attendees.

### 7. **Dark Mode (Bonus)**

- Users can toggle between light and dark modes using a button.
- The background, text colors, and other styles dynamically adjust based on the mode selected.

## Technologies Used

- **HTML**: Provides the structure of the webpage.
- **CSS**: Ensures the dashboard follows the design and is fully responsive.
- **JavaScript**: Powers the interactivity, such as the collapsible sidebar, carousel, modal, and chart.
- **Chart.js**: Used to create the interactive event statistics chart.
- **Next.js**: Used to speed development process.
- **TailwindCss**: Used to create the interactive and switch theme.

## How to View the Project

The project has been deployed to a hosting platform and can be viewed at the following URL:

**[Live Demo](#)**

## File Structure

```
/project-root
    /js
    /css
        styles.css  # Styles for the entire project
        script.js   # JavaScript code for interactivity and functionality
    /index.html     # Main HTML file for the dashboard
```

## How to Run Locally

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
2. Navigate into the project folder:
   ```bash
   cd project-root
   ```
3. Open `index.html` in your browser to view the dashboard.

## Additional Notes

- Placeholder data is used in areas where real data is not available.
- The design strictly follows the Figma mockup, ensuring no improvisation or deviations from the original layout.
- Clean, semantic HTML and well-structured CSS have been used to ensure code readability and maintainability.

## Future Enhancements

- Real data integration for the chart and event details.
- Further improvements to dark mode styling.

---

Thank you for reviewing this project!
