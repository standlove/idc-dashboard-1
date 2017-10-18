
Day 1 
[] - Setup Plant Data Service
[] - Map Page
[] - List Page
[] - Sidbar
  [] - Equipment Component
  [] - Performance Component

Day 2 

Day 3

Day 4

Requirements

Plant Map View:
* 1_a_Dashboard_Plant-Map.png - the entry screen
* it's the selection page user gets to see before jumping into the actual dashboard page
* The plants are shown on the map, based upon the plant's yield value, the plant is either displayed in green (good yield) or red (bad yield).
* Hover on the plant icon, the popup like 1_d_Dashboard_Plant-Map_Hover.png is displayed
* Click on the plant icon, the popup like 1_e_Dashboard_Plant-Map_Equipment.png is displayed, and more details are displayed on the left sidebar as well. 
* 1_e_Dashboard_Plant-Map_Equipment.png / 1_f_Dashboard_Plant-Map_Product.png / 1_g_Dashboard_Plant-Map_Batch.png - The equipment section following this structure: equipment (or vessel) -> product -> batch, user can select any batch, and click Submit button to go to the MIQ-View Dashboard page. 
* Click the +/- to zoom out/in the map. 
* 1_c_Dashboard_Plant-Map_Search.png - type in the search textbox, and a dropdown with matched plants are displayed, click on any one highlights the plant like: 1_d_Dashboard_Plant-Map_Hover.png

Plant List View
* 1_b_Dashboard_Plant-List.png
* User can click the Map/List icon to switch between the Map view and list view
* The table supports paging and sorting
* 1_h_Dashboard_Plant-List_Hover.png & 1_i_Dashboard_Plant-List_Details.png are not needed (these have been removed from MarvelApp, in case they are still in design documents, it's kept here). 

MIQ-View Dashboard page:
* 2_a - 2_f - it's the MIQ-View dashboard page. 
* It will show dialy, weekly, monthly graph for the selected batch. 
* The yield value on the Y-axis is shown in blue (good yield) or red (bad yield)
* Click on the left or right arrow on the X-axis will move the graph to earlier or later dates. 
* The Top-5 products and Drop history are shown on the right sidebar
* Click the down arrow on the Drop History widget will earlier data points, and a up arrow should be displayed to move to latest data points.
* Both line-graph and bar-graph are required, and it's default to line-graph.
* Hover on any point or bar on the graph will show the yield value. 
* Click any point or bar on the graph will go to the Quadrant Dashboard page, the transition popup is like: 2_f_Dashboard_Monthly_Loading.png. 
* updates: http://take.ms/6AEqb 
** Remove the breadcrumb, and replace it with "MIQ View Dashboard" text like the entry screen.
** Replace the Plant/Product/Batch/Vessel tabs with breadcrumb with format: Plant > Equipment > Product > Batch, and you should use the actual selected values from the incoming screen
* updates: http://take.ms/Dk5B1
** The "Top 5 Product Drop" popup is not needed. Just show the yield value when user hovers over it. 
* updates: http://take.ms/gFbvn
** The year should be a dropdown list


Quadrant Dashboard page:
* 2_g
* It has 4 widgets: MIQ View, Process Mining, Decision Tree, and Alerts and Notifications.
* Again the breadcrumb should be replaced with "Dashboard" text. And the "Plaint/product/Batch/Vessel" tabs should be replaced with the breadcrumb in MIQ View. 
* Click on the zoom in/out icon, it works like: 2_w_Dashboard_Zoom.png, it should work for all widgets. 
* updates: http://take.ms/1M0NH
** Need to add one more item, to go back to the 4-quadrant dashboard


MIQ View inside Quadrant Dashboard page:
* 2_g - 2_i
* It should work like the MIQ-View dashboard above (with no right sidebar)


Process Mining
* 2_k
* It shows the process steps contributing to performance drop with context information of product, shift, line
* Hover on the process step, the popup like 2_x is displayed
* The RankList table has the following columns: Product ID, Step ID, Vessel ID, Case ID, Parameter Name, Parameter Rank, Parameter Value. (The last two are not shown in design, and that's why it has horizontal scroll bar, and they are both integer values).  And note that the Vessel ID is empty in the UI. 
* Click the backward/play/forward buttons will move along the process line. 


Decision Tree
* 2_m - 2_p
* The first 3 ranks of Variable Ranks and Rules tables should be highlighted
* The rules table has following columns: Failure rule ranking, Rule, Probability of Failure If TRUE, Number of Failed Samples Violating Rule, Number of Good Samples Violating Rule, % of Failured Samples Violating Rule, % of Good Samples Violating Rule. (The last 4 are not shown in design, and that's why it has horizontal scroll bar). 
* Click on the Rule in rules table, popup like 2_o is displayed to show the variable trend over the time. 
* In decision tree, the Eles should be Else. 

Alerts and Notifications
* 2_r - 2_u
* It shows the alerts and notifications
* User is able to send the message
* updates: http://take.ms/S99zv
** Remove the sort button, and add a search textbox to filter the alerts and notifications. 

The mobile version is also in scope. The UI design doesn't provide all mobile screens, but the UI prototype should cover all the pages as Desktop. 
Note that not all screens are mentioned above, but they are should be easy to understand. 
