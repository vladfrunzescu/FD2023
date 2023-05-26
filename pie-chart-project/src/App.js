import React, {Component} from "react";
import BarChart from "./components/BarChart";

class App extends Component{
    render() {
        const data = [
            ["Mon", 20],
            ["Tue", 14],
            ["Wed", 12],
            ["Thu", 4],
            ["Fri", 5],
            ["Sat", 18],
            ["Sun", 0],
        ];
        return (
            <BarChart
                width={450}
                height={350}
                xLabel={'Day'}
                yLabel={'km'}
                data={data}
            />
        )
    }
}

export default App;
