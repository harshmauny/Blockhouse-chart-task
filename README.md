
# Blockhouse-chart-task

Web Development Coding Test: Next.js Application with Django API Integration 




## Screenshots

![image](https://github.com/user-attachments/assets/ebfe55ef-3c24-4444-8285-18fb4dd8a509)

## Run Locally

### Prerequisites
1. Install Python
Follow the steps from the below reference document based on your Operating System. Reference: https://docs.python-guide.org/starting/installation/

2. Install Node and npm
Use https://nodejs.org/en for reference

### Steps


Clone the project or download the zip

```bash
  git clone https://link-to-project
```

Genegrate a virtual environment
```bash
  pip install venev
  python -m venv env
```

Activate the virtual env
```bash
  .\env\Scripts\activate
```

Go to the backend directory

```bash
  cd ./backend/
```
Install dependencies

```bash
  pip install -r requirements.txt
```

Start the server on one terminal

```bash
  py manage.py runserver
```

open a new terminal in same root folder and Go to the Frontend directory

```bash
  cd ./frontend/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
## Tools Used

recharts - https://recharts.org/en-US/
CanvasJs - https://canvasjs.com/react-charts/candlestick-chart/
material-tailwind - https://www.material-tailwind.com/
axios - https://axios-http.com/docs/intro

## Approch and Thought process

I approched this task with a common pattern used in web applications where the frontend and beckend is seperated and used a RESTful API design. The frontend has a component -based, responsive design.

I started with setting up the backend by initializing a simple django project with single app "main" to handle the necessary end points. Each chart type is assigned its own end point as stated in the instructions (HTTP GET method) and return data in a JSON format. CORS was enabled to allow the Next.js frontend to make requests to the Django backend.

Next comes the frontend initailization and project setup. Here I used axios to fetch the data from API endpoints created previously. I have used multiple libraries for charts as mentions in tools section. I created seperate components for each chart to make it reusable and also a util file to handle data processing  stuff. I have also made sure that if there is an error while fetching the data a error pacg is shown insead of empty graphs. In addition, I have used tailwind CSS for styling. 

Best practices included
* Used typescript
* Code organization
* security measures by using CORS
* error handling

