/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 20.0, "series": [{"data": [[0.0, 6.0], [0.1, 6.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 6.0], [1.2, 6.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 6.0], [1.9, 6.0], [2.0, 6.0], [2.1, 6.0], [2.2, 6.0], [2.3, 6.0], [2.4, 6.0], [2.5, 6.0], [2.6, 6.0], [2.7, 6.0], [2.8, 6.0], [2.9, 6.0], [3.0, 6.0], [3.1, 6.0], [3.2, 6.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 6.0], [3.7, 6.0], [3.8, 6.0], [3.9, 6.0], [4.0, 6.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 6.0], [4.5, 6.0], [4.6, 6.0], [4.7, 6.0], [4.8, 6.0], [4.9, 6.0], [5.0, 6.0], [5.1, 6.0], [5.2, 6.0], [5.3, 6.0], [5.4, 6.0], [5.5, 6.0], [5.6, 6.0], [5.7, 6.0], [5.8, 6.0], [5.9, 6.0], [6.0, 6.0], [6.1, 6.0], [6.2, 6.0], [6.3, 6.0], [6.4, 6.0], [6.5, 6.0], [6.6, 6.0], [6.7, 6.0], [6.8, 6.0], [6.9, 6.0], [7.0, 6.0], [7.1, 6.0], [7.2, 6.0], [7.3, 6.0], [7.4, 6.0], [7.5, 6.0], [7.6, 6.0], [7.7, 6.0], [7.8, 6.0], [7.9, 6.0], [8.0, 6.0], [8.1, 6.0], [8.2, 6.0], [8.3, 6.0], [8.4, 6.0], [8.5, 6.0], [8.6, 6.0], [8.7, 6.0], [8.8, 6.0], [8.9, 6.0], [9.0, 6.0], [9.1, 6.0], [9.2, 6.0], [9.3, 6.0], [9.4, 6.0], [9.5, 6.0], [9.6, 6.0], [9.7, 7.0], [9.8, 7.0], [9.9, 7.0], [10.0, 7.0], [10.1, 7.0], [10.2, 7.0], [10.3, 7.0], [10.4, 7.0], [10.5, 7.0], [10.6, 7.0], [10.7, 7.0], [10.8, 7.0], [10.9, 7.0], [11.0, 7.0], [11.1, 7.0], [11.2, 7.0], [11.3, 7.0], [11.4, 7.0], [11.5, 7.0], [11.6, 7.0], [11.7, 7.0], [11.8, 7.0], [11.9, 7.0], [12.0, 7.0], [12.1, 7.0], [12.2, 7.0], [12.3, 7.0], [12.4, 7.0], [12.5, 7.0], [12.6, 7.0], [12.7, 7.0], [12.8, 7.0], [12.9, 7.0], [13.0, 7.0], [13.1, 7.0], [13.2, 7.0], [13.3, 7.0], [13.4, 7.0], [13.5, 7.0], [13.6, 7.0], [13.7, 7.0], [13.8, 7.0], [13.9, 7.0], [14.0, 7.0], [14.1, 7.0], [14.2, 7.0], [14.3, 7.0], [14.4, 7.0], [14.5, 7.0], [14.6, 7.0], [14.7, 7.0], [14.8, 7.0], [14.9, 7.0], [15.0, 7.0], [15.1, 7.0], [15.2, 7.0], [15.3, 7.0], [15.4, 7.0], [15.5, 7.0], [15.6, 7.0], [15.7, 7.0], [15.8, 7.0], [15.9, 7.0], [16.0, 7.0], [16.1, 7.0], [16.2, 7.0], [16.3, 7.0], [16.4, 7.0], [16.5, 7.0], [16.6, 7.0], [16.7, 7.0], [16.8, 7.0], [16.9, 7.0], [17.0, 7.0], [17.1, 7.0], [17.2, 7.0], [17.3, 7.0], [17.4, 7.0], [17.5, 7.0], [17.6, 7.0], [17.7, 7.0], [17.8, 7.0], [17.9, 7.0], [18.0, 7.0], [18.1, 7.0], [18.2, 7.0], [18.3, 7.0], [18.4, 7.0], [18.5, 7.0], [18.6, 7.0], [18.7, 7.0], [18.8, 7.0], [18.9, 7.0], [19.0, 7.0], [19.1, 7.0], [19.2, 7.0], [19.3, 7.0], [19.4, 7.0], [19.5, 7.0], [19.6, 7.0], [19.7, 7.0], [19.8, 7.0], [19.9, 7.0], [20.0, 7.0], [20.1, 7.0], [20.2, 7.0], [20.3, 7.0], [20.4, 7.0], [20.5, 7.0], [20.6, 7.0], [20.7, 7.0], [20.8, 7.0], [20.9, 7.0], [21.0, 7.0], [21.1, 7.0], [21.2, 7.0], [21.3, 7.0], [21.4, 7.0], [21.5, 7.0], [21.6, 7.0], [21.7, 7.0], [21.8, 7.0], [21.9, 7.0], [22.0, 7.0], [22.1, 7.0], [22.2, 7.0], [22.3, 7.0], [22.4, 7.0], [22.5, 7.0], [22.6, 7.0], [22.7, 7.0], [22.8, 7.0], [22.9, 7.0], [23.0, 7.0], [23.1, 7.0], [23.2, 7.0], [23.3, 7.0], [23.4, 7.0], [23.5, 7.0], [23.6, 7.0], [23.7, 7.0], [23.8, 7.0], [23.9, 7.0], [24.0, 7.0], [24.1, 7.0], [24.2, 7.0], [24.3, 7.0], [24.4, 7.0], [24.5, 7.0], [24.6, 7.0], [24.7, 7.0], [24.8, 7.0], [24.9, 7.0], [25.0, 7.0], [25.1, 7.0], [25.2, 7.0], [25.3, 7.0], [25.4, 7.0], [25.5, 7.0], [25.6, 7.0], [25.7, 7.0], [25.8, 7.0], [25.9, 7.0], [26.0, 7.0], [26.1, 7.0], [26.2, 7.0], [26.3, 7.0], [26.4, 7.0], [26.5, 7.0], [26.6, 7.0], [26.7, 7.0], [26.8, 7.0], [26.9, 7.0], [27.0, 7.0], [27.1, 7.0], [27.2, 7.0], [27.3, 7.0], [27.4, 7.0], [27.5, 7.0], [27.6, 7.0], [27.7, 7.0], [27.8, 7.0], [27.9, 7.0], [28.0, 7.0], [28.1, 7.0], [28.2, 7.0], [28.3, 7.0], [28.4, 7.0], [28.5, 7.0], [28.6, 7.0], [28.7, 7.0], [28.8, 7.0], [28.9, 7.0], [29.0, 7.0], [29.1, 7.0], [29.2, 7.0], [29.3, 7.0], [29.4, 7.0], [29.5, 7.0], [29.6, 7.0], [29.7, 7.0], [29.8, 7.0], [29.9, 7.0], [30.0, 7.0], [30.1, 7.0], [30.2, 7.0], [30.3, 7.0], [30.4, 7.0], [30.5, 7.0], [30.6, 7.0], [30.7, 7.0], [30.8, 7.0], [30.9, 7.0], [31.0, 7.0], [31.1, 7.0], [31.2, 7.0], [31.3, 7.0], [31.4, 7.0], [31.5, 7.0], [31.6, 7.0], [31.7, 7.0], [31.8, 7.0], [31.9, 7.0], [32.0, 7.0], [32.1, 7.0], [32.2, 7.0], [32.3, 7.0], [32.4, 7.0], [32.5, 7.0], [32.6, 7.0], [32.7, 7.0], [32.8, 7.0], [32.9, 7.0], [33.0, 7.0], [33.1, 7.0], [33.2, 7.0], [33.3, 7.0], [33.4, 7.0], [33.5, 7.0], [33.6, 7.0], [33.7, 7.0], [33.8, 7.0], [33.9, 7.0], [34.0, 7.0], [34.1, 7.0], [34.2, 7.0], [34.3, 7.0], [34.4, 7.0], [34.5, 7.0], [34.6, 7.0], [34.7, 7.0], [34.8, 7.0], [34.9, 7.0], [35.0, 7.0], [35.1, 7.0], [35.2, 7.0], [35.3, 7.0], [35.4, 7.0], [35.5, 7.0], [35.6, 7.0], [35.7, 7.0], [35.8, 7.0], [35.9, 7.0], [36.0, 7.0], [36.1, 7.0], [36.2, 7.0], [36.3, 7.0], [36.4, 7.0], [36.5, 7.0], [36.6, 7.0], [36.7, 7.0], [36.8, 7.0], [36.9, 7.0], [37.0, 7.0], [37.1, 7.0], [37.2, 7.0], [37.3, 7.0], [37.4, 7.0], [37.5, 7.0], [37.6, 7.0], [37.7, 7.0], [37.8, 7.0], [37.9, 7.0], [38.0, 7.0], [38.1, 7.0], [38.2, 7.0], [38.3, 7.0], [38.4, 7.0], [38.5, 7.0], [38.6, 7.0], [38.7, 7.0], [38.8, 7.0], [38.9, 7.0], [39.0, 7.0], [39.1, 7.0], [39.2, 7.0], [39.3, 7.0], [39.4, 7.0], [39.5, 7.0], [39.6, 7.0], [39.7, 7.0], [39.8, 7.0], [39.9, 7.0], [40.0, 7.0], [40.1, 7.0], [40.2, 7.0], [40.3, 7.0], [40.4, 7.0], [40.5, 7.0], [40.6, 7.0], [40.7, 7.0], [40.8, 7.0], [40.9, 7.0], [41.0, 7.0], [41.1, 7.0], [41.2, 7.0], [41.3, 7.0], [41.4, 7.0], [41.5, 7.0], [41.6, 7.0], [41.7, 7.0], [41.8, 7.0], [41.9, 7.0], [42.0, 7.0], [42.1, 7.0], [42.2, 7.0], [42.3, 7.0], [42.4, 7.0], [42.5, 7.0], [42.6, 7.0], [42.7, 7.0], [42.8, 7.0], [42.9, 7.0], [43.0, 7.0], [43.1, 7.0], [43.2, 7.0], [43.3, 7.0], [43.4, 7.0], [43.5, 7.0], [43.6, 7.0], [43.7, 7.0], [43.8, 7.0], [43.9, 7.0], [44.0, 7.0], [44.1, 7.0], [44.2, 7.0], [44.3, 7.0], [44.4, 7.0], [44.5, 7.0], [44.6, 7.0], [44.7, 7.0], [44.8, 7.0], [44.9, 7.0], [45.0, 7.0], [45.1, 7.0], [45.2, 7.0], [45.3, 7.0], [45.4, 7.0], [45.5, 7.0], [45.6, 7.0], [45.7, 7.0], [45.8, 7.0], [45.9, 7.0], [46.0, 7.0], [46.1, 7.0], [46.2, 7.0], [46.3, 7.0], [46.4, 7.0], [46.5, 7.0], [46.6, 7.0], [46.7, 7.0], [46.8, 7.0], [46.9, 7.0], [47.0, 7.0], [47.1, 7.0], [47.2, 7.0], [47.3, 7.0], [47.4, 7.0], [47.5, 7.0], [47.6, 7.0], [47.7, 7.0], [47.8, 7.0], [47.9, 7.0], [48.0, 7.0], [48.1, 7.0], [48.2, 7.0], [48.3, 7.0], [48.4, 7.0], [48.5, 7.0], [48.6, 7.0], [48.7, 7.0], [48.8, 7.0], [48.9, 7.0], [49.0, 7.0], [49.1, 7.0], [49.2, 7.0], [49.3, 7.0], [49.4, 7.0], [49.5, 7.0], [49.6, 7.0], [49.7, 7.0], [49.8, 7.0], [49.9, 7.0], [50.0, 7.0], [50.1, 7.0], [50.2, 7.0], [50.3, 7.0], [50.4, 7.0], [50.5, 7.0], [50.6, 7.0], [50.7, 7.0], [50.8, 7.0], [50.9, 7.0], [51.0, 7.0], [51.1, 7.0], [51.2, 7.0], [51.3, 7.0], [51.4, 7.0], [51.5, 7.0], [51.6, 7.0], [51.7, 7.0], [51.8, 7.0], [51.9, 7.0], [52.0, 7.0], [52.1, 7.0], [52.2, 7.0], [52.3, 7.0], [52.4, 7.0], [52.5, 7.0], [52.6, 7.0], [52.7, 7.0], [52.8, 7.0], [52.9, 7.0], [53.0, 7.0], [53.1, 7.0], [53.2, 7.0], [53.3, 7.0], [53.4, 7.0], [53.5, 7.0], [53.6, 7.0], [53.7, 7.0], [53.8, 7.0], [53.9, 7.0], [54.0, 7.0], [54.1, 7.0], [54.2, 7.0], [54.3, 7.0], [54.4, 7.0], [54.5, 7.0], [54.6, 7.0], [54.7, 7.0], [54.8, 7.0], [54.9, 7.0], [55.0, 7.0], [55.1, 7.0], [55.2, 7.0], [55.3, 7.0], [55.4, 7.0], [55.5, 7.0], [55.6, 7.0], [55.7, 7.0], [55.8, 7.0], [55.9, 7.0], [56.0, 7.0], [56.1, 7.0], [56.2, 7.0], [56.3, 7.0], [56.4, 7.0], [56.5, 7.0], [56.6, 7.0], [56.7, 7.0], [56.8, 7.0], [56.9, 7.0], [57.0, 7.0], [57.1, 7.0], [57.2, 7.0], [57.3, 7.0], [57.4, 7.0], [57.5, 7.0], [57.6, 7.0], [57.7, 7.0], [57.8, 7.0], [57.9, 7.0], [58.0, 7.0], [58.1, 7.0], [58.2, 7.0], [58.3, 7.0], [58.4, 7.0], [58.5, 7.0], [58.6, 7.0], [58.7, 7.0], [58.8, 7.0], [58.9, 7.0], [59.0, 7.0], [59.1, 7.0], [59.2, 7.0], [59.3, 7.0], [59.4, 7.0], [59.5, 7.0], [59.6, 7.0], [59.7, 7.0], [59.8, 7.0], [59.9, 7.0], [60.0, 7.0], [60.1, 7.0], [60.2, 7.0], [60.3, 7.0], [60.4, 7.0], [60.5, 7.0], [60.6, 7.0], [60.7, 7.0], [60.8, 7.0], [60.9, 7.0], [61.0, 7.0], [61.1, 7.0], [61.2, 7.0], [61.3, 7.0], [61.4, 7.0], [61.5, 7.0], [61.6, 7.0], [61.7, 7.0], [61.8, 7.0], [61.9, 7.0], [62.0, 7.0], [62.1, 7.0], [62.2, 7.0], [62.3, 7.0], [62.4, 7.0], [62.5, 7.0], [62.6, 7.0], [62.7, 7.0], [62.8, 7.0], [62.9, 7.0], [63.0, 7.0], [63.1, 7.0], [63.2, 7.0], [63.3, 7.0], [63.4, 7.0], [63.5, 7.0], [63.6, 7.0], [63.7, 7.0], [63.8, 7.0], [63.9, 7.0], [64.0, 7.0], [64.1, 7.0], [64.2, 7.0], [64.3, 7.0], [64.4, 7.0], [64.5, 7.0], [64.6, 7.0], [64.7, 7.0], [64.8, 7.0], [64.9, 7.0], [65.0, 7.0], [65.1, 7.0], [65.2, 7.0], [65.3, 7.0], [65.4, 7.0], [65.5, 7.0], [65.6, 7.0], [65.7, 7.0], [65.8, 7.0], [65.9, 7.0], [66.0, 7.0], [66.1, 7.0], [66.2, 7.0], [66.3, 7.0], [66.4, 7.0], [66.5, 7.0], [66.6, 7.0], [66.7, 7.0], [66.8, 7.0], [66.9, 7.0], [67.0, 7.0], [67.1, 7.0], [67.2, 7.0], [67.3, 7.0], [67.4, 7.0], [67.5, 7.0], [67.6, 7.0], [67.7, 7.0], [67.8, 7.0], [67.9, 7.0], [68.0, 7.0], [68.1, 7.0], [68.2, 7.0], [68.3, 7.0], [68.4, 7.0], [68.5, 7.0], [68.6, 7.0], [68.7, 7.0], [68.8, 7.0], [68.9, 7.0], [69.0, 7.0], [69.1, 7.0], [69.2, 7.0], [69.3, 7.0], [69.4, 7.0], [69.5, 7.0], [69.6, 7.0], [69.7, 7.0], [69.8, 7.0], [69.9, 7.0], [70.0, 7.0], [70.1, 7.0], [70.2, 7.0], [70.3, 7.0], [70.4, 7.0], [70.5, 7.0], [70.6, 7.0], [70.7, 7.0], [70.8, 7.0], [70.9, 7.0], [71.0, 7.0], [71.1, 7.0], [71.2, 7.0], [71.3, 7.0], [71.4, 7.0], [71.5, 7.0], [71.6, 7.0], [71.7, 7.0], [71.8, 7.0], [71.9, 7.0], [72.0, 7.0], [72.1, 7.0], [72.2, 7.0], [72.3, 7.0], [72.4, 7.0], [72.5, 7.0], [72.6, 7.0], [72.7, 7.0], [72.8, 7.0], [72.9, 7.0], [73.0, 7.0], [73.1, 7.0], [73.2, 7.0], [73.3, 7.0], [73.4, 7.0], [73.5, 7.0], [73.6, 7.0], [73.7, 7.0], [73.8, 7.0], [73.9, 7.0], [74.0, 7.0], [74.1, 7.0], [74.2, 7.0], [74.3, 7.0], [74.4, 7.0], [74.5, 7.0], [74.6, 7.0], [74.7, 7.0], [74.8, 7.0], [74.9, 7.0], [75.0, 7.0], [75.1, 7.0], [75.2, 7.0], [75.3, 7.0], [75.4, 7.0], [75.5, 7.0], [75.6, 7.0], [75.7, 7.0], [75.8, 7.0], [75.9, 7.0], [76.0, 7.0], [76.1, 7.0], [76.2, 7.0], [76.3, 7.0], [76.4, 7.0], [76.5, 7.0], [76.6, 7.0], [76.7, 7.0], [76.8, 7.0], [76.9, 7.0], [77.0, 7.0], [77.1, 7.0], [77.2, 7.0], [77.3, 7.0], [77.4, 7.0], [77.5, 7.0], [77.6, 7.0], [77.7, 7.0], [77.8, 7.0], [77.9, 7.0], [78.0, 7.0], [78.1, 7.0], [78.2, 7.0], [78.3, 7.0], [78.4, 7.0], [78.5, 7.0], [78.6, 7.0], [78.7, 7.0], [78.8, 7.0], [78.9, 7.0], [79.0, 7.0], [79.1, 7.0], [79.2, 7.0], [79.3, 8.0], [79.4, 8.0], [79.5, 8.0], [79.6, 8.0], [79.7, 8.0], [79.8, 8.0], [79.9, 8.0], [80.0, 8.0], [80.1, 8.0], [80.2, 8.0], [80.3, 8.0], [80.4, 8.0], [80.5, 8.0], [80.6, 8.0], [80.7, 8.0], [80.8, 8.0], [80.9, 8.0], [81.0, 8.0], [81.1, 8.0], [81.2, 8.0], [81.3, 8.0], [81.4, 8.0], [81.5, 8.0], [81.6, 8.0], [81.7, 8.0], [81.8, 8.0], [81.9, 8.0], [82.0, 8.0], [82.1, 8.0], [82.2, 8.0], [82.3, 8.0], [82.4, 8.0], [82.5, 8.0], [82.6, 8.0], [82.7, 8.0], [82.8, 8.0], [82.9, 8.0], [83.0, 8.0], [83.1, 8.0], [83.2, 8.0], [83.3, 8.0], [83.4, 8.0], [83.5, 8.0], [83.6, 8.0], [83.7, 8.0], [83.8, 8.0], [83.9, 8.0], [84.0, 8.0], [84.1, 8.0], [84.2, 8.0], [84.3, 8.0], [84.4, 8.0], [84.5, 8.0], [84.6, 8.0], [84.7, 8.0], [84.8, 8.0], [84.9, 8.0], [85.0, 8.0], [85.1, 8.0], [85.2, 8.0], [85.3, 8.0], [85.4, 8.0], [85.5, 8.0], [85.6, 8.0], [85.7, 8.0], [85.8, 8.0], [85.9, 8.0], [86.0, 8.0], [86.1, 8.0], [86.2, 8.0], [86.3, 8.0], [86.4, 8.0], [86.5, 8.0], [86.6, 8.0], [86.7, 8.0], [86.8, 8.0], [86.9, 8.0], [87.0, 8.0], [87.1, 8.0], [87.2, 8.0], [87.3, 8.0], [87.4, 8.0], [87.5, 8.0], [87.6, 8.0], [87.7, 8.0], [87.8, 8.0], [87.9, 8.0], [88.0, 8.0], [88.1, 8.0], [88.2, 8.0], [88.3, 8.0], [88.4, 8.0], [88.5, 8.0], [88.6, 8.0], [88.7, 8.0], [88.8, 8.0], [88.9, 8.0], [89.0, 8.0], [89.1, 8.0], [89.2, 8.0], [89.3, 8.0], [89.4, 8.0], [89.5, 8.0], [89.6, 8.0], [89.7, 8.0], [89.8, 8.0], [89.9, 8.0], [90.0, 8.0], [90.1, 8.0], [90.2, 8.0], [90.3, 8.0], [90.4, 8.0], [90.5, 8.0], [90.6, 8.0], [90.7, 8.0], [90.8, 8.0], [90.9, 8.0], [91.0, 8.0], [91.1, 8.0], [91.2, 8.0], [91.3, 8.0], [91.4, 8.0], [91.5, 8.0], [91.6, 8.0], [91.7, 8.0], [91.8, 8.0], [91.9, 8.0], [92.0, 8.0], [92.1, 8.0], [92.2, 8.0], [92.3, 8.0], [92.4, 8.0], [92.5, 8.0], [92.6, 8.0], [92.7, 8.0], [92.8, 8.0], [92.9, 8.0], [93.0, 8.0], [93.1, 8.0], [93.2, 8.0], [93.3, 8.0], [93.4, 8.0], [93.5, 8.0], [93.6, 8.0], [93.7, 8.0], [93.8, 8.0], [93.9, 8.0], [94.0, 8.0], [94.1, 8.0], [94.2, 8.0], [94.3, 8.0], [94.4, 8.0], [94.5, 8.0], [94.6, 8.0], [94.7, 8.0], [94.8, 8.0], [94.9, 8.0], [95.0, 8.0], [95.1, 8.0], [95.2, 8.0], [95.3, 8.0], [95.4, 8.0], [95.5, 8.0], [95.6, 8.0], [95.7, 8.0], [95.8, 8.0], [95.9, 8.0], [96.0, 8.0], [96.1, 8.0], [96.2, 8.0], [96.3, 8.0], [96.4, 8.0], [96.5, 8.0], [96.6, 8.0], [96.7, 8.0], [96.8, 8.0], [96.9, 8.0], [97.0, 8.0], [97.1, 8.0], [97.2, 8.0], [97.3, 8.0], [97.4, 8.0], [97.5, 8.0], [97.6, 8.0], [97.7, 8.0], [97.8, 8.0], [97.9, 8.0], [98.0, 8.0], [98.1, 8.0], [98.2, 8.0], [98.3, 8.0], [98.4, 8.0], [98.5, 8.0], [98.6, 8.0], [98.7, 9.0], [98.8, 9.0], [98.9, 9.0], [99.0, 9.0], [99.1, 9.0], [99.2, 9.0], [99.3, 9.0], [99.4, 9.0], [99.5, 9.0], [99.6, 10.0], [99.7, 16.0], [99.8, 16.0], [99.9, 19.0]], "isOverall": false, "label": "https://localhost:44339/listings/id/23601178", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1075.0, "minX": 0.0, "maxY": 1075.0, "series": [{"data": [[0.0, 1075.0]], "isOverall": false, "label": "https://localhost:44339/listings/id/23601178", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4.9E-324, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1075.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1075.0, "series": [{"data": [[0.0, 1075.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.6539121575E12, "maxY": 1.0, "series": [{"data": [[1.6539121785E12, 1.0], [1.653912177E12, 1.0], [1.653912159E12, 1.0], [1.6539121575E12, 1.0], [1.65391218E12, 1.0], [1.6539121725E12, 1.0], [1.653912171E12, 1.0], [1.6539121755E12, 1.0], [1.653912174E12, 1.0], [1.653912168E12, 1.0], [1.653912189E12, 1.0], [1.6539121665E12, 1.0], [1.6539121875E12, 1.0], [1.6539121695E12, 1.0], [1.653912192E12, 1.0], [1.6539121905E12, 1.0], [1.653912162E12, 1.0], [1.653912183E12, 1.0], [1.6539121605E12, 1.0], [1.6539121815E12, 1.0], [1.653912186E12, 1.0], [1.653912165E12, 1.0], [1.6539121845E12, 1.0], [1.6539121635E12, 1.0]], "isOverall": false, "label": "parallel bzm - Parallel", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.653912192E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 7.145251396648045, "minX": 1.0, "maxY": 20.0, "series": [{"data": [[1.0, 7.145251396648045], [2.0, 20.0]], "isOverall": false, "label": "https://localhost:44339/listings/id/23601178", "isController": false}, {"data": [[1.00093023255814, 7.157209302325578]], "isOverall": false, "label": "https://localhost:44339/listings/id/23601178-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 2.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 397.3333333333333, "minX": 1.6539121575E12, "maxY": 71300.0, "series": [{"data": [[1.6539121785E12, 52286.666666666664], [1.653912177E12, 50385.333333333336], [1.653912159E12, 6654.666666666667], [1.6539121575E12, 3802.6666666666665], [1.65391218E12, 57990.666666666664], [1.6539121725E12, 38977.333333333336], [1.653912171E12, 36125.333333333336], [1.6539121755E12, 45632.0], [1.653912174E12, 42780.0], [1.653912168E12, 28520.0], [1.653912189E12, 71300.0], [1.6539121665E12, 24717.333333333332], [1.6539121875E12, 71300.0], [1.6539121695E12, 31372.0], [1.653912192E12, 62744.0], [1.6539121905E12, 71300.0], [1.653912162E12, 14260.0], [1.653912183E12, 63694.666666666664], [1.6539121605E12, 10457.333333333334], [1.6539121815E12, 59892.0], [1.653912186E12, 71300.0], [1.653912165E12, 20914.666666666668], [1.6539121845E12, 67497.33333333333], [1.6539121635E12, 18062.666666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6539121785E12, 5463.333333333333], [1.653912177E12, 5264.666666666667], [1.653912159E12, 695.3333333333334], [1.6539121575E12, 397.3333333333333], [1.65391218E12, 6059.333333333333], [1.6539121725E12, 4072.6666666666665], [1.653912171E12, 3774.6666666666665], [1.6539121755E12, 4768.0], [1.653912174E12, 4470.0], [1.653912168E12, 2980.0], [1.653912189E12, 7450.0], [1.6539121665E12, 2582.6666666666665], [1.6539121875E12, 7450.0], [1.6539121695E12, 3278.0], [1.653912192E12, 6556.0], [1.6539121905E12, 7450.0], [1.653912162E12, 1490.0], [1.653912183E12, 6655.333333333333], [1.6539121605E12, 1092.6666666666667], [1.6539121815E12, 6258.0], [1.653912186E12, 7450.0], [1.653912165E12, 2185.3333333333335], [1.6539121845E12, 7052.666666666667], [1.6539121635E12, 1887.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.653912192E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 6.853333333333334, "minX": 1.6539121575E12, "maxY": 8.428571428571429, "series": [{"data": [[1.6539121785E12, 7.3999999999999995], [1.653912177E12, 7.113207547169811], [1.653912159E12, 8.428571428571429], [1.6539121575E12, 7.25], [1.65391218E12, 7.278688524590163], [1.6539121725E12, 7.146341463414634], [1.653912171E12, 6.973684210526317], [1.6539121755E12, 7.374999999999999], [1.653912174E12, 7.377777777777778], [1.653912168E12, 6.966666666666666], [1.653912189E12, 6.853333333333334], [1.6539121665E12, 7.1923076923076925], [1.6539121875E12, 7.2], [1.6539121695E12, 7.303030303030303], [1.653912192E12, 7.0151515151515165], [1.6539121905E12, 7.053333333333334], [1.653912162E12, 7.199999999999999], [1.653912183E12, 7.104477611940298], [1.6539121605E12, 7.2727272727272725], [1.6539121815E12, 7.365079365079367], [1.653912186E12, 7.093333333333334], [1.653912165E12, 7.045454545454546], [1.6539121845E12, 7.056338028169014], [1.6539121635E12, 7.105263157894736]], "isOverall": false, "label": "https://localhost:44339/listings/id/23601178", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.653912192E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 6.853333333333334, "minX": 1.6539121575E12, "maxY": 8.428571428571429, "series": [{"data": [[1.6539121785E12, 7.3999999999999995], [1.653912177E12, 7.094339622641509], [1.653912159E12, 8.428571428571429], [1.6539121575E12, 7.25], [1.65391218E12, 7.262295081967213], [1.6539121725E12, 7.146341463414634], [1.653912171E12, 6.947368421052632], [1.6539121755E12, 7.374999999999999], [1.653912174E12, 7.355555555555556], [1.653912168E12, 6.966666666666666], [1.653912189E12, 6.853333333333334], [1.6539121665E12, 7.1923076923076925], [1.6539121875E12, 7.186666666666667], [1.6539121695E12, 7.303030303030303], [1.653912192E12, 7.000000000000001], [1.6539121905E12, 7.039999999999999], [1.653912162E12, 7.199999999999999], [1.653912183E12, 7.08955223880597], [1.6539121605E12, 7.090909090909091], [1.6539121815E12, 7.34920634920635], [1.653912186E12, 7.093333333333334], [1.653912165E12, 7.045454545454546], [1.6539121845E12, 7.056338028169014], [1.6539121635E12, 7.105263157894736]], "isOverall": false, "label": "https://localhost:44339/listings/id/23601178", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.653912192E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 6.066666666666668, "minX": 1.6539121575E12, "maxY": 7.8571428571428585, "series": [{"data": [[1.6539121785E12, 6.69090909090909], [1.653912177E12, 6.339622641509434], [1.653912159E12, 7.8571428571428585], [1.6539121575E12, 6.25], [1.65391218E12, 6.459016393442623], [1.6539121725E12, 6.341463414634146], [1.653912171E12, 6.2368421052631575], [1.6539121755E12, 6.562500000000001], [1.653912174E12, 6.511111111111111], [1.653912168E12, 6.100000000000001], [1.653912189E12, 6.066666666666668], [1.6539121665E12, 6.423076923076923], [1.6539121875E12, 6.213333333333332], [1.6539121695E12, 6.454545454545455], [1.653912192E12, 6.257575757575758], [1.6539121905E12, 6.28], [1.653912162E12, 6.3999999999999995], [1.653912183E12, 6.3283582089552235], [1.6539121605E12, 6.636363636363637], [1.6539121815E12, 6.555555555555557], [1.653912186E12, 6.226666666666666], [1.653912165E12, 6.272727272727273], [1.6539121845E12, 6.267605633802816], [1.6539121635E12, 6.31578947368421]], "isOverall": false, "label": "https://localhost:44339/listings/id/23601178", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.653912192E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 6.0, "minX": 1.6539121575E12, "maxY": 20.0, "series": [{"data": [[1.6539121785E12, 9.0], [1.653912177E12, 8.0], [1.653912159E12, 19.0], [1.6539121575E12, 8.0], [1.65391218E12, 9.0], [1.6539121725E12, 9.0], [1.653912171E12, 8.0], [1.6539121755E12, 10.0], [1.653912174E12, 16.0], [1.653912168E12, 8.0], [1.653912189E12, 8.0], [1.6539121665E12, 8.0], [1.6539121875E12, 20.0], [1.6539121695E12, 9.0], [1.653912192E12, 8.0], [1.6539121905E12, 8.0], [1.653912162E12, 8.0], [1.653912183E12, 8.0], [1.6539121605E12, 9.0], [1.6539121815E12, 16.0], [1.653912186E12, 9.0], [1.653912165E12, 8.0], [1.6539121845E12, 8.0], [1.6539121635E12, 8.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6539121785E12, 8.0], [1.653912177E12, 8.0], [1.653912159E12, 19.0], [1.6539121575E12, 8.0], [1.65391218E12, 8.0], [1.6539121725E12, 8.0], [1.653912171E12, 8.0], [1.6539121755E12, 8.0], [1.653912174E12, 8.0], [1.653912168E12, 7.900000000000002], [1.653912189E12, 7.0], [1.6539121665E12, 8.0], [1.6539121875E12, 8.0], [1.6539121695E12, 8.0], [1.653912192E12, 8.0], [1.6539121905E12, 8.0], [1.653912162E12, 8.0], [1.653912183E12, 8.0], [1.6539121605E12, 8.8], [1.6539121815E12, 8.0], [1.653912186E12, 8.0], [1.653912165E12, 8.0], [1.6539121845E12, 8.0], [1.6539121635E12, 8.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6539121785E12, 9.0], [1.653912177E12, 8.0], [1.653912159E12, 19.0], [1.6539121575E12, 8.0], [1.65391218E12, 9.0], [1.6539121725E12, 9.0], [1.653912171E12, 8.0], [1.6539121755E12, 10.0], [1.653912174E12, 16.0], [1.653912168E12, 8.0], [1.653912189E12, 8.0], [1.6539121665E12, 8.0], [1.6539121875E12, 20.0], [1.6539121695E12, 9.0], [1.653912192E12, 8.0], [1.6539121905E12, 8.0], [1.653912162E12, 8.0], [1.653912183E12, 8.0], [1.6539121605E12, 9.0], [1.6539121815E12, 16.0], [1.653912186E12, 9.0], [1.653912165E12, 8.0], [1.6539121845E12, 8.0], [1.6539121635E12, 8.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6539121785E12, 8.0], [1.653912177E12, 8.0], [1.653912159E12, 19.0], [1.6539121575E12, 8.0], [1.65391218E12, 8.0], [1.6539121725E12, 8.0], [1.653912171E12, 8.0], [1.6539121755E12, 9.0], [1.653912174E12, 8.0], [1.653912168E12, 8.0], [1.653912189E12, 8.0], [1.6539121665E12, 8.0], [1.6539121875E12, 8.0], [1.6539121695E12, 8.299999999999997], [1.653912192E12, 8.0], [1.6539121905E12, 8.0], [1.653912162E12, 8.0], [1.653912183E12, 8.0], [1.6539121605E12, 9.0], [1.6539121815E12, 8.0], [1.653912186E12, 8.0], [1.653912165E12, 8.0], [1.6539121845E12, 8.0], [1.6539121635E12, 8.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6539121785E12, 6.0], [1.653912177E12, 6.0], [1.653912159E12, 6.0], [1.6539121575E12, 7.0], [1.65391218E12, 6.0], [1.6539121725E12, 6.0], [1.653912171E12, 6.0], [1.6539121755E12, 6.0], [1.653912174E12, 6.0], [1.653912168E12, 6.0], [1.653912189E12, 6.0], [1.6539121665E12, 6.0], [1.6539121875E12, 6.0], [1.6539121695E12, 6.0], [1.653912192E12, 6.0], [1.6539121905E12, 6.0], [1.653912162E12, 6.0], [1.653912183E12, 6.0], [1.6539121605E12, 7.0], [1.6539121815E12, 6.0], [1.653912186E12, 6.0], [1.653912165E12, 6.0], [1.6539121845E12, 6.0], [1.6539121635E12, 7.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6539121785E12, 7.0], [1.653912177E12, 7.0], [1.653912159E12, 7.0], [1.6539121575E12, 7.0], [1.65391218E12, 7.0], [1.6539121725E12, 7.0], [1.653912171E12, 7.0], [1.6539121755E12, 7.0], [1.653912174E12, 7.0], [1.653912168E12, 7.0], [1.653912189E12, 7.0], [1.6539121665E12, 7.0], [1.6539121875E12, 7.0], [1.6539121695E12, 7.0], [1.653912192E12, 7.0], [1.6539121905E12, 7.0], [1.653912162E12, 7.0], [1.653912183E12, 7.0], [1.6539121605E12, 7.0], [1.6539121815E12, 7.0], [1.653912186E12, 7.0], [1.653912165E12, 7.0], [1.6539121845E12, 7.0], [1.6539121635E12, 7.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.653912192E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 7.0, "minX": 4.0, "maxY": 8.0, "series": [{"data": [[8.0, 7.0], [33.0, 7.0], [35.0, 7.0], [38.0, 8.0], [10.0, 7.0], [40.0, 7.0], [41.0, 7.0], [43.0, 7.0], [45.0, 7.0], [48.0, 7.0], [50.0, 7.0], [14.0, 7.0], [15.0, 7.0], [4.0, 7.0], [16.0, 7.0], [18.0, 7.0], [5.0, 7.0], [20.0, 7.0], [23.0, 7.0], [25.0, 7.0], [26.0, 7.0], [28.0, 7.0], [30.0, 7.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 7.0, "minX": 4.0, "maxY": 8.0, "series": [{"data": [[8.0, 7.0], [33.0, 7.0], [35.0, 7.0], [38.0, 8.0], [10.0, 7.0], [40.0, 7.0], [41.0, 7.0], [43.0, 7.0], [45.0, 7.0], [48.0, 7.0], [50.0, 7.0], [14.0, 7.0], [15.0, 7.0], [4.0, 7.0], [16.0, 7.0], [18.0, 7.0], [5.0, 7.0], [20.0, 7.0], [23.0, 7.0], [25.0, 7.0], [26.0, 7.0], [28.0, 7.0], [30.0, 7.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.6539121575E12, "maxY": 50.666666666666664, "series": [{"data": [[1.6539121785E12, 37.333333333333336], [1.653912177E12, 35.333333333333336], [1.653912159E12, 4.666666666666667], [1.6539121575E12, 2.6666666666666665], [1.65391218E12, 40.0], [1.6539121725E12, 27.333333333333332], [1.653912171E12, 24.666666666666668], [1.6539121755E12, 32.0], [1.653912174E12, 30.0], [1.653912168E12, 20.0], [1.653912189E12, 50.0], [1.6539121665E12, 17.333333333333332], [1.6539121875E12, 49.333333333333336], [1.6539121695E12, 22.666666666666668], [1.653912192E12, 44.0], [1.6539121905E12, 50.0], [1.653912162E12, 10.0], [1.653912183E12, 45.333333333333336], [1.6539121605E12, 7.333333333333333], [1.6539121815E12, 42.0], [1.653912186E12, 50.666666666666664], [1.653912165E12, 14.666666666666666], [1.6539121845E12, 46.666666666666664], [1.6539121635E12, 12.666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.653912192E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.6539121575E12, "maxY": 50.0, "series": [{"data": [[1.6539121785E12, 36.666666666666664], [1.653912177E12, 35.333333333333336], [1.653912159E12, 4.666666666666667], [1.6539121575E12, 2.6666666666666665], [1.65391218E12, 40.666666666666664], [1.6539121725E12, 27.333333333333332], [1.653912171E12, 25.333333333333332], [1.6539121755E12, 32.0], [1.653912174E12, 30.0], [1.653912168E12, 20.0], [1.653912189E12, 50.0], [1.6539121665E12, 17.333333333333332], [1.6539121875E12, 50.0], [1.6539121695E12, 22.0], [1.653912192E12, 44.0], [1.6539121905E12, 50.0], [1.653912162E12, 10.0], [1.653912183E12, 44.666666666666664], [1.6539121605E12, 7.333333333333333], [1.6539121815E12, 42.0], [1.653912186E12, 50.0], [1.653912165E12, 14.666666666666666], [1.6539121845E12, 47.333333333333336], [1.6539121635E12, 12.666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.653912192E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.6539121575E12, "maxY": 50.0, "series": [{"data": [[1.6539121785E12, 36.666666666666664], [1.653912177E12, 35.333333333333336], [1.653912159E12, 4.666666666666667], [1.6539121575E12, 2.6666666666666665], [1.65391218E12, 40.666666666666664], [1.6539121725E12, 27.333333333333332], [1.653912171E12, 25.333333333333332], [1.6539121755E12, 32.0], [1.653912174E12, 30.0], [1.653912168E12, 20.0], [1.653912189E12, 50.0], [1.6539121665E12, 17.333333333333332], [1.6539121875E12, 50.0], [1.6539121695E12, 22.0], [1.653912192E12, 44.0], [1.6539121905E12, 50.0], [1.653912162E12, 10.0], [1.653912183E12, 44.666666666666664], [1.6539121605E12, 7.333333333333333], [1.6539121815E12, 42.0], [1.653912186E12, 50.0], [1.653912165E12, 14.666666666666666], [1.6539121845E12, 47.333333333333336], [1.6539121635E12, 12.666666666666666]], "isOverall": false, "label": "https://localhost:44339/listings/id/23601178-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.653912192E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.6539121575E12, "maxY": 50.0, "series": [{"data": [[1.6539121785E12, 36.666666666666664], [1.653912177E12, 35.333333333333336], [1.653912159E12, 4.666666666666667], [1.6539121575E12, 2.6666666666666665], [1.65391218E12, 40.666666666666664], [1.6539121725E12, 27.333333333333332], [1.653912171E12, 25.333333333333332], [1.6539121755E12, 32.0], [1.653912174E12, 30.0], [1.653912168E12, 20.0], [1.653912189E12, 50.0], [1.6539121665E12, 17.333333333333332], [1.6539121875E12, 50.0], [1.6539121695E12, 22.0], [1.653912192E12, 44.0], [1.6539121905E12, 50.0], [1.653912162E12, 10.0], [1.653912183E12, 44.666666666666664], [1.6539121605E12, 7.333333333333333], [1.6539121815E12, 42.0], [1.653912186E12, 50.0], [1.653912165E12, 14.666666666666666], [1.6539121845E12, 47.333333333333336], [1.6539121635E12, 12.666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.653912192E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

