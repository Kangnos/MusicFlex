import re
HiphopList = open("Musics/HiphopList", "w")
Hiphop_PlatformList_a = open("Maker/Hiphop", "r")
Hiphop_PlatformList = Hiphop_PlatformList_a.read();
Hiphop_PlatformList = Hiphop_PlatformList.strip()
Hiphop_PlatformList = re.split(":|\n|:\n", Hiphop_PlatformList)

PopList = open("Musics/PopList", "w")
Pop_PlatformList_a = open("Maker/Pop", "r")
Pop_PlatformList = Pop_PlatformList_a.read();
Pop_PlatformList = Pop_PlatformList.strip()
Pop_PlatformList = re.split(":|\n|:\n", Pop_PlatformList)

Musicdata = ["", ""]
<<<<<<< HEAD

artistnum = 0
vidnum = 1
=======
vidnum = 1
artistnum = 0
>>>>>>> caca75e1b75aabacd511ca36d388f96aab011a54
musicnum = 2

janre = [Hiphop_PlatformList, Pop_PlatformList]

<<<<<<< HEAD
for j in range(0,(len(janre))):
    for i in range(len(janre[j])//3): # This part is the problem that I have to fix today or tomorrow. I can nailed it!
        if i == 0: 
            Musicdata[j] += ("{\n" + "    artist: " + '"' + janre[j][artistnum] + '",\n' + "    musictitle: " + '"' + janre[j][vidnum] + '",\n' + "    vid: " + '"' + janre[j][musicnum] + '"' + "\n},")
=======
for j in range(0,len(janre)):
    print(j)
    for i in range(0, (len(janre[j])// 3)):
        if i == 0:  
            Musicdata[j] += "{\n" + "    artist: " + '"' + janre[j][artistnum] + '",\n' + "    musictitle: " + '"' + janre[j][vidnum] + '",\n' + "    vid: " + '"' + janre[j][musicnum] + '"' + "\n},"
>>>>>>> caca75e1b75aabacd511ca36d388f96aab011a54
        else:
            vidnum += 3
            artistnum += 3
            musicnum += 3
<<<<<<< HEAD
            Musicdata[j] += ("\n"+"{\n" + "    artist: " + '"' + janre[j][artistnum] + '",\n' + "    musictitle: " + '"' + janre[j][vidnum] + '",\n' + "    vid: " + '"' + janre[j][musicnum] + '"' + "\n},")
=======
            Musicdata[j] += "\n"+"{\n" + "    artist: " + '"' + janre[j][artistnum] + '",\n' + "    musictitle: " + '"' + janre[j][vidnum] + '",\n' + "    vid: " + '"' + janre[j][musicnum] + '"' + "\n},"
>>>>>>> caca75e1b75aabacd511ca36d388f96aab011a54

    if j == 0:
        HiphopList.write(Musicdata[0])
    if j == 1:
        PopList.write(Musicdata[1])
<<<<<<< HEAD
    print(Musicdata)
    print(Musicdata[0])
=======
    print(Hiphop_PlatformList)
    print(Pop_PlatformList)
    print(Musicdata[0])
    print(Musicdata[1])
>>>>>>> caca75e1b75aabacd511ca36d388f96aab011a54
