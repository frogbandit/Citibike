import csv
import glob
import json

def parseCSV():
    bikeData = json.load(open("bikedata.txt"))
    # bikeData = {}
    # bikeData['month'] = {}
    # months = ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February']
    # path = "../Citibike/201307-201402-citibike-tripdata/*.csv"
    #
    # index = 0
    # for fname in glob.glob(path):
    #     with open(fname, 'rb') as csvfile:
    #         print("Reading:      " + fname)
    #         m = months[index]
    #         bikeData['month'][m] = {}
    #         spamreader = csv.reader(csvfile)
    #         first = True
    #         l = ['tripduration', 'starttime', 'stoptime', 'start station id', 'start station name', 'start station latitude', 'start station longitude', 'end station id', 'end station name', 'end station latitude', 'end station longitude', 'bikeid', 'usertype', 'birth year', 'gender']
    #
    #         for row in spamreader:
    #             if first:
    #                 for label in row:
    #                     if label not in bikeData['month'][m]:
    #                         bikeData['month'][m][label] = []
    #                         # bikeData[label] = []
    #                 first = False
    #             else:
    #                 for i in range(0, len(row)):
    #                     bikeData['month'][m][l[i]].append(row[i])
    #                     # bikeData[l[i]].append(row[i])
    #
    #
    #         print("Done reading: " + fname)
    #         index += 1
    #
    # open("bikedata.txt", 'w').close()
    # json.dump(bikeData, open("bikedata.txt",'w'))
    # print("Done writing to file.")

    mostFrequentedPlace(bikeData)
    # averageDuration(bikeData)
    # trips(bikeData)
    # gender(bikeData)
    # tripdurationgender(bikeData)

# format
# {'month': {'July': {'birth year': ['\\N'], 'end station longitude': ['-73.98165557'], 'bikeid': ['16950'], 'start station id': ['164'], 'start station longitude': ['-73.97032517'], 'end station latitude': ['40.73221853'], 'end station name': ['1 Ave & E 15 St'], 'start station latitude': ['40.75323098'], 'end staxtion id': ['504'], 'usertype': ['Customer'], 'stoptime': ['2013-07-01 00:10:34'], 'starttime': ['2013-07-01 00:00:00'], 'gender': ['0'], 'tripduration': ['634'], 'start station name': ['E 47 St & 2 Ave']}}}

def tripdurationgender(bikeData):
    genderList = {'Unknown':[], 'Male':[], 'Female':[]}

    months = ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February']
    for month in months:
        genders = bikeData['month'][month]['gender']
        timeduration = bikeData['month'][month]['tripduration']
        unknown = 0
        unknownCount = 0
        male = 0
        maleCount = 0
        female = 0
        femaleCount = 0
        for i in range(0, len(genders)):
            if genders[i] == '0':
                unknown += int(timeduration[i])
                unknownCount += 1
            elif genders[i] == '1':
                male += int(timeduration[i])
                maleCount += 1
            elif genders[i] == '2':
                female += int(timeduration[i])
                femaleCount += 1



        genderList['Unknown'].append(unknown/float(unknownCount)/float(60))
        genderList['Male'].append(male/float(maleCount)/float(60))
        genderList['Female'].append(female/float(femaleCount)/float(60))

    print genderList
    open("gendertripduration.txt", 'w').close()
    json.dump(genderList, open("gendertripduration.txt",'w'))
    print("Done writing average genders bike time duration to file.")

def gender(bikeData):
    genderList = {'Unknown':[], 'Male':[], 'Female':[]}

    months = ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February']
    for month in months:
        genders = bikeData['month'][month]['gender']
        unknown = 0
        male = 0
        female = 0
        for gender in genders:
            if gender == '0':
                unknown += 1
            elif gender == '1':
                male += 1
            elif gender == '2':
                female += 1

        genderList['Unknown'].append(unknown)
        genderList['Male'].append(male)
        genderList['Female'].append(female)


    open("gender.txt", 'w').close()
    json.dump(genderList, open("gender.txt",'w'))
    print("Done writing genders to file.")




def trips(bikeData):
    trips = {}
    months = ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February']
    for month in months:
        trips[month] = len(bikeData['month'][month]['tripduration'])

    t = {}
    t['Trips per Month'] = []
    for month in months:
        t['Trips per Month'].append(trips[month])
    open("tripsPerMonth.txt", 'w').close()
    json.dump(t, open("tripsPerMonth.txt",'w'))
    print("Done writing total trips per month to file.")


def averageDuration(bikeData):
    averageDuration = {}
    months = ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February']
    for month in months:
        averageDuration[month] = 0
        durations = bikeData['month'][month]['tripduration']
        total = 0
        count = 0
        for duration in durations:
            total += int(duration)
            count += 1

        averageDuration[month] = total/float(count)/float(60)

    ad = {}
    ad['Average Duration'] = []
    for month in months:
        ad['Average Duration'].append(averageDuration[month])
    open("averageDuration.txt", 'w').close()
    json.dump(ad, open("averageDuration.txt",'w'))
    print("Done writing average duration to file.")


def mostFrequentedPlace(bikeData):
    frequentedPlace = {}
    counts = {}
    months = ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February']
    monthstemp = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb']
    count = 0
    for month in months:
        monthcounts = {}
        start_station = bikeData['month'][month]['start station name']
        end_station = bikeData['month'][month]['end station name']
        for i in start_station:
            monthcounts[i] = monthcounts.get(i, 0) + 1
        for i in end_station:
            monthcounts[i] = monthcounts.get(i, 0) + 1

        topten = sorted(monthcounts.iteritems(), key=lambda (k, v): (-v, k))[:5]
        frequentedPlace[monthstemp[count]] = topten
        count += 1

    open("mostfrequentedplace.txt", 'w').close()
    json.dump(frequentedPlace, open("mostfrequentedplace.txt",'w'))
    print("Done writing most frequented place to file.")


parseCSV()
