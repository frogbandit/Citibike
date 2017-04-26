# Citibike
Citibike Project for **IEOR4572 Python Data Analytics**
Clara Cheng, Kevin Ye, James Xue

## Application Information and Development
For this application, we built it using **Python/Flask**. We parsed the data using several Python scripts, and loaded it via JSON using jQuery. Finally, the visualizations were done using **Highcharts**, a popular library for interactive Javascript charts. 

Currently, our application answers the following questions:
* What is the average duration of a bike trip to per month? Per year?
* What are the number of trips per month? Per year?
* Which gender bikes more?

Our application uses bike data for the dates between July 2013 and February 2014.

## Citibike Data Information
The [Citibike website](https://www.citibikenyc.com/system-data) publishes downloadable files of Citi Bike trip data. The data includes:
* Trip Duration (seconds)
* Start Time and Date
* Stop Time and Date
* Start Station Name
* End Station Name
* Station ID
* Station Lat/Long
* Bike ID
* User Type (Customer = 24-hour pass or 7-day pass user; Subscriber = Annual Member)
* Gender (Zero=unknown; 1=male; 2=female)
* Year of Birth

This data has been processed to remove trips that are taken by staff as they service and inspect the system, trips that are taken to/from any of our “test” stations (which we were using more in June and July 2013), and any trips that were below 60 seconds in length (potentially false starts or users trying to re-dock a bike to ensure it's secure).
