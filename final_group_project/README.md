# Final Group Project 

**Prepared by Jinho Lee (jl5027), Jiawen Li (jl5303), Shenqi Zhai (sz2805), Wei Pan (wp2251)**

Opening Presenter: Jinho Lee (jl5027)
<The presentation Powerpoint is unavailable though more detailed descriptions of the final product are present below>

We designed an interface that helps Columbia students easily reserve seats in various libraries on campus. <br>
We thought that, if our users have ever been college students, they must understand how harrowing of experiences it is getting a seat in a library.<br>
To us, the developers, it felt like it was more morbid in Columbia than any other colleges to secure a seat in a school library due to the favorable geological location of Columbia University in New York City and its massive student body. <br>
However, the problem was not with the number of the libraries on campus. There are plenty of seats and libraries. The problem, we thought, was lack of system that controls population flow.<br>
For example, even though there are more than five libraries on campus, many students leave their stuff on their newly, or previously-secured seats unattended, so, during the exam seasons, some sort of inextricable bottleneck effect in the number of the seats in the libraries happens (and fights really do happen over seats here and there in the libraries). <br>
We thought this inevitable mayhem could be solved by a check-in and out system in place that can be implemented in the forms of a physical kiosk, an application and a web-based platform.<br>
- JetBlue's check-in kiosks at JFK Airport
- <img width="50%" height="50%" src="https://user-images.githubusercontent.com/60580427/125078472-658cb500-e0fd-11eb-8d3c-3dbd3a7789d1.jpeg">

Some libraries all over the world are already implementing this idea and we tried to improve it in terms of user experiences and accessibility (with better visual flares as a bonus).<br>
The libraries on campus including Butler library have their own reservation system for conference rooms, i.e.) bigger rooms where meetings are allowed, but not for their seats and we chose a library in China that uses this idea to improve the interface further.<br>
- The reservation system in place for Butler Library:
- <img width="50%" height="50%" alt="Screen Shot 2021-07-09 at 9 25 18 PM" src="https://user-images.githubusercontent.com/60580427/125077957-b4861a80-e0fc-11eb-9369-ab8dc856d5fd.png">
- That of the Chinese library mentioned above:
- <img width="626" alt="Screen Shot 2021-07-09 at 9 45 18 PM" src="https://user-images.githubusercontent.com/60580427/125079833-06c83b00-e0ff-11eb-866e-3e6edeb3071d.png">

We focused on seamless accessability that starts from users' phones or computers and ends at the kiosk machines that we were to place at the thresholds of the libraries. <br>
The core fiber of our interface is simple. <br>
Columbia students reserve their seats through the app on their phones or the platform on their computers, get a confirmation QR code, and scan it on the kiosks at the chosen libraries. <br>
If some don't have any medium through which to make a reservation? They simply can walk up to the kiosks, and have their seats secured just like that.<br>
But, as I mentioned above, there is a sub-problem that requires imperative attention to. <br>
How do you give out penalties?<br>
You see, fights often occur because of those who "occupy" their seats with their belongings. They just leave their things on their seats and do their stuff outside since they are too afraid of losing their precious seats.<br>
We had to come up with solutions that would minimize that type of behavior among users.<br>
What we had to do was extremely simple. Just give them 3 strikes. <br>
We give each student 3 strikes, each of which would go off when the students leave their seats for more than an hour.<br>
During those "grace" hours, students may tend to their private business outside of the libraries, such as having a meal, doing a quick exercise, or having a phone call. <br>
Each strike doesn't go off every time the students leave their seats. It goes off when they used up all the minutes of each hour because it would be unfair to the students if a strike goes off when they left their seats only for a ten-minute phone call.
  
But, the main question is, how do we track if the students are out of the libraries?<br>
Here, the biggest problem of the application lies. We are forced to track the users' movement at least while in the libraries so that we know for sure some users got out of their libraries. This will raise privacy concerns.

We went through many thinking processes such as group brainstormings, regular meetings, and individual researches to reach the final product, detailed experiecnes of which are specifically denoted on the documents below.

**[UI Final Report](https://github.com/JinhoLee93/User_Interface_Design/blob/main/final_group_project/UI%20FINAL%20REPORT.pdf)**
- The report contains various and specific information of the app design and our thought-process that went into the project.
- Every group member had to participate in each task at hand, but they were responsible for organizing the structures of the topics of their choices. 
  - I was in charge of organizing Comparative Analysis, Risks to Mitigate, Project Task, and Future Plans.

The interface design contains two separate parts, one for the smartphone app and the web-based platform and the other for the physical check-in and out kiosk.
We created prototypes of the interfaces for each part using [Figma](https://www.figma.com/) so that what we have in our mind can be visualized.
  
**I encourage to see the files below as whole for the intended seamless experience**

**[FIGMA (APP)](https://github.com/JinhoLee93/User_Interface_Design/blob/main/final_group_project/FIGMA%20(APP).pdf)**
- Contains the intended visuals for the interface design of the app and the platform. 
- Point on focus: log-in process through the official Columbia website and reservation map

**[FIGMA (KIOSK)](https://github.com/JinhoLee93/User_Interface_Design/blob/main/final_group_project/FIGMA%20(KIOSKS).pdf)**
- Contains the intended visuals for the interface design of the kiosk.
- Point on focus: QR reader and seamless transition from app or platform to kiosk
